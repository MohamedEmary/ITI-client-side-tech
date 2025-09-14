import Toggle from "../Toggle";

export default function Menu({ children }) {
	return (
		<Toggle>
			<div className="menu">{children}</div>
		</Toggle>
	);
}
