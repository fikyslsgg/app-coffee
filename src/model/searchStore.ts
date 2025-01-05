import { create, StateCreator } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";
import { getCoffeeList } from "./coffeeStore";
import { hashStorage } from "../helpers/hashStorage";

type SearchState = {
	text?: string;
};

type SearchAction = {
	setText: (text: string) => void;
};

const SearchSlice: StateCreator<
	SearchState & SearchAction,
	[["zustand/devtools", never], ["zustand/persist", unknown]]
> = (set) => ({
	text: undefined,
	setText(text) {
		set({ text }, false, "setText");
	},
});

export const useSearchStore = create<SearchState & SearchAction>()(
	devtools(
		persist(SearchSlice, {
			name: "SearchStore",
			storage: createJSONStorage(() => hashStorage),
		}),
		{ name: "SearchSlice" },
	),
);

useSearchStore.subscribe((state, prevState) => {
	if (state.text !== prevState.text) {
		getCoffeeList({ text: state.text });
	}
});
