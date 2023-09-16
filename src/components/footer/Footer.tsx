import { Box, Flex, useColorMode } from "@chakra-ui/react";
import React from "react";
import Color from "../Color";
import { pxToRem } from "../Utils";
import Typography from "../Typography";

export const Footer = () => {
  const { colorMode } = useColorMode();
  return (
    <Flex
      justify={"center"}
      align={"center"}
      direction={{base:"column",sm:"row"}}
      {...Typography.b4_regular}
      bg={colorMode === "light" ? Color.ColorBase.base_100 : ""}
      borderRadius={"12px"}
      px={pxToRem(24)}
      py={pxToRem(20)}
    > 
    <Box>© 2023 SaeidRouhparvar. </Box>
    <Box>All Rights Reserved.</Box>
      
    </Flex>
  );
};
export default Footer;
