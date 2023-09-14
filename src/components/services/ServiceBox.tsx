import { Box, Flex, useColorMode } from "@chakra-ui/react";
import React from "react";
import { pxToRem } from "../Utils";
import Color from "../Color";
import { RightArrowShort } from "../Svg";
import Typography from "../Typography";

const ServiceBox = ({ icon, title, description_1, description_2 }) => {
  const { colorMode } = useColorMode();

  return (
    <Flex
      minW={pxToRem(324)}
      direction={"column"}
      p={pxToRem(32)}
      borderRadius={"12px"}
      bg={colorMode === "light" ? Color.ColorBase.base_100 : ""}
    >
      <Box
        bg={colorMode === "light" ? Color.ColorBase.base_200 : ""}
        p={pxToRem(16)}
        borderRadius={"12px"}
        w={"64px"}
      >
        {icon}
      </Box>
      <Box {...Typography.h4_semiBold} color={colorMode === "light" ? Color.ColorBase.base_content :""} my={pxToRem(36)}>{title}</Box>
      <Flex  direction={"column"} gap={pxToRem(12)} mt={pxToRem(24)}>
        <Flex  gap={pxToRem(10)} align={"center"}>
          <Box>{RightArrowShort}</Box>
          <Box {...Typography.b4_regular} opacity={"0.6"}>{description_1}</Box>
        </Flex>
        <Flex gap={pxToRem(10)} align={"center"}>
          <Box>{RightArrowShort}</Box>
          <Box {...Typography.b4_regular} opacity={"0.6"}>{description_2}</Box>
        </Flex>
      </Flex>
    </Flex>
  );
};
export default ServiceBox;
