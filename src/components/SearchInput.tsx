import { Input } from "antd";
import { useEffect } from "react";
import { useShallow } from "zustand/shallow";
import { useUrlParamsStore } from "../helpers/useUrlStorage";
import { getCoffeeList, setParams, useCoffeeStore } from "../model/coffeeStore";

export const SearchInput = () => {
	const [params] = useCoffeeStore(useShallow((state) => [state.params]));

	useEffect(() => {
		getCoffeeList(params);
	}, []);

	useUrlParamsStore(params, setParams);

	return (
		<Input
			value={params.text}
			onChange={(e) => setParams({ text: e.target.value })}
			placeholder="search"
		/>
	);
};
