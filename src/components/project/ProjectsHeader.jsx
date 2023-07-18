import { Box, Flex, useColorMode } from "@chakra-ui/react";
import Color from "../Color";
import TypographyWeb from "../Typography";


const ProjectsHeader = () => {
  const { colormode } = useColorMode();

  return (
    <Flex my={"96px"} justify={"space-around"}>
  <Box
    {...TypographyWeb.Heading_1_medium}
    color={
      colormode === "dark"
        ? Color.TextColor.Primary_Dark
        : Color.TextColor.Primary_Light
    }
  >
    Projects
  </Box>
  <Flex direction={"column"}>
    <Box
      {...TypographyWeb.SubHeading_regular}
      color={
        colormode === "dark"
          ? Color.TextColor.Secondary_Dark
          : Color.TextColor.Secondary_Light
      }
    >
      I’ve worked with start-ups and small companies, also I’ve
    </Box>
    <Box
      {...TypographyWeb.SubHeading_regular}
      color={
        colormode === "dark"
          ? Color.TextColor.Secondary_Dark
          : Color.TextColor.Secondary_Light
      }
    >
      created some mini app for my personal side projects.
    </Box>
  </Flex>
</Flex>
  )
    }

export default ProjectsHeader
