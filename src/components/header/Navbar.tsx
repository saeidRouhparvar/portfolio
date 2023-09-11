import React from "react";
import { Avatar, Box, Flex, useColorMode } from "@chakra-ui/react";
import Color from "../Color";
import { pxToRem } from "../Utils";
import Setting from "./Setting";
import BurgerMenu from "./BurgerMenu";

const Navbar = () => {
  const { colorMode } = useColorMode();
  return (
    <Box
      display={{ base: "flex", xl: "none" }}
      justifyContent={"space-between"}
      mb={pxToRem(32)}
      bg={colorMode === "light" ? Color.ColorBase.base_100 : ""}
      borderRadius={"80px"}
      py={pxToRem(12)}
      px={pxToRem(24)}
    >
        <Box><Avatar w={pxToRem(36)} h={pxToRem(36)}/></Box>
        <Flex align={"center"} gap={pxToRem(24)}>
            <Setting/>
            <BurgerMenu/>
        </Flex>
    </Box>
  );
};
export default Navbar;
