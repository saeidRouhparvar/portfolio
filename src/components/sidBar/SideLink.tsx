import React from "react";
import { Box, Flex, Link } from "@chakra-ui/react";
import { pxToRem } from "../Utils";
import {
  FaceBook,
  GitHub,
  GitLab,
  Instagram,
  LinkedIn,
  Twitter,
  Youtube,
} from "../Svg";

const SocialMedia = [
  { id: 1, Icon: LinkedIn, Link:"https://www.linkedin.com/in/saeid-rouhparvar" },
  { id: 1, Icon: GitHub, Link:"https://github.com/saeidRouhparvar" },
  { id: 1, Icon: GitLab, Link:"https://gitlab.com/saeid.rohparvar" },
];

const SideLink = () => {
  return (
    <Flex gap={pxToRem(24)} p={pxToRem(12)} justify={"center"}>
      {SocialMedia.map((item: any) => (
        <Link href={item.Link}  key={item.id} cursor={"pointer"}>{item.Icon}</Link>
      ))}
    </Flex>
  );
};
export default SideLink;
