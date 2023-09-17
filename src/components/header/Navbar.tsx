import React from "react";
import { Avatar, Box, Flex, useColorMode } from "@chakra-ui/react";
import Color from "../Color";
import { pxToRem } from "../Utils";
import Setting from "./Setting";
import BurgerMenu from "./BurgerMenu";
import Typography from "../Typography";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { colorMode } = useColorMode();
  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      mb={pxToRem(32)}
      bg={colorMode === "light" ? Color.ColorBase.base_100 : ""}
      borderRadius={"80px"}
      py={pxToRem(12)}
      px={pxToRem(24)}
      cursor={"pointer"}
    >
      <Box>
        <Avatar w={pxToRem(36)} h={pxToRem(36)} />
      </Box>
      <Box {...Typography.b4_regular} alignItems={"center"}
      display={{ base: "none", xl: "flex" }}
      gap={pxToRem(32)}>
        <Link to={'/app'}>Home</Link>
        <Link to={'/about'}>About</Link>
        <Link to={'/services'}>Services</Link>
        <Link to={'/projects'}>Projects</Link>
        <Link to={'/blog'}>Blog</Link>
        <Link to={'/contact'}>Contact</Link>
      </Box>
      <Flex align={"center"} gap={{ base: pxToRem(12), md: pxToRem(24) }}>
        <Setting />
        <BurgerMenu />
      </Flex>
    </Box>
  );
};
export default Navbar;
