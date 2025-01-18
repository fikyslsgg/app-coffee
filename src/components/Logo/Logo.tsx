import styles from "./Logo.module.css";

export function Logo() {
	return (
		<img
			src="https://raw.githubusercontent.com/fikyslsgg/app-coffee/9def8d43e6c92a334175025168caa9f726a89417/public/icon/logo.svg"
			alt="logo"
			className={styles.logo}
		/>
	);
}
