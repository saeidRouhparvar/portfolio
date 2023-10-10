import { Box, Flex, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import SectionHeader from "../../components/SectionHeader";
import BlogCard from "../../components/blog/BlogCard";
import Blog_1 from "../../assets/img/blog_1.svg";
import Blog_2 from "../../assets/img/blog_2.svg";
import Blog_3 from "../../assets/img/blog_3.svg";
import { pxToRem } from "../../components/Utils";
import Button from "../../components/button/Button";
import Typography from "../../components/Typography";
import Color from "../../components/Color";

const BlogData = [
  {
    img: Blog_1,
    title: "How to make web tempates",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit...",
  },
  {
    img: Blog_2,
    title: "How to make web tempates",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit...",
  },
  {
    img: Blog_3,
    title: "How to make web tempates",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit...",
  },
  {
    img: Blog_1,
    title: "How to make web tempates",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit...",
  },
  {
    img: Blog_2,
    title: "How to make web tempates",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit...",
  },
  {
    img: Blog_3,
    title: "How to make web tempates",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit...",
  },
];

const Blog = () => {
  return (
    <Flex direction={"column"}>
      <SectionHeader
        title={"Blog"}
        text_1={
          "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia"
        }
        text_2={" consequat duis enim velit. Lorem ipsum"}
        text_3={""}
      />
      <SimpleGrid
        m={"auto"}
        columns={{ base: 1, md: 2, xl: 3 }}
        gap={pxToRem(24)}
      >
        {BlogData.map((item: any) => (
          <BlogCard
            description={item.description}
            img={item.img}
            title={item.title}
          />
        ))}
      </SimpleGrid>
      <Flex justify={"center"} mb={pxToRem(128)}>
        <Button w={pxToRem(187)} children={"Explore More"} />
      </Flex>
        <Box mb={pxToRem(128)} p={"8px 12px"} bg={Color.ColorPrimary.primary}  {...Typography.b3_regular}>
          • Lorem ipsum dolor sit amet • consectetur adipiscing elit • sed do
          eiusmod tempor incididunt ut • labore et dolore magna aliqua • Ut enim
        </Box>

        <Flex direction={"column"} justify={"center"} align={"center"} gap={pxToRem(64)}>
          <Flex direction={"column"} align={"center"} gap={pxToRem(32)}>
            <Box {...Typography.H1}>Let’s Work Together</Box>
            <Button w={pxToRem(179)} children={"Get Started"}/>
          </Flex>
          <Box h={"1px"} bg={Color.ColorPrimary.primary_content}/>
          <Flex justify={"space-between"}>
            <Flex direction={"column"} gap={pxToRem(12)}>
              
            </Flex>
            <Flex direction={"column"} gap={pxToRem(12)}>d</Flex>
            <Flex direction={"column"} gap={pxToRem(12)}>d</Flex>
            <Flex direction={"column"} gap={pxToRem(12)}>d</Flex>
          </Flex>
        </Flex>
    </Flex>
  );
};
export default Blog;
