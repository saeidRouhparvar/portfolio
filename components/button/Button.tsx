import { Box, BoxProps, Button as ChakraButton, Flex } from "@chakra-ui/react";
import { pxToRem } from "../Utils";
import Color from "../Color";
import Typography from "../Typography";
import { CloudDownload, RightArrow } from "../Svg";

interface Interface extends BoxProps {
  reset?: any;
  children?: any;
}

const Button = ({ children, ...reset }: Interface) => {
  return( 
    <Flex {...reset}
          px={pxToRem(6)}
          bg={Color.ColorPrimary.primary }
          align={"center"}
          justify={"space-between"}
          mt={pxToRem(32)}
          borderRadius={"56px"}
          cursor={"pointer"}
          ps={pxToRem(24)}
        >
          <Box color={Color.ColorBase.base_content}  {...Typography.b3_medium}>
            {children}
          </Box>
          <Box
            my={pxToRem(6)}
            borderRadius={"50%"}
            p={2}
            bg={Color.ColorPrimary.primary_content}
          >
            {CloudDownload}
          </Box>
        </Flex>
  )
};

export default Button;
