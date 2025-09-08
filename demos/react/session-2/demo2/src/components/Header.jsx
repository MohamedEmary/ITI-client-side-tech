import globeIcon from "../assets/Globe.svg";
function Header() {
	return (
		<header>
			<img src={globeIcon} alt="Globe icon" />
			<p>my travel journal.</p>
		</header>
	);
}

export default Header;
