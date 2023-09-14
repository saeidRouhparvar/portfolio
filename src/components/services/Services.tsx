import { Box, Flex, SimpleGrid, Text, useColorMode } from "@chakra-ui/react";
import React from "react";
import { pxToRem } from "../Utils";
import Typography from "../Typography";
import Color from "../Color";
import ServiceBox from "./ServiceBox";
import { CellPhone, Design, WebDevelopment } from "../Svg";
import SectionHeader  from "../SectionHeader";

const ServiceBoxData = [
  {
    icon: WebDevelopment,
    title: "Web Development",
    description_1: "Frontend Development",
    description_2: "CMS Development",
  },
  {
    icon: CellPhone,
    title: "App Development",
    description_1: "PWA Development",
    description_2: "TWA Development",
  },
  {
    icon: Design,
    title: "Design System Development",
    description_1: "Create Design System",
    description_2: "Use Design System",
  },
  {
    icon: Design,
    title: "Design System Development",
    description_1: "Create Design System",
    description_2: "Use Design System",
  },
];

const Services = () => {
  const { colorMode } = useColorMode();
  return (
    <Flex direction={"column"}>
      <SectionHeader
        title={" My Services"}
        text_1={"Amet minim mollit non deserunt ullamco est sit aliqua"}
        text_2={"dolor do amet sint. Velit officia consequat duis enim velit"}
        text_3={"mollit. lorem ipsum"}
      />
      <Flex  wrap={"wrap"}  gap={pxToRem(24)}>
        {ServiceBoxData.map((item: any) => (
          <ServiceBox
            title={item.title}
            icon={item.icon}
            description_1={item.description_1}
            description_2={item.description_2}
          />
        ))}
      </Flex>
    </Flex>
  );
};
export default Services;
