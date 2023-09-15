import { Box, Flex, useColorMode } from "@chakra-ui/react";
import SectionHeader from "../SectionHeader";
import ResumeBox from "../ResumeBox";
import { pxToRem } from "../Utils";
import Color from "../Color";

const ExperData = [
  {
    title: "University of Tabriz",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.",
    position: "Student",
    date: "27 July 2010",
  },
  {
    title: "Payame Nor",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.",
    position: "Student",
    date: "27-jun-2015",
  },
  {
    title: "Payame Nor",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.",
    position: "Student",
    date: "27-jun-2015",
  },
];

const Experiences = () => {
  const { colorMode } = useColorMode();

  return (
    <Flex direction={"column"}>
      <SectionHeader
        title={"Experience"}
        text_1={"Amet minim mollit non deserunt ullamco est sit aliqua"}
        text_2={"dolor do amet sint. Velit officia consequat duis enim velit"}
        text_3={"mollit. lorem ipsum"}
      />
      <Box
       px={pxToRem(40)}
       bg={colorMode === "light" ? Color.ColorBase.base_100 : ""}
       borderRadius={pxToRem(12)} >

      {ExperData.map((item) => (
        <ResumeBox
        key={item.id}
        title={item.title }
        description={item.description}
        position={item.position}
        date={item.date}
        />
        ))}
        </Box>
    </Flex>
  );
};

export default Experiences;
