import { Box, Flex, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import SectionHeader from "../SectionHeader";
import { pxToRem } from "../Utils";
import TestimonialsBox from "./TestimonialsBox";

const TestimonialsData = [
  {
    title: "Edward Leonard",
    subTitle: "Software Engineer",
    description:
      "The customer service team was incredibly helpful and went above and beyond to ensure that I had a positive experience with this company.",
  },
  {
    title: "Edward Leonard",
    subTitle: "Software Engineer",
    description:
      "The customer service team was incredibly helpful and went above and beyond to ensure that I had a positive experience with this company.",
  },
  {
    title: "Edward Leonard",
    subTitle: "Software Engineer",
    description:
      "The customer service team was incredibly helpful and went above and beyond to ensure that I had a positive experience with this company.",
  },
  {
    title: "Edward Leonard",
    subTitle: "Software Engineer",
    description:
      "The customer service team was incredibly helpful and went above and beyond to ensure that I had a positive experience with this company.",
  },
  {
    title: "Edward Leonard",
    subTitle: "Software Engineer",
    description:
      "The customer service team was incredibly helpful and went above and beyond to ensure that I had a positive experience with this company.",
  },
  {
    title: "Edward Leonard",
    subTitle: "Software Engineer",
    description:
      "The customer service team was incredibly helpful and went above and beyond to ensure that I had a positive experience with this company.",
  },

];

const Testimonials = () => {
  return (
    <Flex direction={"column"}>
      <SectionHeader
        title={"Testimonials"}
        text_1={"Amet minim mollit non deserunt ullamco est sit aliqua"}
        text_2={"dolor do amet sint. Velit officia consequat duis enim velit"}
        text_3={"mollit. lorem ipsum"}
      />
      <SimpleGrid m={"auto"}
        columns={{ base: 1,md:2,lg:3}}
        gap={pxToRem(24)} justifyContent={"space-between"}>
        {TestimonialsData.map((item) => (
          <TestimonialsBox
            title={item.title}
            subTitle={item.subTitle}
            description={item.description}
          />
        ))}
      </SimpleGrid>
    </Flex>
  );
};
export default Testimonials;
