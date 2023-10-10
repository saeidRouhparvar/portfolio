import {
  Box,
  Card,
  CardBody,
  Image,
  Flex,
  useColorMode,
  BoxProps,
} from "@chakra-ui/react";
import React from "react";
import { pxToRem } from "../Utils";
import Color from "../Color";
import { MoreArrow } from "./MoreArrow";
import Typography from "../Typography";

interface Interface extends BoxProps {
  reset?:any
  img?:any
  title?:string
  description?:string
}

const BlogCard = ({ img, title, description,...reset }:Interface) => {
  const { colorMode } = useColorMode();
  return (
    <Card {...reset}  maxW={pxToRem(310)} mt={{base:"90px",sm:"0"}} _first={{marginTop:"0"}}>
      <CardBody>
        <Image src={img} />

        <Flex direction={"column"} maxW={pxToRem(324)}>
          <Flex
            bg={colorMode === "light" ? Color.ColorBase.base_100 : ""}
            borderRadius={"12px"}
            p={pxToRem(24)}
            direction={"column"}
            mt={pxToRem(25)}
            color={colorMode === "light" ? Color.ColorBase.base_content : ""}
          >
            <Box {...Typography.h5_semiBold} mb={pxToRem(8)}>
              {title}
            </Box>
            <Box {...Typography.b4_regular} opacity={"0.6"} mb={pxToRem(16)}>
              {description}
            </Box>
            <MoreArrow/>
          </Flex>
        </Flex>
      </CardBody>
    </Card>
  );
};
export default BlogCard;
