import { Box, Flex } from "@chakra-ui/react";
import PortreBg from "../../assets/img/PortreBg.svg";
import TypographyWeb from "../Typography";

const Introduction = () => {
  return (
    <Box textAlign={"left"}>
      <Box
        w={"100%"}
        as={"img"}
        src={PortreBg}
        position={"absolute"}
        top={"-100px"}
        right={"-100px"}
      ></Box>
      <Flex
        flexDirection={"column"}
        position={"absolute"}
        top={"220px"}
        left={"50px"}
        gap={"10px"}
      >
        <Flex alignItems={"center"} gap={"10px"}>
          <Box {...TypographyWeb.Heading_1_regular}>Hello, I’m</Box>
          <Box {...TypographyWeb.Heading_1_bold}>
            Saeid Rouhparvar,
          </Box>
        </Flex>
        <Flex alignItems={"center"} gap={"10px"}>
          <Box {...TypographyWeb.Heading_1_bold}> Front End</Box>
          <Box {...TypographyWeb.Heading_1_regular}>Developer based in </Box>
          <Box {...TypographyWeb.Heading_1_bold}>Iran.</Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Introduction;
