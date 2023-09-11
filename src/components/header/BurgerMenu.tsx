import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import { pxToRem } from '../Utils'
import Color from '../Color'

 const BurgerMenu = () => {
  return (
    <Flex w={pxToRem(24)} direction={"column"} gap={"6px"} align={"center"} mt={1}>
        <Box bg={Color.ColorBase.base_content} opacity={"0.6"} h={"1.5px"} w={"12px"}></Box>
        <Box bg={Color.ColorBase.base_content} opacity={"0.6"} h={"1.5px"} w={"18px"}></Box>
        <Box bg={Color.ColorBase.base_content} opacity={"0.6"} h={"1.5px"} w={"12px"}></Box>
    </Flex>
  )
}
export default BurgerMenu