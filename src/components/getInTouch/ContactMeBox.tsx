import { Box, Flex, useColorMode } from "@chakra-ui/react";
import React from "react";
import { pxToRem } from "../Utils";
import Color from "../Color";
import Typography from "../Typography";

export const ContactMeBox = ({
  logo,
  title_1,
  title_2,
  title_3,
  description_1,
  description_2,
  description_3,
}) => {
  const { colorMode } = useColorMode();
  return (
    <Flex
      bg={colorMode === "light" ? Color.ColorBase.base_100 : ""}
      borderRadius={"12px"}
      p={pxToRem(24)}
      gap={pxToRem(24)}
      direction={"column"}
    >
      <Flex 
      m={"auto"}
        w={pxToRem(40)}
        p={"12px"}
        borderRadius={"50%"}
        bg={colorMode === "light" ? Color.ColorPrimary.primary : ""}
      >
        {logo}
      </Flex>
      <Flex gap={pxToRem(12)} direction={"column"} {...Typography.b5_regular}>
        <Flex justify={"space-between"}>
          <Box>{title_1}</Box>
          <Box opacity={"0.6"}>{description_1}</Box>
        </Flex>
        <Flex justify={"space-between"}>
          <Box>{title_2}</Box>
          <Box opacity={"0.6"}>{description_2}</Box>
        </Flex>
        <Flex justify={"space-between"}>
          <Box>{title_3}</Box>
          <Box opacity={"0.6"}>{description_3}</Box>
        </Flex>
      </Flex>
    </Flex>
  );
};
export default ContactMeBox;
