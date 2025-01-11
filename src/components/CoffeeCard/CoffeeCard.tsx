import { ShoppingCartOutlined } from "@ant-design/icons";
import { Button, Card, Rate, Tag } from "antd";
import { addToCart } from "../../model/coffeeStore";
import { CoffeeType } from "../../types/coffeeTypes";
import styles from "./CoffeeCard.module.css";

export const CoffeeCard = ({ coffee }: { coffee: CoffeeType }) => {
	return (
		<Card
			className={styles.coffeeCard}
			cover={<img src={coffee.image} alt={coffee.name} />}
			actions={[
				<Button
					icon={<ShoppingCartOutlined />}
					onClick={() => addToCart(coffee)}
				>
					{coffee.price}
				</Button>,
			]}
		>
			<div className={styles.coffeeDesc}>
				<Card.Meta title={coffee.name} description={coffee.subTitle} />
				<Tag className={styles.coffeeTag}>{coffee.type}</Tag>
				<Rate
					defaultValue={coffee.rating}
					disabled
					allowHalf
					style={{ marginTop: 12 }}
				/>
			</div>
		</Card>
	);
};
