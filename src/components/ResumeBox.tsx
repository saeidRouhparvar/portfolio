import { Box, Flex, useColorMode } from "@chakra-ui/react";
import React from "react";
import { pxToRem } from "./Utils";
import Typography from "./Typography";
import Color from "./Color";

const ResumeBox = ({ title, description, position, date }) => {
  const { colorMode } = useColorMode();
  return (
    <>
      <Flex
        py={pxToRem(40)}
        color={colorMode === "light" ? Color.ColorBase.base_content : ""}
        justify={"space-between"}
        gap={{lg:pxToRem(104),base:pxToRem(24)}}
        align={{lg:"center",md:"left"}}
        direction={{base:"column",lg:"row"}}
      >
        <Flex ps={{base:"16px",lg:"0"}} direction={"column"} gap={pxToRem(12)}>
          <Box {...Typography.h5_semiBold}>{title}</Box>
          <Flex align={"center"} gap={"10px"}>
            <Box {...Typography.b4_regular}>{position}</Box>
            <Box
              borderRadius={"6px"}
              p={"4px 12px"}
              bg={"rgba(247, 143, 66, 0.10)"}
              color={colorMode === "light" ? Color.ColorPrimary.primary : ""}
              {...Typography.b6_medium}
            >
              {date}
            </Box>
          </Flex>
        </Flex>
        <Box opacity={"0.5"} maxW={pxToRem(619)}>
          {description}
        </Box>
      </Flex>
      <Box border={"1px solid"} opacity={"0.1"} _last={{ borderWidth: "0px" }}/>
    </>
  );
};
export default ResumeBox;
