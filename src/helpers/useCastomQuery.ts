import { useQuery } from "@tanstack/react-query";
import { getCoffeeList } from "../model/coffeeStore";

import { CoffeeQueryParams } from "../types/coffeeTypes";

export const useCustomQuery = (params: CoffeeQueryParams) => {
	const { status, isLoading } = useQuery({
		queryKey: ["params", params],
		queryFn: () => getCoffeeList(params),
	});

	return { status, isLoading };
};
