import Button from "./components/Button/Button";

import Menu from "./components/Menu/index";
import Star from "./components/Star";
import Toggle from "./components/Toggle";

function App() {
	return (
		<main>
			<Menu
				onToggle={() => {
					console.log("menu component toggled");
				}}>
				<Menu.Button>Some text</Menu.Button>
				<Menu.Dropdown>
					<Menu.Item>Red</Menu.Item>
					<Menu.Item>Green</Menu.Item>
					<Menu.Item>Blue</Menu.Item>
					<Menu.Item>Yellow</Menu.Item>
					<Menu.Item>White</Menu.Item>
				</Menu.Dropdown>
			</Menu>

			<Star />

			<Toggle
				onToggle={() => {
					console.log("test");
				}}>
				<Toggle.Button>
					<Toggle.Display
					// render={(on) => {
					// return <div className={`box ${on ? "filled" : ""}`}></div>;
					// }}
					>
						{(on) => {
							return <div className={`box ${on ? "filled" : ""}`}></div>;
						}}
					</Toggle.Display>
				</Toggle.Button>
			</Toggle>
		</main>
	);
}

export default App;
