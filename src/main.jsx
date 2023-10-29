import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ColorModeScript } from "@chakra-ui/react";
import theme from "./components/theme.js";
import { GoogleOAuthProvider } from "@react-oauth/google";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <GoogleOAuthProvider clientId="891007400337-4hfq1vnu18ivfj1d5jg24i7qbivb2mad.apps.googleusercontent.com">
      <BrowserRouter>
        <App />
        {/* <Dpp/> */}
      </BrowserRouter>
    </GoogleOAuthProvider>
  </>
);
