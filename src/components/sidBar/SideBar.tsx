import { Avatar, Flex, Box, useColorMode, Button } from "@chakra-ui/react";
import React from "react";
import Color from "../Color";
import { pxToRem } from "../Utils";

import SideHeader from "./SideHeader";
import SideInfo from "./SideInfo";
import SideLink from "./SideLink";
import MajorSkills from "./MajorSkills";
import { ExtraSkill } from "./ExtraSkill";
import { CloudDownload } from "../Svg";
import Typography from "../Typography";

const SideBar = () => {
  const { colorMode } = useColorMode();
  const UnderLine = () => {
    return (
      <>
        <Box
          border={"1px solid"}
          borderColor={Color.ColorBase.base_content}
          opacity={"0.1"}
        />
      </>
    );
  };
  return (
    <Flex
      pos={"sticky"}
      top={0}
      left={0}
      borderRadius={"12px"}
      bg={colorMode === "light" ? Color.ColorBase.base_100 : ""}
      direction={"column"}
      p={pxToRem(24)}
      gap={pxToRem(24)}
      overflow={"scroll"}
    >
      <SideHeader />
      <SideLink />
      <SideInfo />
      <UnderLine />

      <MajorSkills />
      <UnderLine />

      <ExtraSkill />
      <UnderLine />

      <Button
        h={pxToRem(48)}
        {...Typography.b4_medium}
        rightIcon={CloudDownload}
        bg={colorMode === "light" ? Color.ColorPrimary.primary : ""}
        color={colorMode === "light" ? Color.ColorBase.base_content : ""}
      >
        Download My CV
      </Button>
    </Flex>
  );
};

export default SideBar;
