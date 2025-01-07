import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { getCoffeeList, setData } from "../model/coffeeStore";
import { GetCoffeeRequestParams } from "../types/coffeeTypes";

export const useCastomQuery = (params: GetCoffeeRequestParams) => {
	const { data, status } = useQuery({
		queryKey: ["coffeeList", params],
		queryFn: () => getCoffeeList(),
	});
	useEffect(() => {
		setData(data);
	}, [data, status]);
};
