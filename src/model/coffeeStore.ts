import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { CoffeeType, GetCoffeeRequestParams } from "../types/coffeeTypes";
import { cartSlice } from "./cartSlice";
import { listSlice } from "./listSlice";
import { CartAction, CartState, ListActions, ListState } from "./storeTypes";

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

export const setParams = (params?: GetCoffeeRequestParams) =>
	useCoffeeStore.getState().setParams(params);

export const setAddress = (address: string) =>
	useCoffeeStore.getState().setAddress(address);

export const orderCoffee = () => useCoffeeStore.getState().orderCoffee();

export const clearCart = () => useCoffeeStore.getState().clearCart();

export const addToCart = (item: CoffeeType) =>
	useCoffeeStore.getState().addToCart(item);

export const setData = (data?: CoffeeType[]) =>
	useCoffeeStore.setState({ coffeeList: data });
