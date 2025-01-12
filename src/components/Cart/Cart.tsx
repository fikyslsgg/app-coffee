import { Button, Input } from "antd";
import { useShallow } from "zustand/shallow";
import {
	clearCart,
	orderCoffee,
	setAddress,
	useCoffeeStore,
} from "../../model/coffeeStore";
import styles from "./Cart.module.css";
import { OrderLogo } from "../OrderLogo/OrderLogo";

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
						<div>
							<div key={item.id}>{`${item.name} — ${item.quantity} шт`}</div>
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
