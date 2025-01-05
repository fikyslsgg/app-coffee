import axios from "axios";
import { create, StateCreator } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { CoffeeType, GetCoffeeRequestParams } from "../types/coffeeTypes";
import { OrderCoffeeRes, OrderItem } from "./../types/coffeeTypes";

const BASE_URL = "https://purpleschool.ru/coffee-api";

type CoffeeState = {
	coffeeList?: CoffeeType[];
	controller?: AbortController;
	cart?: OrderItem[];
	address?: string;
};

type CoffeeAction = {
	getCoffeeList: (params?: GetCoffeeRequestParams) => void;
	addToCart: (item: CoffeeType) => void;
	clearCart: () => void;
	orderCoffee: () => void;
	setAddress: (address: string) => void;
};

const coffeeSlice: StateCreator<
	CoffeeState & CoffeeAction,
	[["zustand/devtools", never], ["zustand/persist", unknown]]
> = (set, get) => ({
	coffeeList: undefined,
	controller: undefined,
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
	clearCart: () => {
		set({ cart: undefined });
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
	setAddress: (address) => {
		set({ address });
	},
	getCoffeeList: async (params) => {
		const { controller } = get();
		if (controller) {
			controller.abort();
		}
		const newController = new AbortController();
		set({ controller: newController });
		const { signal } = newController;
		try {
			const { data } = await axios.get(BASE_URL, { params, signal });
			set({ coffeeList: data });
		} catch (error) {
			if (axios.isCancel(error)) {
				return;
			}
			console.log(error);
		}
	},
});

export const useCoffeeStore = create<CoffeeState & CoffeeAction>()(
	devtools(
		persist(coffeeSlice, {
			name: "coffeeStore",
			partialize: (state) => ({ cart: state.cart, address: state.address }),
		}),
		{
			name: "coffeeStore",
		},
	),
);

export const getCoffeeList = (params?: GetCoffeeRequestParams) =>
	useCoffeeStore.getState().getCoffeeList(params);
