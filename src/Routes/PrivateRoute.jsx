import React, { useContext } from 'react'
import { AuthContext } from '../AuthContext/AuthContextMain'
import {Flex,Text,Box} from '@chakra-ui/react';
import {Link} from 'react-router-dom'
import '../App.css'

const PrivateRoute = ({children}) => {
    const {CurrentUser} = useContext(AuthContext)

    if (!CurrentUser || CurrentUser.email === null){
        return(      <>
            <Flex direction='column' >
              <Box minH={'60vh'} display='flex' alignItems='center' justifyContent='center'>
              <Text textAlign='center'color='silver' className='content'  fontSize={36} fontWeight='semibold'>
                Please <Link to='/login'>login</Link> or <Link color='red' to='/signup'>signup</Link> to access profile 
              </Text>
              </Box>
            </Flex>
            
            </>)
    }
  return children
}

export default PrivateRoute