import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ThemeContextProvider from "./components/ThemeContextProvider.jsx";
import OutsideContext from "./components/OutsideContext.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<hr />
		<ThemeContextProvider>
			<OutsideContext />
			<App />
		</ThemeContextProvider>
	</StrictMode>
);
