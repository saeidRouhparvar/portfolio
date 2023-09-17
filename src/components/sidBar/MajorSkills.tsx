import { Box, Flex, useColorMode } from "@chakra-ui/react";
import React from "react";
import Color from "../Color";
import Typography from "../Typography";
import { pxToRem } from "../Utils";
import Sliders from "./Slider";

const SkillsData = [
  { title: "Html", percent: "80" },
  { title: "CSS", percent: "60" },
  { title: "Java Script", percent: "50" },
  { title: "Type Script", percent: "90" },
  { title: "React JS", percent: "70" },
];

const MajorSkills = () => {
  const { colorMode } = useColorMode();
  return (
    <Flex direction={"column"} gap={pxToRem(20)}>
      <Box
        {...Typography.h6_semiBold}
        color={colorMode === "light" ? Color.ColorBase.base_content : ""}
      >
        Major Skill
      </Box>
      {SkillsData.map((item: any) => (
        <Flex direction={"column"} gap={pxToRem(8)}>
          <Flex justify={"space-between"} {...Typography.b5_medium}>
            <Box >{item.title}</Box>
            <Box opacity={"0.6"}>{item.percent + "%"}</Box>
          </Flex>
          <Sliders value={item.percent} />
        </Flex>
      ))}
    </Flex>
  );
};
export default MajorSkills;
