import { Box } from '@chakra-ui/react'
import React from 'react'
import Typography from '../../components/Typography'
import Color from '../../components/Color'

 const MoreData = () => {
  return (
    <Box borderBottom={"1px solid"} pb={2} w={"-webkit-fit-content"} {...Typography.b5_medium} color={Color.ColorPrimary.primary} >View Case Study</Box>
  )
}
export default MoreData