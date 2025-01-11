import { Button } from "antd";
import { useShallow } from "zustand/shallow";
import { setParams, useCoffeeStore } from "../../model/coffeeStore";
import { CoffeeTypeEnum } from "../../types/coffeeTypes";
import styles from "./CategoryPicker.module.css";

export const CategoryPicker = () => {
	const [params] = useCoffeeStore(useShallow((state) => [state.params]));
	return (
		<div className={styles.category}>
			{Object.keys(CoffeeTypeEnum).map((key) => (
				<Button
					key={key}
					danger={params.type === key}
					onClick={() =>
						setParams({
							type: CoffeeTypeEnum[key as keyof typeof CoffeeTypeEnum],
						})
					}
				>
					{key}
				</Button>
			))}
		</div>
	);
};
