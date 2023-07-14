import { ChakraProvider } from "@chakra-ui/react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { indexRoutes } from "./routes";

const App = () => {
  return (
    <ChakraProvider>
      <BrowserRouter>
      <Routes>
        {indexRoutes.map((index,key) => {
          return (
            <Route path={index.path} key={key} />
          )
        })}
      </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
};

export default App;
