import axios from "axios";
import { produce } from "immer";
import { StateCreator } from "zustand";
import { BASE_URL } from "../api/CoreApi";
import { OrderCoffeeRes, OrderItem } from "../types/coffeeTypes";
import { CartAction, CartState, ListActions, ListState } from "./store.types";

export const cartSlice: StateCreator<
	ListState & ListActions & CartState & CartAction,
	[["zustand/devtools", never], ["zustand/persist", unknown]],
	[["zustand/devtools", never], ["zustand/persist", unknown]],
	CartState & CartAction
> = (set, get) => ({
	cart: undefined,
	address: undefined,
	addToCart: (item) => {
		const { id, name, subTitle } = item;

		const prepearedItem: OrderItem = {
			id,
			name: `${name} ${subTitle}`,
			size: "L",
			quantity: 1,
		};
		set(
			produce<CartState>((draft) => {
				if (!draft.cart) draft.cart = [];
				const itemIndex = draft.cart.findIndex(
					(item) => item.id === prepearedItem.id,
				);
				if (itemIndex !== -1) {
					draft.cart[itemIndex].quantity += 1;
					return;
				}
				draft.cart.push(prepearedItem);
			}),
		);
	},
	orderCoffee: async () => {
		const { cart, address, clearCart } = get();
		try {
			const { data } = await axios.post<OrderCoffeeRes>(BASE_URL + "/order", {
				address,
				orderItems: cart,
			});
			if (data.success) {
				alert(data.message);
				clearCart();
			}
		} catch (error) {
			console.log(error);
		}
	},
	clearCart: () => {
		set({ cart: undefined });
	},
	setAddress: (address) => {
		set({ address });
	},
});
