import { Box, Flex, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import SectionHeader from "../../components/SectionHeader";
import BlogCard from "../../components/blog/BlogCard";
import Blog_1 from "../../assets/img/blog_1.svg";
import Blog_2 from "../../assets/img/blog_2.svg";
import Blog_3 from "../../assets/img/blog_3.svg";
import { pxToRem } from "../../components/Utils";

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
    </Flex>
  );
};
export default Blog;
