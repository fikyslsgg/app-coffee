import { Button, Input } from "antd";
import { useShallow } from "zustand/shallow";
import {
	clearCart,
	deleteToCart,
	orderCoffee,
	setAddress,
	useCoffeeStore,
} from "../../model/coffeeStore";
import { OrderLogo } from "../OrderLogo/OrderLogo";
import styles from "./Cart.module.css";

export const Cart = () => {
	const [cart, address] = useCoffeeStore(
		useShallow((state) => [state.cart, state.address]),
	);

	return (
		<aside className={styles.cart}>
			<OrderLogo />
			{cart && cart.length > 0 ? (
				<>
					{cart.map((item) => (
						<div className={styles.cartItem}>
							<div key={item.id}>{`${item.name} — ${item.quantity} шт`}</div>
							<Button onClick={() => deleteToCart(item.id)}>x</Button>
						</div>
					))}
					<div className={styles.cartDesc}>
						<Input
							placeholder="Адрес"
							value={address}
							onChange={(e) => setAddress(e.target.value)}
						/>
						<Button onClick={orderCoffee} type="primary" disabled={!address}>
							Сделать заказ
						</Button>
						<Button onClick={clearCart}>Очистить корзину</Button>
					</div>
				</>
			) : (
				<span>Добавьте напиток</span>
			)}
		</aside>
	);
};
