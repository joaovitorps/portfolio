import { createRoot } from "react-dom/client";

document.body.innerHTML = '<div id="react"></div>';

const root = createRoot(document.getElementById("react"));
root.render(<h1>opa front end</h1>);
