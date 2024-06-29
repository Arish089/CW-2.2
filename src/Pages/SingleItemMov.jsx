import React, { useEffect, useState } from 'react'
import { Box,Text,Tag,Skeleton,Tabs,Tab,TabList,TabPanel,TabPanels, Center } from '@chakra-ui/react'
import ReactPlayer from 'react-player'
import { useParams } from 'react-router-dom'
import { FaStar } from 'react-icons/fa'
import axios from 'axios'

const SingleItemPage = () => {
const {id} = useParams()
const [singleCard,setSingleCard] = useState({})
const [cast,setCast] = useState([])
const [director,setDirector] = useState('')
const [videoUrl,setVideoUrl] = useState('')


const FetchSingleMov = async () =>{
    try {
     
    let resp = await axios.get(`https://movix-proxyserver.onrender.com/api/movie/${id}`)
    let response = resp.data
    console.log(response.credits);
    setSingleCard(response.movie)
    setVideoUrl(`https://www.youtube.com/watch?v=${response.movie.videos.results[0].key}`);
    console.log(response.credits.crew);
    setCast(response.credits.cast)
    const crew = response.credits.crew;
  const directorObject = crew.find(member => member.job === 'Director')
  console.log(directorObject.name);
  setDirector(directorObject.name)
    } catch (error) {
      console.log(error);
    }
  }

useEffect(()=>{
    FetchSingleMov()
},[])
    
  return (
    <Box bg={'black'}display='flex' flexDirection='column' justifyContent='center' mt={{lg:'90px'}}>
      {singleCard !== undefined? (
      <Box h={{base:200,sm:300,md:500,lg:600}} overflowY={"scroll"} w={'100%'} bgImage={`url(${`https://image.tmdb.org/t/p/original${singleCard.backdrop_path}`})`}
     bgSize='100%' bgRepeat='repeat-x' display={'flex'}
    flexDirection='column-reverse' justifyContent='center'>
    <Text color='white' fontSize={{base:'16',sm:'20',lg:'28'}}  fontWeight='semibold' fontStyle={'italic'}> - {singleCard.tagline}</Text>
    <Text color=' #c0c0c0' fontSize={{base:40,sm:48,lg:56}} fontWeight='bold' w={240}>{singleCard.original_language === 'ja' ? singleCard.name || singleCard.title : singleCard.original_title || singleCard.original_name }</Text>
    <Box display='flex' w='150px' justifyContent='space-between'>
      <Tag bg='white' color='teal' w='40%' fontWeight={'bold'} fontSize={16} py={2} pr={3} rounded='sm' >Movie
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
    return (index < 4 ? actor.name + ', ' : actor.name);
      })}</Text><br />
      <Text color='white' fontSize={20}><span style={{color:'silver'}}>Directed by</span> : {director}</Text><br />
      <Text color='white' fontSize={20}><span style={{color:'silver'}}>imdb Id</span> : {singleCard.imdb_id}</Text><br />
      <Text color='white' fontSize={20}><span style={{color:'silver'}}>Released on </span> : {singleCard.release_date}</Text><br />
      <Text color='white' fontSize={20}><span style={{color:'silver'}}>Runtime </span> : {singleCard.runtime} minutes</Text>

    </TabPanel>
    <TabPanel>
    <Center  >
       <ReactPlayer url={videoUrl} width='800px'/>
 
     </Center>
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