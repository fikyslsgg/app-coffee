import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { GetCoffeeRequestParams } from "../types/coffeeTypes";
import { cartSlice } from "./cartSlice";
import { listSlice } from "./listSlice";
import { CartAction, CartState, ListActions, ListState } from "./storetypes";

export const useCoffeeStore = create<
	ListState & ListActions & CartState & CartAction
>()(
	devtools(
		persist((...arg) => ({ ...listSlice(...arg), ...cartSlice(...arg) }), {
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
