import { ShoppingCartOutlined } from "@ant-design/icons";
import { Button, Card, Input, Rate, Tag } from "antd";
import { useEffect } from "react";
import "./App.css";
import { useUrlParamsStore } from "./helpers/useUrlStorage";
import { useCoffeeStore } from "./model/coffeeStore";

function App() {
	const {
		getCoffeeList,
		coffeeList,
		addToCart,
		cart,
		clearCart,
		orderCoffee,
		address,
		setAddress,
		params,
		setParams,
	} = useCoffeeStore();

	useEffect(() => {
		getCoffeeList(params);
	}, []);

	useUrlParamsStore(params, setParams);

	return (
		<div className="wrapper">
			<Input
				value={params.text}
				onChange={(e) => setParams({ text: e.target.value })}
				placeholder="search"
			/>
			<div style={{ display: "flex" }}>
				<div className="cardsContainer">
					{coffeeList &&
						coffeeList.map((coffee) => (
							<Card
								key={coffee.id}
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
				<aside className="cart">
					<h1>Заказ</h1>
					{cart && cart.length > 0 ? (
						<>
							{cart.map((item, index) => (
								<span key={index}>{item.name}</span>
							))}
							<Input
								placeholder="адрес"
								value={address}
								onChange={(e) => setAddress(e.target.value)}
							/>
							<Button onClick={orderCoffee} type="primary" disabled={!address}>
								Сделать заказ
							</Button>
							<Button onClick={clearCart}>Очистить корзину</Button>
						</>
					) : (
						<span>Добавьте напиток</span>
					)}
				</aside>
			</div>
		</div>
	);
}

export default App;
