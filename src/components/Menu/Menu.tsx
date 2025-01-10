import { NavLink } from "react-router-dom";
import { useShallow } from "zustand/shallow";
import { useCoffeeStore } from "../../model/coffeeStore";
import { CategoryPicker } from "../CategoryPicker/CategoryPicker";
import styles from "./Menu.module.css";

export const Menu = () => {
	const [cart] = useCoffeeStore(useShallow((state) => [state.cart]));

	return (
		<div className={styles.header}>
			<CategoryPicker />
			<NavLink to="/cart">
				Корзина {cart && cart.length > 0 && <span>{cart.length}</span>}
			</NavLink>
		</div>
	);
};
