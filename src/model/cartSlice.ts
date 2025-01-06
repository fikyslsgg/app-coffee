import axios from "axios";
import { StateCreator } from "zustand";
import { BASE_URL } from "../api/CoreApi";
import { OrderCoffeeRes, OrderItem } from "../types/coffeeTypes";
import { CartAction, CartState, ListActions, ListState } from "./storetypes";

export const cartSlice: StateCreator<
	ListState & ListActions & CartState & CartAction,
	[["zustand/devtools", never], ["zustand/persist", unknown]],
	[["zustand/devtools", never], ["zustand/persist", unknown]],
	CartState & CartAction
> = (set, get) => ({
	cart: undefined,
	address: undefined,
	addToCart: (item) => {
		const { cart } = get();
		const { id, name, subTitle } = item;

		const prepearedItem: OrderItem = {
			id,
			name: `${name} ${subTitle}`,
			size: "L",
			quantity: 1,
		};
		set({ cart: cart ? [...cart, prepearedItem] : [prepearedItem] });
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
