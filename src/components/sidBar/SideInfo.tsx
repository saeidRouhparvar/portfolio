import React from "react";
import { Box, Flex, useColorMode } from "@chakra-ui/react";
import Color from "../Color";
import Typography from "../Typography";
import { pxToRem } from "../Utils";

const Info = [
  {title: "Email:", description: "saeid.rouhparvar@gmail.com" },
  {title: "Phone:", description: "+989141245860" },
  {title: "Residence:", description: "Iran,Tabriz" },
  {title: "Age:", description: "35" },
  {title: "Freelance:", description: "Available" },
  {title: "Language:", description: "English, Germany" },
];

const SideInfo = () => {
  const { colorMode } = useColorMode();

  return (
    <Flex
      color={colorMode === "light" ? Color.ColorBase.base_content : ""}
      {...Typography.b5_regular}
      direction={"column"}
      gap={pxToRem(12)}
    >
      {Info.map((item: any) => (
        <Flex justify={"space-between"}>
          <Box>{item.title}</Box>
          <Box opacity={".6"}>{item.description}</Box>
        </Flex>
      ))}
    </Flex>
  );
};
export default SideInfo;
