import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";

import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.NEXT_PUBLIC_BASE_URL}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
