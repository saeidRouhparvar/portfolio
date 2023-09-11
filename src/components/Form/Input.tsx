import React from "react";
import {
  Box,
  BoxProps,
  Input as ChakraInput,
  FormControl,
  FormLabel,
  Textarea,
  useColorMode,
} from "@chakra-ui/react";
import Color from "../Color";
import Typography from "../Typography";

interface Interface extends BoxProps {
  reset?: any;
  title?: string;
  type?: string;
  // rows?:number
}

export const Input = ({ title, type, ...reset }: Interface) => {
  const { colorMode } = useColorMode();
  return (
    <Box {...reset} 
    color={colorMode === "light" ? Color.ColorBase.base_content : ""} opacity={"0.8"}
    >
      <FormControl>
        <FormLabel {...Typography.b5_regular} opacity={"0.8"}>{title}</FormLabel>
        {type === "textArea" ? (
          <Textarea
            rows={10}
            bg={colorMode === "light" ? Color.ColorBase.base_200 : ""}
            border={0}
            _focusVisible={"none"}
          />
        ) : (
          <ChakraInput
            bg={colorMode === "light" ? Color.ColorBase.base_200 : ""}
            border={0}
            _focusVisible={"none"}
          />
        )}
      </FormControl>
    </Box>
  );
};
export default Input;
