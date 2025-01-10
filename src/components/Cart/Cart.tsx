import { Button, Input } from "antd";
import { useShallow } from "zustand/shallow";
import {
	clearCart,
	orderCoffee,
	setAddress,
	useCoffeeStore,
} from "../../model/coffeeStore";
import styles from "./Cart.module.css";

export const Cart = () => {
	const [cart, address] = useCoffeeStore(
		useShallow((state) => [state.cart, state.address]),
	);

	return (
		<aside className={styles.cart}>
			<h1>Заказ</h1>
			{cart && cart.length > 0 ? (
				<>
					{cart.map((item) => (
						<span key={item.id}>{`${item.name} — ${item.quantity} шт`}</span>
					))}
					<div className={styles.cartDesc}>
						<Input
							placeholder="адрес"
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
