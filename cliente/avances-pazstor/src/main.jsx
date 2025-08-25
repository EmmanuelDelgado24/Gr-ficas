// main.jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "flowbite";
import 'flowbite-datepicker';
import App from "./app.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

