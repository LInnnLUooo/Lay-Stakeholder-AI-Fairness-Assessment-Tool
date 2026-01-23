import React from "react";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);


root.render(
  <React.StrictMode>
    <BrowserRouter>  {/*使用路由，需要用其包裹App*/}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
