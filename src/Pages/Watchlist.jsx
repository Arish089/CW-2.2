import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { AuthContext } from '../AuthContext/AuthContextMain'
import { Box, Button, Center, Divider, Flex, Heading, List, ListIcon, ListItem, Spacer, Text } from '@chakra-ui/react'
import {FaFilm, FaSadTear, FaTrash} from 'react-icons/fa'
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
  } catch (error) {
    console.log(error);
  }
 }
  
  useEffect(()=>{
    listItems()
  },[])
const handleDelete = async(id)=>{
  try {
    const resp = await axios({
      method:"delete",
      url:`https://movix-proxyserver.onrender.com/watchlist/delete/${id}`
    })
    const finalresp = resp.data
    console.log(finalresp);
    listItems()
  } catch (error) {
    console.log(error);
  }
}

  return (
    <Box color='white' p={10} bg='black' minH='60vh'>
      <Center>
        <Heading color='white' fontSize={36} >{watchList.length>0 ?'Watchlist':null}</Heading></Center>
      <Flex py={4} fontSize={28} w={{base:'100%',sm:'85%',md:'75%',lg:'50%'}} m='auto' overflowY={'scroll'}>
      <List spacing={3} w='100%' bg='#1E1E1E' rounded='md' px={4}>
    {watchList.length>0 ? 
    watchList.map((item)=>{
      return(<Box 
      key={item._id}>
    <ListItem my={8} color='lightCyan' _hover={{color:'red.200'}} cursor='pointer'>
      <Flex alignItems='center'  >
    <ListIcon as={FaFilm}  />   
      <Link to={item.mediaType === 'movie' ? `/detailsMov/${item.content_id}`: `/detailsTV/${item.content_id}`}>
      {item.title}
  </Link>
    <Spacer />
    <ListIcon as={FaTrash} onClick={()=>handleDelete(item._id)} _hover={{color:'red.500'}}/>
    
    </Flex>
  </ListItem>
       </Box>)
    })
    :(    <Center w='100%' p={4}>        <Box textAlign="center" color="Silver">
      <Flex justifyContent='center' color='red.400' gap={2}><Text fontWeight='semibold' fontSize='x-large' mb={4}>Your Watchlist is empty</Text>
      <Box pt={1.5}>< FaSadTear /></Box>
      </Flex>
      <Text mb={4}>Start adding movies and TV shows you want to watch to your watchlist!</Text>
      <Button colorScheme="red" variant="solid" as={Link} to="/home">
        Explore Now
      </Button>
    </Box>
  </Center>)}
    </List>
    </Flex>
    </Box>
  )
}

export default Watchlist