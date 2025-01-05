import { create, StateCreator } from "zustand";
import { devtools } from "zustand/middleware";
import { getCoffeeList } from "./coffeeStore";

type SearchState = {
	text?: string;
};

type SearchAction = {
	setText: (text: string) => void;
};

const SearchSlice: StateCreator<
	SearchState & SearchAction,
	[
		["zustand/devtools", never],
		// ["zustand/persist", unknown]
	]
> = (set) => ({
	text: undefined,
	setText(text) {
		set({ text }, false, "setText");
	},
});

export const useSearchStore = create<SearchState & SearchAction>()(
	devtools(SearchSlice, { name: "SearchSlice" }),
);

useSearchStore.subscribe((state, prevState) => {
	if (state.text !== prevState.text) {
		getCoffeeList({ text: state.text });
	}
});
