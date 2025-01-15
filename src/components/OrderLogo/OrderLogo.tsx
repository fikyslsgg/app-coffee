import styles from "./OrderLogo.module.css";

export function OrderLogo() {
	return (
		<img
			src="/public/icon/order-icon.svg"
			alt="odred-icon"
			className={styles.orderLogo}
		/>
	);
}
