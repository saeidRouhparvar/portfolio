import { Box, Flex, useColorMode } from "@chakra-ui/react";
import Color from "./Color";
import TypographyWeb from "./Typography";


const SectionDescription = ({title,description_1,description_2}) => {
  const { colorMode } = useColorMode();

  return (
    <Flex mb={"96px"} justify={"space-around"}>
  <Box
    {...TypographyWeb.Heading_1_medium}
    color={
      colorMode === "light"
        ? Color.TextColor.Primary_Light 
        : Color.TextColor.Primary_Dark
    }
  >
    {title}
    
  </Box>
  <Flex direction={"column"}>
    <Box
      {...TypographyWeb.SubHeading_regular}
      color={
        colorMode === "dark"
          ? Color.TextColor.Secondary_Dark
          : Color.TextColor.Secondary_Light
      }
    >
      {description_1}
    </Box>
    <Box
      {...TypographyWeb.SubHeading_regular}
      color={
        colorMode === "dark"
          ? Color.TextColor.Secondary_Dark
          : Color.TextColor.Secondary_Light
      }
    >
      {description_2}
    </Box>
  </Flex>
</Flex>
  )
    }

export default SectionDescription
