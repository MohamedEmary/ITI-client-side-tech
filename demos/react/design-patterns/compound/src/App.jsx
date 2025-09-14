import Button from "./components/Button/Button";

import Menu from "./components/Menu/index";

function App() {
	return (
		<main>
			{/* <Button className="someclass" variant="danger" size="lg">
				test
			</Button> */}

			{/* button      menu items 
			
			prop drilling
			*/}
			{/*  table */}
			{/* 
			<ul>
				<li>
			</ul> 
			
			<form action="">
				<input type="text" />
			</form> */}

			{/* Prop Drilling */}
			<Menu>
				{/* open state ====== toggle function */}
				{/* onClick */}
				<div>
					<Menu.Button>Some text</Menu.Button>
				</div>
				{/* Conditional Rendering */}
				<Menu.Dropdown>
					<Menu.Item>Red</Menu.Item>
					<Menu.Item>Green</Menu.Item>
					<Menu.Item>Blue</Menu.Item>
					<Menu.Item>Yellow</Menu.Item>
					<Menu.Item>White</Menu.Item>
				</Menu.Dropdown>
			</Menu>
		</main>
	);
}

export default App;
