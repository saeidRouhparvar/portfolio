import { Box, Flex, useColorMode } from "@chakra-ui/react";
import React from "react";
import SectionHeader from "../SectionHeader";
import { pxToRem } from "../Utils";
import LeaveMessage from "./LeaveMessage";
import ContactMe from "./ContactMe";

const GetInTouch = () => {
  const { colorMode } = useColorMode();

  return (
    <Flex direction={"column"} mt={pxToRem(112)}>
      <SectionHeader
        title={"Get In Touch"}
        text_1={"Amet minim mollit non deserunt ullamco est sit aliqua"}
        text_2={"dolor do amet sint. Velit officia consequat duis enim velit"}
        text_3={"mollit. lorem ipsum"}
      />
      <Flex gap={pxToRem(24)} direction={{base:"column",md:"row"}}>
        <Box flex={{lg:2,md:1}}>
          <LeaveMessage />
        </Box>
        <Box flex={1}>
          <ContactMe />
        </Box>
      </Flex>
    </Flex>
  );
};
export default GetInTouch;
