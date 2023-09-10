import { Box, Flex,Text, useColorMode } from '@chakra-ui/react'
import React from 'react'
import { pxToRem } from './Utils'
import Color from './Color'
import Typography from './Typography'

 const SectionHeader = ({title,text_1,text_2,text_3}) => {
    const {colorMode} = useColorMode()
  return (
    <Flex
    direction={"column"}
    gap={pxToRem(16)}
    align={"center"}
    mb={pxToRem(48)}
  >
    <Box
      color={colorMode === "light" ? Color.ColorBase.base_content : ""}
      {...Typography.h1_bold}
    >
     {title}
    </Box>
    <Box
      opacity={"0.6"}
      color={colorMode === "light" ? Color.ColorBase.base_content : ""}
      {...Typography.b4_regular}
      textAlign={"center"}
    >
        <Text>{text_1}</Text>
        <Text>{text_2}</Text>
        <Text>{text_3}</Text>
    </Box>
  </Flex>
  )
}
export default SectionHeader