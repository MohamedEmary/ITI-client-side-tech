import reactLogo from "/src/assets/react.svg";

function Navbar() {
	return (
		<header>
			<img src={reactLogo} alt="React Logo" className="react-logo" />
			<h1>ReactFacts</h1>
			{/* <nav>
				<ul>
					<li>Pricing</li>
					<li>About</li>
					<li>Contact</li>
				</ul>
			</nav> */}
		</header>
	);
}

export default Navbar;
