import { Box, Flex, useColorMode } from "@chakra-ui/react";
import TypographyWeb from "../Typography";
import Color from "../Color";
import Setting from "./Setting";

const Navbar = () => {
  const { colorMode } = useColorMode();

  return (

    <Flex
      px={"128px"}
      pt={"32px"}
      pb={"16px"}
      gap={"32px"}
      alignItems={"center"}
    >
    <Setting/>
      
      <Flex
        gap={"16px"}
        {...TypographyWeb.Caption_medium}
        color={
          colorMode === "light"
            ? Color.TextColor.Secondary_Light
            : Color.TextColor.Secondary_Dark
        }
      >
        <Box >Blog</Box>
        <Box>Projects</Box>
      </Flex>
    </Flex>
  );
};

export default Navbar;
