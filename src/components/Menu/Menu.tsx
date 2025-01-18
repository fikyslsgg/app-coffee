import { NavLink } from "react-router-dom";
import { useShallow } from "zustand/shallow";
import { useCoffeeStore } from "../../model/coffeeStore";
import { CategoryPicker } from "../CategoryPicker/CategoryPicker";
import styles from "./Menu.module.css";

export const Menu = () => {
	const [cart] = useCoffeeStore(useShallow((state) => [state.cart]));

	return (
		<div className={styles.menu}>
			<CategoryPicker />
			<NavLink to="/cart" className={styles.cartIcon}>
				<span>Корзина</span>
				<img
					src="https://raw.githubusercontent.com/fikyslsgg/app-coffee/9def8d43e6c92a334175025168caa9f726a89417/public/icon/cart-icon.svg"
					alt="cart-icon"
				/>
				{cart && cart.length > 0 && (
					<span className={styles.cartCount}>{cart.length}</span>
				)}
			</NavLink>
		</div>
	);
};
