import { createRoot } from "react-dom/client";
import App from "./components/App.jsx";
import "./index.css";
import { StrictMode } from "react";

const root = createRoot(document.getElementById("root"));

// App component
// main component

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
