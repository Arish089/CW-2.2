import { Box, Flex,Text, HStack, Spacer } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <HStack>
        <Box><Link hrefLang='/home'>
            <Text color='#FF2400' fontSize='63' fontWeight='semibold' fontFamily='sans-serif'>MOVIX_</Text>  
            </Link>
            </Box>
        <Spacer />
        <Box></Box>
        <Spacer />
        <Box></Box>
        <Spacer />
        <Box></Box>
    </HStack>
  )
}

export default Navbar