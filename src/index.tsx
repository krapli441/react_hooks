import React from "react";
import { createRoot, Root } from "react-dom/client";
import App from "./views/App";

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(<App />);
