import { ChakraProvider, Box, Flex, useColorMode } from "@chakra-ui/react";
import SideBar from "./components/sidBar/SideBar";
import Color from "./components/Color";
import { pxToRem } from "./components/Utils";
import MainSection from "./components/mainSection/MainSection";
import Navbar from "./components/header/Navbar";

const App = () => {
  // const {colorMode} = useColorMode()
  return (
    <ChakraProvider>
      <Flex
        justify={"center"}
        maxW={pxToRem(1536)}
        p={pxToRem(10)}
        // bg={colorMode === "light"  ? Color.ColorBase.base_200 : Color.ColorBase.base_content}
        bg={Color.ColorBase.base_200}
      >
        <Flex direction={"column"}>

          <Navbar />
        
          <Box pt={pxToRem(32)}>
            <Flex
              maxW={{
                base: pxToRem(360),
                sm: pxToRem(476),
                md: pxToRem(640),
                lg: pxToRem(1440),
              }}
              pb={pxToRem(32)}
              gap={{ md: pxToRem(0), lg: pxToRem(20)}}
            >
              <Box display={{ base: "none", lg: "block" }}>
                <SideBar />
              </Box>
              <Flex justify={"center"}>
                <MainSection />
              </Flex>
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </ChakraProvider>
  );
};

export default App;
