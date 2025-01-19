import { URL } from "../../api/CoreApi";
import styles from "./OrderLogo.module.css";

export function OrderLogo() {
	return (
		<img
			src={`${URL}/order-icon.svg`}
			alt="odred-icon"
			className={styles.orderLogo}
		/>
	);
}
