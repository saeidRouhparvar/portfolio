import { Flex, Box, useColorMode, Select } from "@chakra-ui/react";
import React, { useState } from "react";
import Color from "../Color";
import { pxToRem } from "../Utils";
import Setting from "../header/Setting";
// @ts-ignore
import Home from "../../assets/img/home.svg";
// @ts-ignore
import Briefcase from "../../assets/img/briefcase.svg";
// @ts-ignore
import Chatbox_Ellipses from "../../assets/img/chatbox-ellipses.svg";
// @ts-ignore
import Book from "../../assets/img/book.svg";
// @ts-ignore
import Document_Text from "../../assets/img/document-text.svg";
// @ts-ignore
import Code from "../../assets/img/code.svg";

const Icon = [
  { icon: Home },
  { icon: Code },
  { icon: Book },
  { icon: Briefcase },
  { icon: Document_Text },
  { icon: Chatbox_Ellipses },
];

const RightSide = () => {
  const { colorMode } = useColorMode();
  const [active,setActive] = useState(false)
  return (
    <Box
    pos={"sticky"}
    top={pxToRem(32)}
    left={0}
    h={"100vh"}
    display={{base:"none",xl:"flex"}}
      gap={pxToRem(32)}
      flexDirection={"column"}
      alignItems={"center"}
      p={pxToRem(20)}
      borderRadius={"12px"}
      bg={colorMode === "light" ? Color.ColorBase.base_100 : ""}
    >
      <Setting />
    <Flex direction={"column"} gap={pxToRem(32)} mt={pxToRem(64)}>
    {Icon.map((item: any) => (
        <Box
          p={"12px"}
          bg={colorMode === "light" ? active === true ?Color.ColorPrimary.primary : "" : ""}
          borderRadius={"8px"}
        >
          <Box 
          onClick={() =>setActive(true)}
          opacity={active === false ? "0.6" : "1"} w={"24px"} as="img" src={item.icon} />
        </Box>
      ))}
    </Flex>
    </Box>
  );
};
export default RightSide;
