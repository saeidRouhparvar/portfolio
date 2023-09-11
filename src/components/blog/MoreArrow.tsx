import { Box, Flex, useColorMode } from '@chakra-ui/react'
import React from 'react'
import Typography from '../Typography'
import Color from '../Color';
import { LittleArrow } from '../Svg';
import { pxToRem } from '../Utils';

export const MoreArrow = () => {
  const { colorMode } = useColorMode();

  return (
    <Flex gap={pxToRem(8)} align={"center"}>
        <Box {...Typography.b5_medium} color={colorMode === "light" ? Color.ColorPrimary.primary :""}>Read More</Box>
        <Box mt={"4px"}>{LittleArrow}</Box>
    </Flex>
  )
}
