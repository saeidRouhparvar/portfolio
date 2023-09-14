import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import Introduction from "../header/Introduction";
import RightSide from "../rightSide/RightSide";
import { pxToRem } from "../Utils";
import Services from "../services/Services";
import Education from "../education/Education";
import Experiences from "../experience/Experiences";
import Portfolio from "../portfolio/Portfolio";
import Testimonials from "../testimonials/Testimonials";
import Blog from "../blog/Blog";
import GetInTouch from "../getInTouch/GetInTouch";
import Footer from "../footer/Footer";

const MainSection = () => {
  return (
    <>
      <Flex gap={{base:pxToRem(0),lg:pxToRem(20)}} >
        <Flex direction={"column"} gap={pxToRem(112)} >
          <Introduction />
         {/* <Services/> */}
          <Education/>
          <Experiences/>
          <Portfolio/>
          <Testimonials/>
          <Blog/>
          <GetInTouch/>
          <Footer/> 
        </Flex>
        <Box >
          <RightSide />
        </Box>
      </Flex>
    </>
  );
};
export default MainSection;
