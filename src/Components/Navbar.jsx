import { Link, useNavigate} from 'react-router-dom'
import { Box, Text, HStack, Spacer,IconButton,Drawer,DrawerBody,DrawerContent,DrawerOverlay,DrawerCloseButton,Button,DrawerHeader, Divider,
  FormControl,Input,Flex, InputGroup, InputRightAddon, VStack, InputRightElement, Center } from '@chakra-ui/react'
import {HamburgerIcon} from '@chakra-ui/icons'
import {FaUserCircle} from 'react-icons/fa'
import { useState,useEffect, useContext } from 'react'
import { FaSearch } from 'react-icons/fa'
import axios from 'axios'
import '../App.css'
import { AuthContext } from '../AuthContext/AuthContextMain'
import { signOut } from 'firebase/auth'
import { auth } from '../AuthContext/Firebase/Config'


const Navbar = () => {

  
    const [searchquery,setSearchQuery] = useState('');
    const [searchItem,setSearchItem] = useState([])
   const [isOpen,setisOpen] = useState(false)
   const navigate = useNavigate()

   const {CurrentUser} = useContext(AuthContext)
    
   const logout = async ()=>{
   try {
    await signOut(auth);
    console.log('User signed out');
    navigate('/home')
    console.log(CurrentUser);
} catch (error) {
    console.log('Sign out error',error);
}
   }

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
                baseURL: 'https://movix-proxyserver.onrender.com/api/search',
                params:{
                q: searchquery
                }
            })
            setSearchItem(resp.data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
    if(searchquery.length > 0){
      navigate(`/search/${searchquery}`)
    }
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
    <Input type='search' bg='#1E1E1E' color='white' placeholder='Search Movies, Series, Anime and more...' value={searchquery} onChange={(e)=> {
      setSearchQuery(e.target.value)
    navigate(`/search/${searchquery}`)
    }}/>
    {
      <InputRightElement onClick={handleSearch}  bg='siver'><FaSearch /></InputRightElement>
}</InputGroup>
  </FormControl>
  </Link>
            
          </Box>
          <Box>
            <Link to='/profile' >{!CurrentUser || CurrentUser.email === null ? <FaUserCircle size='36'/> :
             <Box color= 'red.400' className='dropdown' _hover={{color:'red.600'}}>
              <Box className='dropdown-button'>
              {CurrentUser && CurrentUser.displayName !== null ? CurrentUser.displayName : 'User'}
             </Box>
             <Box className='dropdown-content' fontSize={20} color='silver'>
              <Text>Favorite List</Text>
              <Divider />
              <Text>Watch List</Text>
              <Divider />
              <Text fontSize={16} color='red.400'>{CurrentUser && CurrentUser.email !== null ? CurrentUser.email: null}</Text>
              <Button colorScheme='red' onClick={logout}>Logout</Button>
             </Box>
             </Box>}</Link>
          </Box>
    </HStack>
    </Box>

    <Box display={{base:'block',lg:'none'}} bg={'#1E1E1E'}>
      <Flex justifyContent='start' alignItems='center'>
        <IconButton bg={'#1E1E1E'} icon={<HamburgerIcon color='silver' position='fixed' zIndex={10} _hover={{color:'black'}}/>} onClick={handleToggle} />
        <Center><Text color='#FF2400' fontSize='63' fontWeight='semibold' fontFamily='sans-serif'>MOVIX_</Text></Center>
        
        </Flex></Box>
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
            <Link to='/profile'>{!CurrentUser || CurrentUser.email === null ? 'Profile' : <Text>{CurrentUser && CurrentUser.displayName !== null ? CurrentUser.displayName : CurrentUser.email}</Text>}</Link>
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
            <Box color='#FF2400' _hover={{color:'rgb(216, 213, 213)'}} h={12} fontSize={28} onClick={handleCloseDrawer}>
              <Text  onClick={()=>{CurrentUser && CurrentUser.email !== null ?logout():navigate('/login')}} fontWeight='semibold' cursor='pointer'>{CurrentUser && CurrentUser.email !== null ?'Logout': 'Login'}</Text>
            </Box>
          </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    
      </>)
}

export default Navbar