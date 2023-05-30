import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import {
  applyPolyfills,
  defineCustomElements,
} from "../node_modules/card/loader";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter basename="/roar/">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

applyPolyfills().then(() => {
  defineCustomElements();
});
