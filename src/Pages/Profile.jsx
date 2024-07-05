import { Box,Flex, Heading } from '@chakra-ui/react'
import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../AuthContext/AuthContextMain'
import { Link, useNavigate } from 'react-router-dom'

const Profile = () => {
  const navigate = useNavigate()
  const {CurrentUser} = useContext(AuthContext)
  useEffect(()=>{
    /**
      if (!CurrentUser || CurrentUser.email === null){
        navigate('/home')
      }
    */
  },[])
  
  return (
    <Flex color='white' bg='black' justifyContent='center' alignItems='center' minH='80vh' >
      <Flex flexWrap='wrap' p={6} justifyContent='space-around' w='80%' maxWidth='800px'>
        <Box bg='#1E1E1E' minH='200px' w='40%' maxWidth='400px' rounded='md' border='0.5px solid lightCyan' _hover={{borderColor:'rgb(246, 107, 107)'}}>
          <Link to='/favorite'>
          <Flex justifyContent='center' h='100%' color='lightCyan' _hover={{color:'red.400'}}  alignItems='center' fontSize={{base:"16px",sm:'24px',md:"32px"}} fontWeight='semibold'>
            My Favorites</Flex></Link>
          </Box>
        <Box bg='#1E1E1E' minH='200px' w='40%' maxWidth='400px' rounded='md' border='0.5px solid lightCyan' _hover={{borderColor:'rgb(246, 107, 107)'}}>
          <Link to='/watchlist'>
          <Flex justifyContent='center' h='100%' color='lightCyan'  _hover={{color:'red.400'}} alignItems='center' fontSize={{base:"16px",sm:'24px',md:"32px"}} fontWeight='semibold'>
            My Watchlist
            </Flex>
          </Link>
          </Box>
      </Flex>
    </Flex>
  )
}

export default Profile