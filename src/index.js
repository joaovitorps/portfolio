import { createRoot } from "react-dom/client";
import App from "./App.jsx";

document.body.innerHTML = '<div id="react"></div>';

const root = createRoot(document.getElementById("react"));
root.render(<App />);
