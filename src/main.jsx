import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

// Zart

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<App />
	</StrictMode>
);
