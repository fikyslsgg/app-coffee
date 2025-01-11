import { useShallow } from "zustand/shallow";
import { useCoffeeStore } from "../../model/coffeeStore";
import { CoffeeCard } from "../CoffeeCard/CoffeeCard";
import styles from "./CardList.module.css";

export const CardList = () => {
	const [coffeeList] = useCoffeeStore(
		useShallow((state) => [state.coffeeList]),
	);

	return (
		<div className={styles.cardsContainer}>
			{coffeeList &&
				coffeeList.map((coffee) => (
					<CoffeeCard key={coffee.id} coffee={coffee} />
				))}
		</div>
	);
};
