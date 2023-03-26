import { createRoot } from "react-dom/client";
import { App } from "./App";

const query = new URLSearchParams(window.location.search);
const demoMode = query.get("auth") === null;
const app = document.getElementById("root");
if (app) {
  createRoot(app).render(<App />);
}
