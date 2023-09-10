import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import Introduction from "../header/Introduction";
import RightSide from "../rightSide/RightSide";
import { pxToRem } from "../Utils";
import Services from "../services/Services";
import Education from "../education/Education";

const MainSection = () => {
  return (
    <>
      <Flex gap={pxToRem(32)}>
        <Box flex={11}>
          <Introduction />
          <Services/>
          <Education/>
        </Box>
        <Box flex={1}>
          <RightSide />
        </Box>
      </Flex>
    </>
  );
};
export default MainSection;
