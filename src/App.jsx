import { ChakraProvider } from "@chakra-ui/react";
import { Routes, Route} from "react-router-dom";
import Navbar from "./components/header/Navbar";
// import { indexRoutes } from "./routes";
import Introduction from "./components/header/Introduction";

const App = () => {
  return (
    <ChakraProvider>
      <Routes>
        {/* {indexRoutes.map((index,key) => {
          return (
            <Route path={index.path} key={key} />
          )
        })} */}
        <Route path="/" element={<Navbar/>}/>
        <Route path="/" element={<Introduction/>}/>
      </Routes>
    </ChakraProvider>
  );
};

export default App;
