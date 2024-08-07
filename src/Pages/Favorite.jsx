import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { AuthContext } from '../AuthContext/AuthContextMain'
import { Box, Button, Center, Divider, Flex, Heading, List, ListIcon, ListItem, Spacer, Text } from '@chakra-ui/react'
import {FaCircleNotch, FaFilm, FaSadTear, FaTrash} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Favorite = () => {
  const {CurrentUser} = useContext(AuthContext)
  const [favorite, setFavorite] = useState([])
 const listItems = async()=>{
  try {
    const resp = await axios.get(`https://movix-proxyserver.onrender.com/favorite`,{
      params:{
        user: CurrentUser.email
      }
    })
    const finalresp = await resp.data
    setFavorite(finalresp)
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
        url:`https://movix-proxyserver.onrender.com/favorite/delete/${id}`
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
        <Heading color='white' fontSize={36} >{favorite.length>0 ?'Favorite':null}</Heading></Center>
      <Flex py={4} fontSize={28} w={{base:'100%',sm:'85%',md:'75%',lg:'50%'}} m='auto' overflowY={'scroll'}>
      <List spacing={3} w='100%' bg='#1E1E1E' rounded='md' px={4}>
    {favorite.length>0 ? 
    favorite.map((item)=>{
      return(<>
    <ListItem my={8} color='lightCyan' _hover={{color:'red.200'}} cursor='pointer'>
      <Flex alignItems='center'  >
    <ListIcon as={FaFilm}  />   
      <Link to={item.mediaType === 'movie' ? `/detailsMov/${item.content_id}`: `/detailsTV/${item.content_id}`}>
   <Text >{item.title}</Text> 
  </Link>
    <Spacer />
    <ListIcon as={FaTrash} onClick={()=>handleDelete(item._id)} _hover={{color:'red.500'}}/>
    
    </Flex>
  </ListItem>
       </>)
    })
    :(    <Center w='100%' p={4}>        <Box textAlign="center" color="Silver">
      <Flex justifyContent='center' color='red.400' gap={2}><Text fontWeight='semibold' fontSize='x-large' mb={4}>Your Favorite list is empty</Text>
      <Box pt={1.5}>< FaSadTear /></Box>
      </Flex>
      <Text mb={4}>Start adding your favorite movies and TV shows to your Favorite!</Text>
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

export default Favorite