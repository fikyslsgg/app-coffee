import { Input } from "antd";
import { useUrlParamsStore } from "../../helpers/useUrlStorage";
import { setParams, useCoffeeStore } from "../../model/coffeeStore";

import { useShallow } from "zustand/react/shallow";

import { useCustomQuery } from "../../helpers/useCastomQuery";

export const SearchInput = () => {
	const [params] = useCoffeeStore(useShallow((s) => [s.params]));

	useUrlParamsStore(params, setParams);
	useCustomQuery(params);

	return (
		<Input
			placeholder="Search"
			value={params?.text}
			onChange={(e) => setParams({ text: e.target.value })}
		/>
	);
};
