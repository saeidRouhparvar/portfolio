import { Box, Flex, useColorMode } from "@chakra-ui/react";
import Color from "../Color";
import { pxToRem } from "../Utils";
import Typography from "../Typography";
import { RightArrow } from "../Svg";
import main from "../../assets/img/main.png";

const Introduction = () => {
  const { colorMode } = useColorMode();
  return (
    <Flex
      borderRadius={"12px"}
      bg={colorMode === "light" ? Color.ColorBase.base_100 : Color.ColorBase.base_content}
      justify={"space-between"}
      w={{
        base: pxToRem(360),
        sm: pxToRem(476),
        md: pxToRem(640),
        lg: pxToRem(1020),
      }}
    >
      <Box p={{ lg: pxToRem(64), base: pxToRem(32) }} {...Typography.H1}>
        <Flex gap={3}>
          <Box
            color={
              colorMode === "light"
                ? Color.ColorBase.base_content
                : Color.ColorBase.base_100
            }
          >
            I’m
          </Box>
          <Box color={Color.ColorPrimary.primary}>
            Saeid Rouhparvar,
          </Box>
        </Flex>
        <Box>Front End Developer</Box>
        <Box> based in Iran.</Box>
        <Box
          {...Typography.b3_regular}
          opacity={"0.6"}
          mt={pxToRem(24)}
          textAlign={"justifycenter"}
        >
          I have a background in information technology, with a focus on
          frontend development. I am the type of person who seizes every
          opportunity to learn something new. That is why I enjoy challenges.
          From there, I’m under pressure to learn quickly and gain a lot of new
          experience.
        </Box>

        <Flex
          w={pxToRem(165)}
          px={pxToRem(6)}
          bg={Color.ColorPrimary.primary }
          align={"center"}
          justify={"space-between"}
          mt={pxToRem(32)}
          borderRadius={"56px"}
          cursor={"pointer"}
        >
          <Box color={Color.ColorBase.base_content} ps={pxToRem(24)} {...Typography.b3_medium}>
            Let’s Talk
          </Box>
          <Box
            my={pxToRem(6)}
            borderRadius={"50%"}
            p={2}
            bg={Color.ColorPrimary.primary_content}
          >
            {RightArrow}
          </Box>
        </Flex>
      </Box>

      <Box
        w={{ lg: pxToRem(350), md: pxToRem(260) }}
        h={{ lg: pxToRem(490), md: pxToRem(368) }}
        as="img"
        src={main}
        display={{ base: "none", md: "block" }}
      />
    </Flex>
  );
};

export default Introduction;
