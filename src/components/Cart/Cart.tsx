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
				<div className={styles.cartWrapper}>
					{cart.map((item, index) => (
						<div className={styles.cartItem}>
							<div
								key={item.id}
							>{`${index + 1}. ${item.name} — ${item.quantity} шт`}</div>
							<Button onClick={() => deleteToCart(item.id)}>
								<img src="/public/icon/delete-icon.svg" alt="delete-icon" />
							</Button>
						</div>
					))}
					<div className={styles.cartDesc}>
						<Input
							placeholder="введите адрес"
							value={address}
							onChange={(e) => setAddress(e.target.value)}
						/>
						<Button onClick={orderCoffee} type="primary" disabled={!address}>
							Сделать заказ
						</Button>
						<Button onClick={clearCart}>Очистить корзину</Button>
					</div>
				</div>
			) : (
				<span>Добавьте напиток</span>
			)}
		</aside>
	);
};
