import { Input } from "antd";
import { useEffect } from "react";
import "./App.css";
import { Cart } from "./components/Cart";
import { CoffeeCard } from "./components/CoffeeCard";
import { useUrlParamsStore } from "./helpers/useUrlStorage";
import { useCoffeeStore } from "./model/coffeeStore";

function App() {
	const {
		getCoffeeList,
		coffeeList,

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
						coffeeList.map((coffee) => <CoffeeCard coffee={coffee} />)}
				</div>
				<Cart />
			</div>
		</div>
	);
}

export default App;
