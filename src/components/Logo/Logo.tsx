import { URL } from "../../api/CoreApi";
import styles from "./Logo.module.css";

export function Logo() {
	return <img src={`${URL}/logo.svg`} alt="logo" className={styles.logo} />;
}
