import React from 'react'
import {signOut} from 'firebase/auth'
import { auth } from '../AuthContext/Firebase/Config';
import {Box} from '@chakra-ui/react'
import { Link } from 'react-router-dom';

const Logout = () => {
   
    async function logout (){

        try {
            await signOut(auth);
            console.log('User signed out');
        } catch (error) {
            console.log('Sign out error',error);
        }
       }
        
        return( 
        <Link to='/'>
        <Box onClick={logout}>Logout</Box>
        </Link> 
        )
    }

export default Logout