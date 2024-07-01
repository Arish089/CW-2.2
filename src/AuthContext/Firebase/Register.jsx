import { useContext, useState } from 'react'
import  {createUserWithEmailAndPassword,browserSessionPersistence,setPersistence} from 'firebase/auth';
import { auth} from './Config';
import { FormControl,FormLabel,Input,Box, Flex, Center} from '@chakra-ui/react'
import { AuthContext } from '../AuthContextMain';
import { Navigate } from 'react-router-dom';

const Register = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [isEmailFocused,setisEmailFocused] = useState(false)
    const [isPasswordFocused,setisPasswordFocused] = useState(false)

    const{CurrentUser} = useContext(AuthContext)

    async function SignUpEmail(e){
        e.preventDefault();
        await setPersistence(auth, browserSessionPersistence)
        try {
          const userCredential = await createUserWithEmailAndPassword(auth,email, password);
          const user = userCredential.user;
          
          console.log('User signed up:', user);
          // Optionally, redirect to a different page upon successful signup
        } catch (error) {
          console.log(error);
        }
      }
      if(CurrentUser && CurrentUser.email!== null){
        return <Navigate to='/home'/>
    }
        
        return(
            <Flex h='100vh'  justifyContent='center' alignItems='center' >
            <FormControl w='33%' bg='#171923' boxShadow='large' p={4} rounded='sm' border='2px solid grey'>
            <Center color='#FF2400' fontSize={{base:'21px',sm:'31px',md:'42px',lg:'63px'}} fontWeight='semibold' fontFamily='sans-serif'>MOVIX_</Center>
                <Box mb={16}  mt={8}>
                <FormLabel
          htmlFor="email"
          position="absolute"
          transform={isEmailFocused || email ? "translateY(-20px) scale(0.95)" : "none"}
          color={isEmailFocused || email ? "gray.600" : "gray.400"}
          transition="0.2s"
          left="3"
          zIndex="1"
        >
         Enter Your Email Id
        </FormLabel>
                <Input
                variant='flushed'
                id="email"
                type="email" value={email}
                onFocus={() => setisEmailFocused(true)}
                onBlur={() => setisEmailFocused(false)}
                onChange={(e)=> setEmail(e.target.value)}
                color='white'
                />
                </Box>

                <Box mt={16} >

                <FormLabel
          htmlFor="password"
          position="absolute"
          transform={isPasswordFocused || password ? "translateY(-20px) scale(0.95)" : "none"}
          color={isPasswordFocused || password ? "gray.600" : "gray.400"}
          transition="0.2s"
          left="3"
          zIndex="1"
        >
         Enter Your Password
        </FormLabel>
                <Input
                variant='flushed' id="password" type="password" value={password}
                onFocus={() => setisPasswordFocused(true)}
                onBlur={() => setisPasswordFocused(false)}
                 onChange={(e)=>setPassword(e.target.value)} color='white'/>
                 <Center>
                 <Input mt={10} type="submit" value="SignUp" bg='red.500' 
                 border='none' rounded='none' color='white' w='40%' onClick={SignUpEmail}/>
                 </Center>
                 </Box>
                 </FormControl>
                 
        </Flex>
        )
}

export default Register