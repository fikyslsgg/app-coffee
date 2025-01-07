import {
	CoffeeType,
	GetCoffeeRequestParams,
	OrderItem,
} from "../types/coffeeTypes";

export type ListState = {
	coffeeList?: CoffeeType[];
	controller?: AbortController;
	params: GetCoffeeRequestParams;
};

export type ListActions = {
	getCoffeeList: (params?: GetCoffeeRequestParams) => Promise<CoffeeType[]>;
	setParams: (params?: GetCoffeeRequestParams) => void;
};

export type CartState = {
	cart?: OrderItem[];
	address?: string;
};

export type CartAction = {
	setAddress: (address: string) => void;
	orderCoffee: () => void;
	addToCart: (item: CoffeeType) => void;
	clearCart: () => void;
};
