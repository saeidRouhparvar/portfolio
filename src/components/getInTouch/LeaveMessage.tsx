import { Box, Button, Flex, Textarea, useColorMode } from "@chakra-ui/react";
import React from "react";
import { pxToRem } from "../Utils";
import Color from "../Color";
import Typography from "../Typography";
import Input from "../Form/Input";

const LeaveMessage = () => {
  const { colorMode } = useColorMode();

  return (
    <Flex
      p={pxToRem(40)}
      pb={pxToRem(30)}
      bg={colorMode === "light" ? Color.ColorBase.base_100 : ""}
      borderRadius={"12px"}
      gap={pxToRem(24)}
      direction={"column"}
    >
      <Box {...Typography.b2_bold}>Leave a Message</Box>
      <Flex gap={pxToRem(24)}>
        <Box w={"100%"}>
          <Input title={"Name"} />
        </Box>
        <Box w={"100%"}>
          <Input title={"Email"} />
        </Box>
      </Flex>
      <Box>
        <Input title={"Subject"} />
      </Box>
      <Box>
        <Input type="textArea" title={"Messages"} />
      </Box>
      <Button
        bg={colorMode === "light" ? Color.ColorPrimary.primary : ""}
        w={"153px"}
      >
        Send Message
      </Button>
    </Flex>
  );
};
export default LeaveMessage;
