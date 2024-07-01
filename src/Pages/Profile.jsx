import { Box } from '@chakra-ui/react'
import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../AuthContext/AuthContextMain'
import { useNavigate } from 'react-router-dom'

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
    <Box color='white'>Profile</Box>
  )
}

export default Profile