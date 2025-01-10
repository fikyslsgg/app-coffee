import "./App.css";
import { CardList } from "./components/CardList/CardList";
import { Header } from "./components/Header/Header";
import { SearchInput } from "./components/SearchInput/SearchInput";

function App() {
	return (
		<div className="wrapper">
			<SearchInput />
			<Header />
			<div className="container">
				<CardList />
			</div>
		</div>
	);
}

export default App;
