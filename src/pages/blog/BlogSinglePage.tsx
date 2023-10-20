import { Box, Flex, useColorMode } from "@chakra-ui/react";
import Color from "../../components/Color";
import { pxToRem } from "../../components/Utils";
import Typography from "../../components/Typography";
import project_single_1 from "../../assets/img/project_single_1.png";
import { Copy } from "../../components/Svg";

const BlogSinglePage = () => {
  const { colorMode } = useColorMode();
  return (
    <Flex direction={"column"} gap={pxToRem(32)}>
      <Box>
        <Box
          {...Typography.b6_medium}
          p={"4px 12px"}
          borderRadius={"50px"}
          color={Color.ColorPrimary.primary}
          textAlign={"center"}
          w={pxToRem(94)}
          bg={"rgba(247, 143, 66, 0.10)"}
        >
          May9,2021
        </Box>
        <Box {...Typography.h1_semiBold} mt={pxToRem(16)}>
          The Art of Traveling: Tips and Tricks for a <br /> Memorable Journey
        </Box>
      </Box>
      <Box as="img" src={project_single_1} />
      <Box
        {...Typography.b2_regular}
        color={colorMode === "light" ? Color.ColorPrimary.primary_content : ""}
      >
        Finally, don't forget to capture memories of your journey. Whether it's
        through photographs, journaling, or souvenirs, preserving the moments
        and experiences of your travels can bring joy and nostalgia for years to
        come. However, it's also essential to be present in the moment and not
        let technology distract you from the beauty of your surroundings.
      </Box>
      <Box>
        <Box {...Typography.h3_semiBold}>Research Your Destination</Box>
        <Box
          mt={pxToRem(16)}
          {...Typography.b2_regular}
          color={
            colorMode === "light" ? Color.ColorPrimary.primary_content : ""
          }
        >
          Finally, don't forget to capture memories of your journey. Whether
          it's through photographs, journaling, or souvenirs, preserving the
          moments and experiences of your travels can bring joy and nostalgia
          for years to come. However, it's also essential to be present in the
          moment and not let technology distract you from the beauty of your
          surroundings.
        </Box>
      </Box>
      <Box>
        <Box {...Typography.h3_semiBold}>Plan Your Itinerary</Box>
        <Box
          mt={pxToRem(16)}
          {...Typography.b2_regular}
          color={
            colorMode === "light" ? Color.ColorPrimary.primary_content : ""
          }
        >
          Finally, don't forget to capture memories of your journey. Whether
          it's through photographs, journaling, or souvenirs, preserving the
          moments and experiences of your travels can bring joy and nostalgia
          for years to come. However, it's also essential to be present in the
          moment and not let technology distract you from the beauty of your
          surroundings.
        </Box>
      </Box>
      <Flex gap={"4px"} direction={"column"}>
        <Flex
          borderRadius={"8px"}
          p={"12px 16px"}
          bg={colorMode === "light" ? Color.ColorBase.base_100 : ""}
        >
          <Flex justifyContent={"space-around"} align={"center"}>
            <Box>mkdir my-app && cd my-app</Box>
            <Box>{Copy}</Box>
          </Flex>
        </Flex>
        <Flex
          borderRadius={"8px"}
          p={"12px 16px"}
          bg={colorMode === "light" ? Color.ColorBase.base_100 : ""}
        >
          <Flex justifyContent={"space-around"} align={"center"}>
            <Box>npm init -y</Box>
            <Box>{Copy}</Box>
          </Flex>
        </Flex>
        <Flex
          borderRadius={"8px"}
          p={"12px 16px"}
          bg={colorMode === "light" ? Color.ColorBase.base_100 : ""}
        >
          <Flex justifyContent={"space-around"} align={"center"}>
            <Box>npm install cross-env --save-dev</Box>
            <Box>{Copy}</Box>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
export default BlogSinglePage;
