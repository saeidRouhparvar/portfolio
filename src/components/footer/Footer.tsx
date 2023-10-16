import { Box, Flex, useColorMode } from "@chakra-ui/react";
import React from "react";
import Color from "../Color";
import { pxToRem } from "../Utils";
import Typography from "../Typography";
import { BigInstagram, FaceBook, Instagram, LinkedIn, Twitter } from "../Svg";

export const Footer = () => {
  const { colorMode } = useColorMode();
  return (
    <>
  
      <Flex  mt={pxToRem(64)} w={"100%"} justify={"space-around"} gap={pxToRem(24)}>
        <Flex direction={"column"} gap={pxToRem(20)}>
          <Box w={"40px"} h={"40px"}>
            {BigInstagram}
          </Box>
          <Box {...Typography.b3_regular}>
            Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit, sed{" "}
            <br /> do eiusmod tempor incididunt ut <br /> labore et dolore magna
            aliqua.
          </Box>
          <Flex p={"12px 16px"} gap={pxToRem(20)}>
            <Box onClick={() => {}}>{FaceBook}</Box>
            <Box>{Instagram}</Box>
            <Box>{Twitter}</Box>
            <Box>{LinkedIn}</Box>
          </Flex>
        </Flex>
        <Flex direction={"column"} gap={pxToRem(24)}>
          <Box>NAVIGATION</Box>
          <Flex direction={"column"} gap={pxToRem(12)}>
            <Box>Home</Box>
            <Box>About</Box>
            <Box>Projects</Box>
            <Box>Services</Box>
            <Box>Blog</Box>
            <Box>Contact</Box>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};
export default Footer;
