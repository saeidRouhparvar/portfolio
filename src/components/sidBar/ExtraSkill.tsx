import React from "react";
import { Box, Flex, useColorMode } from "@chakra-ui/react";
import Color from "../Color";
import Typography from "../Typography";
import { pxToRem } from "../Utils";

export const ExtraSkill = () => {
  const { colorMode } = useColorMode();

  return (
    <Flex gap={pxToRem(20)} direction={"column"}>
      <Box
        {...Typography.h6_semiBold}
        color={colorMode === "light" ? Color.ColorBase.base_content : ""}
      >
        Extra Skill
      </Box>
      <Flex
        {...Typography.b6_medium}
        color={colorMode === "light" ? Color.ColorBase.base_content : ""}
        opacity={"0.6"}
        gap={pxToRem(16)}
        direction={"column"}
      >
        <Flex justify={"space-between"}>
          <Box>Redux</Box>
          <Box>Redux Toolkit</Box>
          <Box>JQuery</Box>
        </Flex>
        <Flex justify={"space-between"}>
          <Box>PWA</Box>
          <Box>Qraph QL</Box>
          <Box>Apollo</Box>
        </Flex>
        <Flex justify={"space-between"}>
          <Box>Rest API</Box>
          <Box>SASS</Box>
          <Box>Disign System</Box>
        </Flex>
        <Flex justify={"space-between"}>
          <Box>Bootstrap</Box>
          <Box>MUI</Box>
          <Box>Chakra UI</Box>
        </Flex>
      </Flex>
    </Flex>
  );
};
