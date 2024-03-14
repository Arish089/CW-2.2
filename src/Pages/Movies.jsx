import React, { useEffect, useState } from 'react'
import FetchData from '../Context/Apicontext'
import { Box,Spacer,Tag,Text,Skeleton,Heading } from '@chakra-ui/react'
import { FaStar } from 'react-icons/fa'
import CustomSlider from '../utils/SliderContent'

const Movies = () => {
const [bgmov,setBgMov] = useState({})
const [thriller,setThriller] = useState([])
const [romantic,setRomantic] = useState([])
const [horror,setHorror] = useState([])
const [drama,setDrama] = useState([])
const [marvel,setMarvel] = useState([])
const [adventure,setAdventure] = useState([])
const [sci_fi,setSci_Fi] = useState([])
const [warMov,setWarMov] = useState([])
const [tvMov,setTvMov] = useState([])
const [frenchMov,setFrenchMov] = useState([])

useEffect(()=>{
  const url1 = '/movie/now_playing?language=en-US&page=1'
  const url2 = '/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_count.desc&with_genres=53&with_original_language=en'
  const url3 = '/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_count.desc&with_genres=10749&with_original_language=en'
  const url4 = '/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_count.desc&with_genres=27&with_original_language=en'
  const url5 = '/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_count.desc&with_genres=18&with_original_language=en'
  const url6 = '/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_count.desc&with_companies=420'
  const url7 = '/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_count.desc&with_genres=12&with_original_language=en&without_companies=420'
  const url8 = '/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_count.desc&with_genres=878&with_original_language=en&without_companies=420%2C5'
  const url9 = '/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_count.desc&with_genres=10752&with_original_language=en'
  const url10 = '/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=10770&with_original_language=en'
  const url11 = '/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_count.desc&with_original_language=fr'
  FetchData(url1).then((res)=>{
    setBgMov(res.results[0])
  })
  FetchData(url2).then((res)=>{
    setThriller(res.results)
  })
  FetchData(url3).then((res)=>{
    setRomantic(res.results)
  })
  FetchData(url4).then((res)=>{
    setHorror(res.results)
  })
  FetchData(url5).then((res)=>{
    setDrama(res.results)
  })
  FetchData(url6).then((res)=>{
    setMarvel(res.results)
  })
  FetchData(url7).then((res)=>{
    setAdventure(res.results)
  })
  FetchData(url8).then((res)=>{
    setSci_Fi(res.results)
  })
  FetchData(url9).then((res)=>{
    setWarMov(res.results)
  })
  FetchData(url10).then((res)=>{
    setTvMov(res.results)
  })
  FetchData(url11).then((res)=>{
    setFrenchMov(res.results)
  })
},[])

  return (
    <Box display='flex' flexDirection='column' justifyContent='center' bgColor={'#1E1E1E'}>
      <Box h={{base:200,sm:300,md:500,lg:600}} w={'100%'} bgImage={`url(${`https://image.tmdb.org/t/p/original${bgmov.backdrop_path}`})`}
     bgSize='100%' bgRepeat='repeat-x' display={'flex'}
    flexDirection='column-reverse' justifyContent='center'>
    <Text color=' #c0c0c0' fontSize={{base:'14',sm:'20',lg:'28'}}  fontWeight='semibold'>{bgmov.overview}</Text>
    <Text color=' #c0c0c0' fontSize={{base:'32',sm:'40',lg:'48'}} fontWeight='semibold' w={200}>{bgmov.original_title}</Text>
    <Box display='flex' w='150px' justifyContent='space-between'>
      <Tag bg='white' color='teal' w='40%' fontWeight={'bold'} fontSize={16} py={2} pr={3} rounded='sm' >Movie
    </Tag>
    <Tag fontWeight='bold' bg='teal' w='50%' color='white' fontSize={16} px={2} rounded='sm' mx={1}>{bgmov.vote_average}<FaStar size={16} />
    </Tag></Box>
    </Box>
    <Spacer />

    <Box bg={'black'} py={8}>
      <Heading color={'lightcyan'}>Classic Thrillers</Heading><br />
      {thriller.length > 0 ?(
      <Box ><CustomSlider items={thriller}/></Box>): <Skeleton h='100px' my='10px'/>}
    </Box>  
    <Spacer />

    <Box bg={'black'} py={8}>
      <Heading color={'lightcyan'}>Eternal Love-Stories</Heading><br />
      {romantic.length > 0 ?(
      <Box ><CustomSlider items={romantic}/></Box>): <Skeleton h='100px' my='10px'/>}
    </Box>  
    <Spacer />

    <Box bg={'black'} py={8}>
      <Heading color={'lightcyan'}>Horror Movies</Heading><br />
      {horror.length > 0 ?(
      <Box ><CustomSlider items={horror}/></Box>): <Skeleton h='100px' my='10px'/>}
    </Box>  
    <Spacer />
    
    <Box bg={'black'} py={8}>
      <Heading color={'lightcyan'}>Drama Movies</Heading><br />
      {drama.length > 0 ?(
      <Box ><CustomSlider items={drama}/></Box>): <Skeleton h='100px' my='10px'/>}
    </Box>  
    <Spacer />
    
    <Box bg={'black'} py={8}>
      <Heading color={'lightcyan'}>Marvel on Big Screen</Heading><br />
      {marvel.length > 0 ?(
      <Box ><CustomSlider items={marvel}/></Box>): <Skeleton h='100px' my='10px'/>}
    </Box>  
    <Spacer />

    <Box bg={'black'} py={8}>
      <Heading color={'lightcyan'}>Adventure Ride</Heading><br />
      {adventure.length > 0 ?(
      <Box ><CustomSlider items={adventure}/></Box>): <Skeleton h='100px' my='10px'/>}
    </Box>  
    <Spacer />

    <Box bg={'black'} py={8}>
      <Heading color={'lightcyan'}>Sci-Fi Movies</Heading><br />
      {sci_fi.length > 0 ?(
      <Box ><CustomSlider items={sci_fi}/></Box>): <Skeleton h='100px' my='10px'/>}
    </Box>  
    <Spacer />

    <Box bg={'black'} py={8}>
      <Heading color={'lightcyan'}>War Tales</Heading><br />
      {warMov.length > 0 ?(
      <Box ><CustomSlider items={warMov}/></Box>): <Skeleton h='100px' my='10px'/>}
    </Box>  
    <Spacer />

    <Box bg={'black'} py={8}>
      <Heading color={'lightcyan'}>Movies from TV</Heading><br />
      {tvMov.length > 0 ?(
      <Box ><CustomSlider items={tvMov}/></Box>): <Skeleton h='100px' my='10px'/>}
    </Box>  
    <Spacer />

    <Box bg={'black'} py={8}>
      <Heading color={'lightcyan'}>From Paris with Love</Heading><br />
      {frenchMov.length > 0 ?(
      <Box ><CustomSlider items={frenchMov}/></Box>): <Skeleton h='100px' my='10px'/>}
    </Box>  
    <Spacer />

    </Box>
  )
}

export default Movies