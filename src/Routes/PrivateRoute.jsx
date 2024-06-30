import React, { useContext } from 'react'
import { AuthContext } from '../AuthContext/AuthContextMain'
import {Flex,Text,Box} from '@chakra-ui/react';
import {Link} from 'react-router-dom'

const PrivateRoute = ({children}) => {
    const {CurrentUser} = useContext(AuthContext)

    if (!CurrentUser){
        return(      <>
            <Flex direction='column'>
                <Link to='/'>
              <Text textAlign='center' fontSize={24} fontWeight='semibold'>
                Please login to access profile 
              </Text>
              </Link>
            </Flex>
            
            </>)
    }
  return children
}

export default PrivateRoute