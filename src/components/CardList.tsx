import { useShallow } from "zustand/shallow";
import { useCoffeeStore } from "../model/coffeeStore";
import { CoffeeCard } from "./CoffeeCard";

export const CardList = () => {
	const [coffeeList] = useCoffeeStore(
		useShallow((state) => [state.coffeeList]),
	);

	return (
		<div className="cardsContainer">
			{coffeeList && coffeeList.map((coffee) => <CoffeeCard coffee={coffee} />)}
		</div>
	);
};
