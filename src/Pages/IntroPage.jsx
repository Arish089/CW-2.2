import React from 'react'
import { signInAnonymously } from 'firebase/auth'
import { auth } from '../AuthContext/Firebase/Config'
import { Box, Flex,Spacer,Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import bgImage1 from '../Images/project2bg.jpeg'
import "../App.css"
import { useNavigate } from 'react-router-dom'
const IntroPage = () => {
  //const {signInAnonymous} = useContext(AuthContext)
  const navigate = useNavigate();
  const signInAnonymous = async () => {
    try {
      const result = await signInAnonymously(auth);
      const user = result.user;
      navigate('/home') // Log the current user object
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
  <Box bgImage={bgImage1} bgPosition='top' bgSize={{base:'400%',md:'150%',lg:'100%'}} bgRepeat='no-repeat' >
    <Text color='#FF2400' fontSize='63' fontWeight='semibold' fontFamily='sans-serif'>MOVIX_</Text>
    <Box display='flex' minH='87vh' justifyContent='center' alignItems='center'
     >
        
        <Flex w='50%' minH={200} justifyContent='space-between' direction={{base:'column',md:'row'}} fontWeight='semibold' fontSize={{base:'large',md:'larger',lg:'x-large'}} h={{base:200,md:'auto'}}>
        <Box className='anonym' boxShadow='Dark lg' bgGradient='linear(to-b, #FF2400, black)' w={{base:'auto',md:'40%'}} color='white' display='flex' h={{base:'80px',md:'inherit'}}
        alignItems='center' rounded='lg' justifyContent='center' textAlign='center' _hover={{bgColor:'#2D3748',bgGradient: 'linear(to-b ,black, #FF2400)'}} cursor='pointer'
         >
            <Link onClick={signInAnonymous} >Explore as Guest</Link>
            </Box>
        <Spacer />
        <Box className='SignLog' boxShadow='Dark lg' bgGradient='linear(to-b, #FF2400, black)' w={{base:'auto',md:'40%'}} cursor='pointer' justifyContent='center' color='white' rounded='lg'
          _hover={{bgColor:'#2D3748',bgGradient: 'linear(to-b ,black, #FF2400)'}} h={{base:'80px',md:'inherit'}} display='flex' alignItems='center'>
            <Link to='/login' > Login</Link>
            /
        <Link to='/signup' >Signup</Link>
        </Box>
        </Flex>
    </Box>
    </Box>
  )
}

export default IntroPage