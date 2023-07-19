import { Box, useColorMode } from "@chakra-ui/react";
import Color from "../Color";

const ProjectBox = () => {
  const { colorMode } = useColorMode();
  return (
    <Box
      w={"550px"}
      h={"34.75rem"}
      borderRadius={"24px"}
      bg={
        colorMode === "light"
          ? Color.TextColor.Tertiary_Element_L
          : Color.TextColor.Tertiary_Element_D
      }
    >
      Skills
    </Box>
  );
};

export default ProjectBox;
