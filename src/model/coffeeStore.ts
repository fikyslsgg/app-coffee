import axios from "axios";
import { create, StateCreator } from "zustand";
import { devtools } from "zustand/middleware";
import { CoffeeType } from "../types/coffeeTypes";

const BASE_URL = "https://purpleschool.ru/coffee-api";

type CoffeeState = {
	coffeeList?: CoffeeType[];
};

type CoffeeAction = {
	getCoffeeList: () => void;
};

const coffeeSlice: StateCreator<
	CoffeeState & CoffeeAction,
	[["zustand/devtools", never]]
> = (set) => ({
	coffeeList: undefined,
	getCoffeeList: async () => {
		try {
			const { data } = await axios.get(BASE_URL);
			set({ coffeeList: data });
		} catch (error) {
			console.log(error);
		}
	},
});

export const useCoffeeStore = create<CoffeeState & CoffeeAction>()(
	devtools(coffeeSlice),
);
