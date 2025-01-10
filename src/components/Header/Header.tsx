import { useShallow } from "zustand/shallow";
import { useCoffeeStore } from "../../model/coffeeStore";
import { CategoryPicker } from "../CategoryPicker/CategoryPicker";
import styles from "./Header.module.css";

export const Header = () => {
	const [cart] = useCoffeeStore(useShallow((state) => [state.cart]));

	return (
		<div className={styles.header}>
			<CategoryPicker />
			<a href="#">
				Корзина {cart && cart.length > 0 && <span>{cart.length}</span>}
			</a>
		</div>
	);
};
