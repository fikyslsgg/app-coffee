import axios from "axios";
import { StateCreator } from "zustand";
import { BASE_URL } from "../api/CoreApi";
import { CoffeeCategoryEnum } from "../types/coffeeTypes";
import { CartAction, CartState, ListActions, ListState } from "./store.types";

export const listSlice: StateCreator<
	ListState & ListActions & CartState & CartAction,
	[["zustand/devtools", never], ["zustand/persist", unknown]],
	[["zustand/devtools", never], ["zustand/persist", unknown]],
	ListState & ListActions
> = (set, get) => ({
	coffeeList: undefined,
	controller: undefined,
	params: {
		text: undefined,
		type: CoffeeCategoryEnum.cappuccino,
	},
	setParams: (NewParams) => {
		const { getCoffeeList, params } = get();
		set({ params: { ...params, ...NewParams } }, false, "setParams");
		getCoffeeList(params);
	},
	getCoffeeList: async (params) => {
		const { controller } = get();
		if (controller) {
			controller.abort();
		}
		const newController = new AbortController();
		set({ controller: newController });
		const { signal } = newController;
		const { data } = await axios.get(BASE_URL, { params, signal });
		return data;
	},
});
