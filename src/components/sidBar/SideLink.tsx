import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import { pxToRem } from "../Utils";
import {
  FaceBook,
  GitHub,
  Instagram,
  LinkedIn,
  Twitter,
  Youtube,
} from "../Svg";

const SocialMedia = [
  { id: 1, Icon: FaceBook },
  { id: 1, Icon: Instagram },
  { id: 1, Icon: Twitter },
  { id: 1, Icon: LinkedIn },
  { id: 1, Icon: Youtube },
  { id: 1, Icon: GitHub },
];

const SideLink = () => {
  return (
    <Flex gap={pxToRem(24)} p={pxToRem(12)}>
      {SocialMedia.map((item: any) => (
        <Box key={item.id} cursor={"pointer"}>{item.Icon}</Box>
      ))}
    </Flex>
  );
};
export default SideLink;
