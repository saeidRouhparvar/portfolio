import { Box, Flex, useColorMode } from "@chakra-ui/react";
import TypographyWeb from "../Typography/";
import Color from "../Color";

const ExperiencesBox = () => {
  const { colorMode } = useColorMode();
  return (
    <Flex>
      <Box {...TypographyWeb.Special} color={
            colorMode === "light"
              ? Color.TextColor.Primary_Light
              : Color.TextColor.Primary_Dark
          }>e</Box>
      <Box {...TypographyWeb.Heading_3_bold}   color={
            colorMode === "light"
              ? Color.TextColor.Primary_Light
              : Color.TextColor.Primary_Dark
          }>we</Box>
      <Flex>
        <Box {...TypographyWeb.Caption_regular}   color={
            colorMode === "light"
              ? Color.TextColor.Secondary_Light
              : Color.TextColor.Primary_Dark
          }></Box>
        <Box
          {...TypographyWeb.Caption_underLine}
          color={
            colorMode === "light"
              ? Color.TextColor.LinkInfo_Light
              : Color.TextColor.LinkInfo_Dark
          }
        >
          Read article
        </Box>
      </Flex>
    </Flex>
  );
};

export default ExperiencesBox;
