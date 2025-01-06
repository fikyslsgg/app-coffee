import "./App.css";
import { CoffeList } from "./components/CardList";
import { Cart } from "./components/Cart";
import { SearchInput } from "./components/SearchInput";
import { useUrlParamsStore } from "./helpers/useUrlStorage";
import { useCoffeeStore } from "./model/coffeeStore";

function App() {
	return (
		<div className="wrapper">
			<SearchInput />
			<div style={{ display: "flex" }}>
				<CoffeList />
				<Cart />
			</div>
		</div>
	);
}

export default App;
