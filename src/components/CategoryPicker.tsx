import { Button } from "antd";
import { useShallow } from "zustand/shallow";
import { setParams, useCoffeeStore } from "../model/coffeeStore";
import { CoffeeCategoryEnum } from "../types/coffeeTypes";

export const CategoryPicker = () => {
	const [params] = useCoffeeStore(useShallow((state) => [state.params]));
	return (
		<div>
			{Object.keys(CoffeeCategoryEnum).map((key) => (
				<Button
					key={key}
					danger={params.type === key}
					onClick={() =>
						setParams({
							type: CoffeeCategoryEnum[key as keyof typeof CoffeeCategoryEnum],
						})
					}
				>
					{key}
				</Button>
			))}
		</div>
	);
};
