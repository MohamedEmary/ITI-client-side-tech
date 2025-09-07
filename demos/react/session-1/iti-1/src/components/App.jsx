// import React, { createElement } from "react";
import Content from "./Content";
import Navbar from "./Navbar";

export default function App() {
	// console.log(
	// 	<h1
	// 		style={{
	// 			backgroundColor: "green",
	// 		}}>
	// 		this is a <span className="sp">header</span>
	// 	</h1>
	// );

	// console.log(React);

	// console.log(
	// 	React.createElement(
	// 		"h1",
	// 		{
	// 			style: {
	// 				backgroundColor: "green",
	// 			},
	// 		},
	// 		[
	// 			"this is a ",
	// 			createElement(
	// 				"span",
	// 				{
	// 					className: "sp",
	// 				},
	// 				"header"
	// 			),
	// 		]
	// 	)
	// );

	/* 
		<h1 class="test" style="width: 50px;">header</h1>
		<h1 className="test" style={{width: 50}}>header</h1>
	*/

	// const x = 10;

	// Fragment
	// React.Fragment
	// <> </>
	return (
		<>
			{/* <React.Fragment> */}
			<Navbar />
			{/* <h1 className={x}>this is a header {x}</h1> */}
			<Content />
			{/* </React.Fragment> */}
		</>
	);
}
