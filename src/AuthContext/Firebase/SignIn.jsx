import { useContext, useState } from 'react'
import {  signInWithEmailAndPassword,setPersistence,browserLocalPersistence,signInWithPopup } from "firebase/auth";
import { auth,googleAuthProvider } from './Config';
import { FormControl,FormLabel,Input,Box, Flex,Text, Center,Button} from '@chakra-ui/react'
import { AuthContext } from '../AuthContextMain';
import { Navigate } from 'react-router-dom';
import {FaGoogle} from 'react-icons/fa'

const Signin = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [isEmailFocused,setisEmailFocused] = useState(false)
    const [isPasswordFocused,setisPasswordFocused] = useState(false)

    const{setCurrentUser,CurrentUser} = useContext(AuthContext)

    async function SignInEmail(e){
        e.preventDefault();
        await setPersistence(auth, browserLocalPersistence);
        try {
            const userCredent = await signInWithEmailAndPassword(auth,email,password)
            const user = userCredent.user
            console.log("User Signed in",user);
        } catch (error) {
            console.log("Sign-In error",error);
        }
        }
        
        if(CurrentUser!== null){
            return <Navigate to='/home'/>
        }
        
        const signInWithGoogle = async () => {
            try {
              const result = await signInWithPopup(auth, googleAuthProvider);
              const user = result.user;
              setCurrentUser(user);
            } catch (error) {
              console.error(error.message);
            }
          };
        return(
            <Flex h='100vh'  justifyContent='center' alignItems='center'>
                <FormControl w='33%' bg='#171923' boxShadow='large' p={4}>
                <Box mb={16} bg='#1A202C' mt={8}>
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
                 <Input mt={10} type="submit" value="SignIn" bg='red.500' 
                 border='none' rounded='none' color='white' w='40%' onClick={SignInEmail}/>
                 </Center>
                  <Text textAlign='center' color='white' fontSize={36}>Or</Text>
                  <Center>
                 <Button onClick={signInWithGoogle} fontWeight='bold' m='auto'>Sign In with&nbsp;<FaGoogle color='black'/></Button>
                 </Center>
                 </Box>
                 </FormControl>
                 
        </Flex>
        )
}

export default Signin