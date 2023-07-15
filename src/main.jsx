import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ColorModeScript } from "@chakra-ui/react";
import theme from "./components/theme.js";

ReactDOM.createRoot(document.getElementById("root")).render(

  <>
  <ColorModeScript initialColorMode={theme.config.initialColorMode} />
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </>
);
