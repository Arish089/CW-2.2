import React from 'react'
import { signInAnonymously } from 'firebase/auth'
import { auth } from '../AuthContext/Firebase/Config'
import { Box, Flex,Link,Spacer,Text } from '@chakra-ui/react'
import bgImage1 from '../Images/project2bg.jpeg'
import "../App.css"
import { useContext } from 'react'
import { AuthContext } from '../AuthContext/AuthContextMain'
import { useNavigate } from 'react-router-dom'
const IntroPage = () => {
  //const {signInAnonymous} = useContext(AuthContext)
  const navigate = useNavigate();
  const signInAnonymous = async () => {
    try {
      const result = await signInAnonymously(auth);
      const user = result.user;
      console.log("Anonymous user signed in:", user);
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
        
        <Flex w='50%' minH={200} justifyContent='space-between' direction={{base:'column',md:'row'}} fontWeight='semibold' fontSize='x-large'>
        <Box boxShadow='Dark lg' bgGradient='linear(to-b, #FF2400, black)' w={{base:'auto',md:'40%'}} color='white' display='flex' h={{base:100,md:'inherit'}}
        alignItems='center' rounded='lg' justifyContent='center' _hover={{bgColor:'#2D3748',bgGradient: 'linear(to-b ,black, #FF2400)'}} cursor='pointer'
         >
            <Link onClick={signInAnonymous}_hover={{textDecoration:'none', color:'gray.700'}} >Explore as Guest</Link>
            </Box>
        <Spacer />
        <Box boxShadow='Dark lg' bgGradient='linear(to-b, #FF2400, black)' w={{base:'auto',md:'40%'}} cursor='pointer' justifyContent='center' color='white' rounded='lg'
          _hover={{bgColor:'#2D3748',bgGradient: 'linear(to-b ,black, #FF2400)'}} h={{base:100,md:'inherit'}} display='flex' alignItems='center'>
            <Link href='/login'_hover={{textDecoration:'none', color:'gray.700'}} > Login</Link>
            /
        <Link href='/signup'_hover={{textDecoration:'none', color:'gray.700'}} >Signup</Link>
        </Box>
        </Flex>
    </Box>
    </Box>
  )
}

export default IntroPage