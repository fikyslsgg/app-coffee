import { NavLink } from "react-router-dom";
import styles from "./Error.module.css";

export const Error = () => {
	return (
		<div className={styles.error}>
			<img
				src="/public/icon/error-icon.svg"
				className={styles.errorIcon}
				alt="error-icon"
			/>
			<div>Ошибка!</div>
			<NavLink to="/" className={styles.errorLink}>
				Вернуться на главную страницу
			</NavLink>
		</div>
	);
};
