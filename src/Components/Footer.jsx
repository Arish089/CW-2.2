import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Box,Accordion,AccordionButton,AccordionItem,AccordionIcon,AccordionPanel,ListItem,Text, UnorderedList, Flex, Divider,AbsoluteCenter } from '@chakra-ui/react'
import { FaInstagram,FaFacebook,FaTwitter,FaYoutube, FaLinkedin, FaEnvelope, FaPhone, FaGithub } from 'react-icons/fa'
import '../App.css'

const Footer = () => {
    const [index,setIndex] = useState([-1])
  return (
  <Box>
    <Box position='relative' bottom={0} padding='10'>
  <Divider />
  <AbsoluteCenter bg='#1E1E1E' color='blue.200' fontWeight={'semibold'} px='4' fontSize={{base:'larger',md:'x-large',lg:'xx-large'}}>
  Dive Deeper
  </AbsoluteCenter>
</Box>
    <Box color={'silver'} display={'flex'} justifyContent={'center'} alignItems={'center'} className='footer' >
        Connect with us at:&ensp;
        <Link><FaFacebook size={28}  /></Link> 
        <Link><FaInstagram size={28} /> </Link>
        <Link><FaTwitter size={28} /></Link>
        <Link><FaYoutube size={28} /> </Link>
         
    </Box>
    <Box >
    <Accordion display={{md:'block'}} index={index} onClick={()=>{setIndex(index == [-1] ? 0: -1)}} py={5} bg='#1E1E1E'>
  <AccordionItem >
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left' color='blue.200' fontSize={24} fontWeight='semibold'>
          About us
        </Box>
        <AccordionIcon color={'blue.200'} />
      </AccordionButton>
    </h2>
    <AccordionPanel py={2} color='silver'>
    Movix_ is a specially designed info app, containing all the necessary information related to Movies, Series, Reality, Anime and more.
    It contains relevant information such as release date, rating, average, count, cast, etc. 
     </AccordionPanel>
  </AccordionItem>
  </Accordion>
  </Box>
  <Box>
    <Flex w={{base:'auto',sm:'55%',md:'45%'}} pl={4} justifyContent={'flex-start'} >
        <Box color='silver' w='30%'>
            <Text fontSize='20' color='blue.200'>
                Links
            </Text>
        <UnorderedList pt={2}>
  <ListItem><Link to='/home'>Home</Link></ListItem>
  <ListItem><Link>Service</Link></ListItem>
  <ListItem><Link>About</Link></ListItem>
  <ListItem><Link>Contact</Link></ListItem>
</UnorderedList>
        </Box>
        <Box color='silver' w='30%' pb={16}>
        <Text fontSize='20' color='blue.200'>
                Updates
            </Text>
        <UnorderedList pt={2}>
  <ListItem>Blog</ListItem>
  <ListItem>News</ListItem>
</UnorderedList>
        </Box>
        <Box color='silver' w='30%'>
        <Text fontSize='20' color='blue.200'>
                Help
            </Text>
        <UnorderedList pt={2}>
  <ListItem>FAQ's</ListItem >
  <ListItem>Customer Support</ListItem>
  <ListItem>Complaint</ListItem>
</UnorderedList>
        </Box>
    </Flex>
  </Box>
  <Flex justify={'center'}>
  <Divider w={'70%'} />
  </Flex>
  <Box color={'silver'}>
    <Text textAlign='center' fontSize={28} color='blue.200' fontWeight='semibold'>Contact</Text>
    <Flex direction={{base:'column',md:'row'}} justifyContent={{base:'flex-start',md:'center'}} alignItems='center'  gap={4} mt={4}>
    
    <Box w='12%' >
        <Link to='mailto:arish.ali089@gmail.com' target='_blank'>
            <Flex direction='column' alignItems='center' justifyContent='space-between' _hover={{ color:'lightblue'}}>
      <FaEnvelope size='20px' />
      <Text>arish.ali089@gmail.com</Text>
      </Flex>
      </Link>
    </Box>

<Box w='12%' ml={{md:8,lg:0}}>
    <Flex direction={'column'} alignItems='center' justifyContent='space-between' _hover={{ color:'lightblue'}} >
        <FaPhone size='20px'/>
        <Text>8340194014</Text>
    </Flex>
    </Box>

    <Box w='12%'>
        <Link to='https://www.linkedin.com/in/arish-ali-7416261b7/' target='_blank'>
            <Flex direction='column' alignItems='center' justifyContent='space-between' _hover={{ color:'lightblue'}}>
      <FaLinkedin size='20px'/>
      <Text>Arish Ali</Text>
      </Flex>
      </Link>
    </Box>

    <Box w='12%'>
        <Link to='https://github.com/' target='_blank'>
            <Flex direction='column' alignItems='center' justifyContent='space-between' _hover={{ color:'lightblue'}}>
      <FaGithub size='20px'/>
      <Text>Arish089</Text>
      </Flex>
      </Link>
    </Box>

    </Flex>
  </Box>

    </Box>
  )
}

export default Footer