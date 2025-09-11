import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import router from "./router.jsx";
import { RouterProvider } from "react-router";
import AuthContextProvide from "./components/AuthContextProvide.jsx";
import OutsideContext from "./components/OutsideContext.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<AuthContextProvide>
			{/* <OutsideContext /> */}
			<RouterProvider router={router} />
		</AuthContextProvide>
	</StrictMode>
);
