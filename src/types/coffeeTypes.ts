export type CoffeeType = {
	id: number;
	name: string;
	subTitle: string;
	type: string;
	price: number;
	image: string;
	rating: number;
};

export type GetCoffeeRequestParams = {
	text?: string;
};

export type OrderItem = {
	id: number;
	name: string;
	size: "L";
	quantity: number;
};

export type OrderCoffeeReq = {
	addres: string;
	orderItems: OrderItem[];
};

export type OrderCoffeeRes = {
	message: string;
	success: boolean;
};
