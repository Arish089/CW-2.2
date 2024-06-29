import React, { useEffect, useState } from 'react'
import { Box,Text,Tag,Skeleton, Spacer,Tabs,Tab,TabList,TabPanel,TabPanels, Center } from '@chakra-ui/react'
import ReactPlayer from 'react-player'
import { useParams } from 'react-router-dom'
import { FaStar } from 'react-icons/fa'
import axios from 'axios'

const SingleItemPage = () => {
const {id} = useParams()
const [singleCard,setSingleCard] = useState({})
const [cast,setCast] = useState([])
const [director,setDirector] = useState([])
const [videoUrl,setVideoUrl] = useState('')
const [genres,setGenres] = useState([])


const FetchSingleTv=async () =>{
    try {
     
    let resp = await axios.get(`https://movix-proxyserver.onrender.com/api/tv/${id}`)
    let response = resp.data  
    console.log(response.credits);
    setSingleCard(response.tv)
    console.log(response);
    setCast(response.credits.cast)

    setDirector(response.tv.created_by)
    setGenres(response.tv.genres)
    
    } catch (error) {
      console.log(error);
    }
  }

useEffect(()=>{
    FetchSingleTv()
    
    
},[])
    
  return (
    <Box bg={'black'}display='flex' flexDirection='column' justifyContent='center' mt={{lg:'90px'}}>
      {singleCard !== undefined? (
      <Box h={{base:200,sm:300,md:500,lg:600}} overflowY={"scroll"} w={'100%'} bgImage={`url(${`https://image.tmdb.org/t/p/original${singleCard.backdrop_path}`})`}
     bgSize='100%' bgRepeat='repeat-x' display={'flex'}
    flexDirection='column-reverse' justifyContent='center'>
    <Text color='white' fontSize={{base:'16',sm:'20',lg:'28'}}  fontWeight='semibold' fontStyle={'italic'}> - {singleCard.tagline}</Text>
    <Text color=' #c0c0c0' fontSize={{base:40,sm:48,lg:56}} fontWeight='bold' w={300}>{singleCard.original_language === 'ja' ? singleCard.name || singleCard.title : singleCard.original_title || singleCard.original_name }</Text>
    <Box display='flex' w='150px' justifyContent='space-between'>
      <Tag bg='white' color='teal' w='40%' fontWeight={'bold'} fontSize={16} py={2} pr={3} rounded='sm' >Series
    </Tag>
    <Tag fontWeight='bold' bg='teal' w='50%' color='white' fontSize={16} px={2} rounded='sm' mx={1}>{singleCard.vote_average}<FaStar size={16} />
    </Tag></Box>
    </Box>): <Skeleton h={{base:200,sm:300,md:500,lg:600}} my='10px'/>}
     

     <Box color='silver' mt={10}>
     <Tabs>
  <TabList >
    <Tab fontSize={{base:'16px',md:'20px'}} mx={{base:0,sm:1,md:2}}>Overview</Tab>
    <Tab fontSize={{base:'16px',md:'20px'}} mx={{base:0,sm:1,md:2}}>Cast</Tab>
    <Tab fontSize={{base:'16px',md:'20px'}} mx={{base:0,sm:1,md:2}}>Trailers & Release</Tab>
  </TabList>

  <TabPanels>
    <TabPanel>
      <Text fontSize={24}>{singleCard.overview}</Text>
    </TabPanel>
    <TabPanel>
      <Text color='white' fontSize={20}><span style={{color:'silver'}}>Starring by</span> : {cast.slice(0, 5).map((actor, index) => {
    return (index < 4 ? actor.name +', ' : actor.name);
      })}</Text><br />
      <Text color='white' fontSize={20}><span style={{color:'silver'}}>Directed by</span> : {director.map((elem,index)=>{
        return (index < director.length - 1 ? elem.name + ", ": elem.name)})}</Text><br />
      <Text color='white' fontSize={20}><span style={{color:'silver'}}>Genres</span> : {genres.map((genre,index)=>{
        return (index < genres.length-1 ? genre.name + ', ' : genre.name)})}</Text><br />
      <Text color='white' fontSize={20}><span style={{color:'silver'}}>First Aired on </span> : {singleCard.first_air_date}</Text><br />
      <Text color='white' fontSize={20}><span style={{color:'silver'}}>Runtime </span> : {singleCard.episode_run_time} minutes</Text>

    </TabPanel>
    <TabPanel>
    <Text color='white' fontSize={20}><span style={{color:'silver'}}>Number of Seasons</span> : {singleCard.number_of_seasons}</Text><br />
      <Text color='white' fontSize={20}><span style={{color:'silver'}}>Number of Episodes</span> : {singleCard.number_of_episodes}</Text><br />
      <Text color='white' fontSize={20}><span style={{color:'silver'}}>Last Aired on </span> : {singleCard.last_air_date}</Text><br />
      <Text color='white' fontSize={20}><span style={{color:'silver'}}>Status </span> : {singleCard.status}</Text>
    </TabPanel>
  </TabPanels>
</Tabs>
     </Box>

    </Box>
  )
}

export default SingleItemPage
{/**
       <Box h={{base:200,sm:300,md:500,lg:600}} w={'100%'} position='relative' overflow='hidden'
      bgSize='100%' >
       <ReactPlayer url={videoUrl} width='800px'/>
 
     </Box>
     */}