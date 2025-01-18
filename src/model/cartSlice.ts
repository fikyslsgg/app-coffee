import axios, { AxiosError } from "axios";
import { produce } from "immer";
import { StateCreator } from "zustand";
import { BASE_URL } from "../api/CoreApi";
import {
	CoffeItem,
	CoffeSizeEnum,
	OrderCoffeeReq,
	OrderCoffeeRes,
} from "../types/coffeeTypes";
import {
	CoffeeCartActions,
	CoffeeCartState,
	CoffeeListActions,
	CoffeeListState,
} from "./storeTypes";

export const cartSlice: StateCreator<
	CoffeeListActions & CoffeeListState & CoffeeCartActions & CoffeeCartState,
	[
		["zustand/devtools", never],
		["zustand/persist", unknown],
		["zustand/immer", unknown],
	],
	[
		["zustand/devtools", never],
		["zustand/persist", unknown],
		["zustand/immer", unknown],
	],
	CoffeeCartState & CoffeeCartActions
> = (set, get) => ({
	cart: undefined,
	address: undefined,
	image: "",

	clearCart: () => set({ cart: undefined }),

	setAddress: (address) => set({ address }),

	deleteToCart: (id: number) => {
		set(
			produce<CoffeeCartState>((draft) => {
				if (draft.cart) {
					const itemIndex = draft.cart.findIndex((item) => item.id === id);
					if (itemIndex !== -1) {
						draft.cart.splice(itemIndex, 1);
					}
				}
			}),
		);
	},

	addToCart: (item) => {
		const preparedItem: CoffeItem = {
			id: item.id,
			name: `${item.name} ${item.subTitle}`,
			quantity: 1,
			size: CoffeSizeEnum.M,
			image: item.image,
		};

		set(
			produce<CoffeeCartState>((draft) => {
				if (!draft.cart) draft.cart = [];

				const itemIndex = draft.cart.findIndex(
					(cartItem) => cartItem.id === preparedItem.id,
				);
				if (itemIndex !== -1) {
					draft.cart[itemIndex].quantity += 1;
					return;
				}
				draft.cart.push(preparedItem);
			}),
		);
	},

	orderCoffee: async () => {
		const { cart, address } = get();
		const order: OrderCoffeeReq = {
			address: address!,
			orderItems: cart!,
		};
		try {
			const { data } = await axios.post<OrderCoffeeRes>(
				BASE_URL + "order",
				order,
			);
			if (data.success) {
				alert(data.message);
				get().clearCart();
			}
		} catch (error) {
			if (error instanceof AxiosError) {
				console.error(error);
				alert("Спасибо за заказ!");
				get().clearCart();
			}
		}
	},
});
