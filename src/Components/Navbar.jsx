import { Link, useNavigate,Navigate } from 'react-router-dom'
import { Box, Text, HStack, Spacer,IconButton,Drawer,DrawerBody,DrawerContent,DrawerOverlay,DrawerCloseButton,Button,DrawerHeader, Divider,
  FormControl,Input, InputGroup, InputRightAddon, border, VStack, InputRightElement } from '@chakra-ui/react'
import {HamburgerIcon} from '@chakra-ui/icons'
import {FaUserCircle} from 'react-icons/fa'
import React, { useState,useEffect } from 'react'
import { FaSearch } from 'react-icons/fa'
import axios from 'axios'
import '../App.css'




const Navbar = () => {
    const [searchquery,setSearchQuery] = useState('');
    const [searchItem,setSearchItem] = useState([])
   const [isOpen,setisOpen] = useState(false)
   const navigate = useNavigate()

   const handleToggle = () =>{
    setisOpen(!isOpen)
   }
   const handleCloseDrawer=()=>{
    setisOpen(false)
   }

   

    const handleSearch = async () =>{
        try {
            const resp = await axios({
                method:'get',
                baseURL: 'https://api.themoviedb.org/3',
                url: '/search/multi',
                params:{
                q: searchquery
                },
                headers:{
                    'accept': 'application/json',
                    'Authorization':
                    'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OWVlY2FjNTNkMWY2NWZlYzJlZmM5MTRhMThmMjYxMiIsInN1YiI6IjY1OWFmODA5MGQxMWYyMDIwMmViMjIyMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VvH2aM_CCdil6AAuu-KU_0CEReTlj7W8y7Mm7G2EaYQ' 
                  }
            })
            setSearchItem(resp.data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
      navigate(`/search/${searchquery}`)
    },[searchquery])
  return (<>
  <Box display={{base:'none',lg:'block'}} mt={{lg:'94px'}}>
    <HStack  bg='#1E1E1E' the fontWeight='semibold' fontSize={28} className='nav' gap={6} pr={20} position='fixed' zIndex={10} w={'100%'} top={0}  >
        <Box ><Link to='/home'>
            <Text color='#FF2400' fontSize='63' fontWeight='semibold' fontFamily='sans-serif'>MOVIX_</Text>  
            </Link>
            </Box>
        <Box _hover={{color:'red.400'}} >
          <Link to='/movies'>Movies</Link></Box>
        <Box _hover={{color:'red.400'}} >
          <Link to='/series'>Series</Link></Box>
        <Box _hover={{color:'red.400'}} >
          <Link to='/anime'>Anime</Link></Box>
        <Box _hover={{color:'red.400'}} >
          <Link to='/trending'>Trending</Link></Box>
          <Spacer/>
          <Box>
            <Link><FormControl>
        <InputGroup>
    <Input type='search' bg='#1E1E1E' color='white' placeholder='Search Movies, Series, Anime and more...' value={searchquery} onChange={(e)=> {setSearchQuery(e.target.value)
    navigate(`/search/${searchquery}`)
    }}/>
    {
      <InputRightElement onClick={handleSearch}  bg='siver'><FaSearch /></InputRightElement>
}</InputGroup>
  </FormControl>
  </Link>
            
          </Box>
          <Box>
            <Link ><FaUserCircle size='36'/></Link>
          </Box>
    </HStack>
    </Box>

    <Box display={{base:'block',lg:'none'}} bg={'#1E1E1E'}>
        <IconButton bg={'#1E1E1E'} icon={<HamburgerIcon color='silver' position='fixed' zIndex={10} _hover={{color:'black'}}/>} onClick={handleToggle} />
      </Box>
      <Drawer isOpen={isOpen} onClose={handleToggle} placement="left" bg='#1E1E1E'>
        <DrawerOverlay />
        <DrawerContent bg='#1E1E1E' color='rgb(216, 213, 213)' >
          <DrawerCloseButton />
          <DrawerHeader><Link to='/home'>
            <Text color='#FF2400' fontSize='63' fontWeight='semibold' fontFamily='sans-serif' onClick={handleCloseDrawer}>MOVIX_</Text>  
            </Link></DrawerHeader>
          <DrawerBody >
            {/* Your menu items here */}
            <VStack>
        <Box _hover={{color:'red.400'}} h={12} fontSize={20} onClick={handleCloseDrawer}>
          <Link to='/movies'>Movies</Link></Box>
          
          <Spacer />
        <Box _hover={{color:'red.400'}} h={12} fontSize={20} onClick={handleCloseDrawer}>
          <Link to='/series'>Series</Link></Box>
          
          <Spacer />
        <Box _hover={{color:'red.400'}} h={12} fontSize={20} onClick={handleCloseDrawer}>
          <Link to='/anime'>Anime/Animation</Link></Box>
          
          <Spacer />
        <Box _hover={{color:'red.400'}} h={12} fontSize={20} onClick={handleCloseDrawer}>
          <Link to='/trending'>Trending</Link></Box>
          
          
            
          <Box _hover={{color:'red.400'}} h={12} fontSize={20} onClick={handleCloseDrawer}>
            <Link>Profile</Link>
          </Box>
          <Box w={'80%'} h={16}  fontSize={20} >
          <Link><FormControl>
        <InputGroup>
    <Input type='search' color='white' placeholder='Search Movies, Series, Anime and more...' value={searchquery} onChange={(e)=> {setSearchQuery(e.target.value)
    navigate(`/search/${searchquery}`)
    }}/>
    <InputRightAddon onClick={handleSearch}  bg='black'><FaSearch /></InputRightAddon>
    </InputGroup>
  </FormControl>
  </Link>
            </Box>
          </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    
      </>)
}

export default Navbar