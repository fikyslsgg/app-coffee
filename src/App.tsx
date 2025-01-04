import { ShoppingCartOutlined } from "@ant-design/icons";
import { Button, Card, Input, Rate, Tag } from "antd";
import { useEffect, useState } from "react";
import "./App.css";
import { useCoffeeStore } from "./model/coffeeStore";

function App() {
	const { getCoffeeList, coffeeList } = useCoffeeStore();
	const [text, setText] = useState<string | undefined>("");

	const handleSearcH = (text: string) => {
		getCoffeeList({ text });
		setText(text);
	};

	useEffect(() => {
		getCoffeeList();
	}, []);

	return (
		<div className="wrapper">
			<Input
				value={text}
				onChange={(e) => handleSearcH(e.target.value)}
				placeholder="search"
			/>
			<div className="cardsContainer">
				{coffeeList &&
					coffeeList.map((coffee) => (
						<Card
							key={coffee.id}
							cover={<img src={coffee.image} alt={coffee.name} />}
							actions={[
								<Button icon={<ShoppingCartOutlined />}>{coffee.price}</Button>,
							]}
						>
							<Card.Meta title={coffee.name} description={coffee.subTitle} />
							<Tag color="purple" style={{ marginTop: 12 }}>
								{coffee.type}
							</Tag>
							<Rate
								defaultValue={coffee.rating}
								disabled
								allowHalf
								style={{ marginTop: 12 }}
							/>
						</Card>
					))}
			</div>
		</div>
	);
}

export default App;
