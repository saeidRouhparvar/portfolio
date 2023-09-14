import { Flex, Box, useColorMode, Avatar } from "@chakra-ui/react";
import React from "react";
import { pxToRem } from "../Utils";
import Color from "../Color";
import Typography from "../Typography";
import { Star } from "../Svg";

const TestimonialsBox = ({ title, subTitle, description }) => {
  const { colorMode } = useColorMode();
  return (
    <Flex
      bg={colorMode === "light" ? Color.ColorBase.base_100 : ""}
      maxW={pxToRem(324)}
      p={pxToRem(24)}
      borderRadius={"12px"}
      direction={"column"}
      gap={pxToRem(24)}
    >
      <Flex
        gap={pxToRem(16)}
        align={"center"}
        color={colorMode === "light" ? Color.ColorBase.base_content : ""}
      >
        <Avatar />
        <Box >
          <Box{...Typography.h5_semiBold}>{title}</Box>
          <Box {...Typography.b5_regular} opacity={"0.6"}>
            {subTitle}
          </Box>
        </Box>
      </Flex>
      <Box>{description}</Box>
      <Flex>
        <Box>{Star}</Box>
        <Box>{Star}</Box>
        <Box>{Star}</Box>
        <Box>{Star}</Box>
        <Box>{Star}</Box>
      </Flex>
    </Flex>
  );
};
export default TestimonialsBox;
