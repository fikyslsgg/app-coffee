import styles from "./Logo.module.css";

export function Logo() {
	return <img src="/public/icon/logo.svg" alt="logo" className={styles.logo} />;
}
