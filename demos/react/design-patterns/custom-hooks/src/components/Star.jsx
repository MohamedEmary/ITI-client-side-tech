import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa6";
import Toggle from "./Toggle/index";

function Star() {
	// const [open, setOpen] = React.useState(true);
	// function toggle() {
	// 	setOpen((prevOpen) => !prevOpen);
	// }
	// return open ? (
	// 	<FaStar className="star filled" onClick={toggle} />
	// ) : (
	// 	<FaRegStar className="star " onClick={toggle} />
	// );

	// render props

	return (
		<>
			<Toggle>
				<Toggle.Button>
					<Toggle.On>
						<FaStar className="star filled" />
					</Toggle.On>
					<Toggle.Off>
						<FaRegStar className="star" />
					</Toggle.Off>
				</Toggle.Button>
			</Toggle>
		</>
	);
}

export default Star;
