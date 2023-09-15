import { Flex, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import SectionHeader from "../SectionHeader";
import BlogCard from "./BlogCard";
import Blog_1 from "../../assets/img/blog_1.svg";
import Blog_2 from "../../assets/img/blog_2.svg";
import Blog_3 from "../../assets/img/blog_3.svg";
import { pxToRem } from "../Utils";

const BlogData = [
  {
    img: Blog_1,
    title: "How to make web tempates",
    description:
      "Lorem ipsum dolor sit amet diam ac consectetur adipiscing elit...",
  },
  {
    img: Blog_2,
    title: "How to make web tempates",
    description:
      "Lorem ipsum dolor sit amet diam ac consectetur adipiscing elit...",
  },

];

const Blog = () => {
  return (
    <Flex direction={"column"}>
      <SectionHeader
        title={"Latest Blog"}
        text_1={"Amet minim mollit non deserunt ullamco est sit aliqua"}
        text_2={"dolor do amet sint. Velit officia consequat duis enim velit"}
        text_3={"mollit. lorem ipsum"}
      />
      <SimpleGrid m={"auto"}
        columns={{ base: 1,md:2}}
        gap={pxToRem(24)} justifyContent={"space-between"}
      >
        {BlogData.map((item) => (
          <BlogCard
            title={item.title}
            img={item.img}
            description={item.description}
          />
        ))}
      </SimpleGrid>
    </Flex>
  );
};
export default Blog;
