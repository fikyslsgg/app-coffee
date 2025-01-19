import { NavLink } from "react-router-dom";
import { useShallow } from "zustand/shallow";
import { URL } from "../../api/CoreApi";
import { useCoffeeStore } from "../../model/coffeeStore";
import { CategoryPicker } from "../CategoryPicker/CategoryPicker";
import styles from "./Menu.module.css";

export const Menu = () => {
	const [cart] = useCoffeeStore(useShallow((state) => [state.cart]));

	return (
		<div className={styles.menu}>
			<CategoryPicker />
			<NavLink to="/app-coffee/cart" className={styles.cartIcon}>
				<span>Корзина</span>
				<img src={`${URL}/cart-icon.svg`} alt="cart-icon" />
				{cart && cart.length > 0 && (
					<span className={styles.cartCount}>{cart.length}</span>
				)}
			</NavLink>
		</div>
	);
};
