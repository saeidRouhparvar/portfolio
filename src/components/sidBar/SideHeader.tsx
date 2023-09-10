import React from 'react'
import { Box,Flex,Avatar, useColorMode, } from '@chakra-ui/react'
import { pxToRem } from '../Utils'
import Typography from '../Typography'
import Color from '../Color'

 const SideHeader = () => {
    const {colorMode} = useColorMode()
  return (
    <Flex direction={"column"} gap={pxToRem(20)} align={"center"}>
    <Avatar mt={pxToRem(8)} w={pxToRem(100)} h={pxToRem(100)} />
    <Flex direction={"column"} gap={pxToRem(8)} align={"center"}>
      <Box
        {...Typography.h4_semiBold}
        color={colorMode === "light" ? Color.ColorBase.base_content : ""}
      >
        Saeid Rouhparvar
      </Box>
      <Box
        {...Typography.h4_semiBold}
        color={colorMode === "light" ? Color.ColorPrimary.primary : ""}
        bg={"rgba(247, 143, 66, 0.10)"}
        p={"4px 12px"}
        borderRadius={"50px"}
      >
        Frontend Developer
      </Box>
    </Flex>
  </Flex>
  )
}
export default SideHeader