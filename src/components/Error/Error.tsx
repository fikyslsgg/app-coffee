import { NavLink } from "react-router-dom";
import { URL } from "../../api/CoreApi";
import styles from "./Error.module.css";

export const Error = () => {
	return (
		<div className={styles.error}>
			<img
				src={`${URL}/error-icon.svg`}
				className={styles.errorIcon}
				alt="error-icon"
			/>
			<div>Ошибка!</div>
			<NavLink to="/app-coffee/" className={styles.errorLink}>
				Вернуться на главную страницу
			</NavLink>
		</div>
	);
};
