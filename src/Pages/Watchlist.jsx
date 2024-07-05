import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { AuthContext } from '../AuthContext/AuthContextMain'
import { Box, Center, Divider, Flex, Heading, List, ListIcon, ListItem, Spacer, Text } from '@chakra-ui/react'
import {FaFilm, FaTrash} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Watchlist = () => {
  const {CurrentUser} = useContext(AuthContext)
  const [watchList, setWatchList] = useState([])
 const listItems = async()=>{
  try {
    const resp = await axios.get(`https://movix-proxyserver.onrender.com/watchlist`,{
      params:{
        user: CurrentUser.email
      }
    })
    const finalresp = await resp.data
    setWatchList(finalresp)
    console.log(finalresp);
  } catch (error) {
    console.log(error);
  }
 }
  
  useEffect(()=>{
    listItems()
  },[])
  return (
    <Box color='white' p={10} bg='black'>
      <Center>
        <Heading color='white' fontSize={36} >Watchlist</Heading></Center>
      <Flex py={4} fontSize={28} w={{base:'100%',sm:'85%',md:'75%',lg:'50%'}} m='auto' overflowY={'scroll'}>
      <List spacing={3} w='100%' bg='#1E1E1E' rounded='md' px={4}>
    {watchList.length>0 ? 
    watchList.map((item)=>{
      return(<>
      <Link to={item.mediaType === 'movie' ? `/detailsMov/${item.content_id}`: `/detailsTV/${item.content_id}`}>
    <ListItem my={8} color='lightCyan' _hover={{color:'red.200'}} cursor='pointer'>
      <Flex alignItems='center'  >
    <ListIcon as={FaFilm}  />   
   <Text >{item.title}</Text> 
    <Spacer />
    <ListIcon as={FaTrash} _hover={{color:'red.500'}}/>
    
    </Flex>
  </ListItem>
  </Link>
       </>)
    })
    :null}
    </List>
    </Flex>
    </Box>
  )
}

export default Watchlist