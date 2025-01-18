import { useUrlParamsStore } from "../../helpers/useUrlStorage";
import { setParams, useCoffeeStore } from "../../model/coffeeStore";

import { useShallow } from "zustand/react/shallow";

import Search from "antd/es/input/Search";
import { useCustomQuery } from "../../helpers/useCastomQuery";
import styles from "./SearchInput.module.css";

export const SearchInput = () => {
	const [params] = useCoffeeStore(useShallow((s) => [s.params]));

	useUrlParamsStore(params, setParams);
	useCustomQuery(params);

	return (
		<Search
			enterButton="Search"
			size="large"
			className={styles.searchInput}
			placeholder="Search"
			value={params?.text}
			onChange={(e) => setParams({ text: e.target.value })}
		/>
	);
};
