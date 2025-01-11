import "./App.css";
import { CardList } from "./components/CardList/CardList";
import { Logo } from "./components/Logo/Logo";
import { Menu } from "./components/Menu/Menu";
import { SearchInput } from "./components/SearchInput/SearchInput";

function App() {
	return (
		<div className="wrapper">
			<Logo />
			<SearchInput />
			<Menu />
			<div className="container">
				<CardList />
			</div>
		</div>
	);
}

export default App;
