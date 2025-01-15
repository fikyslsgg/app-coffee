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
							<img
								className={styles.cartItemIcon}
								src={item.image}
								alt={item.name}
							/>
							<div
								key={item.id}
							>{` ${index + 1}. ${item.name} — ${item.quantity} шт`}</div>

							<Button onClick={() => deleteToCart(item.id)}>
								<img src="/public/icon/delete-icon.svg" alt="delete-icon" />
							</Button>
						</div>
					))}
					<div className={styles.cartDesc}>
						<Input
							placeholder="введите адрес"
							value={address}
							size="large"
							onChange={(e) => setAddress(e.target.value)}
						/>
						<Button
							size="large"
							onClick={orderCoffee}
							type="primary"
							disabled={!address}
						>
							Сделать заказ
						</Button>
						<Button size="large" onClick={clearCart}>
							Очистить корзину
						</Button>
					</div>
				</div>
			) : (
				<span className={styles.text}>
					Ваша корзина пуста, добавьте напиток &#128521;
				</span>
			)}
		</aside>
	);
};
