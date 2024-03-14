import React, { useEffect, useState } from 'react'
import FetchData from '../Context/Apicontext'
import { Box,Spacer,Tag,Text,Skeleton,Heading } from '@chakra-ui/react'
import { FaStar } from 'react-icons/fa'
import CustomSlider from '../utils/SliderContent'

const Series = () => {
  const [bgSeries,setBgSeries] = useState({})
  const [crimeTv,setCrimeTV] = useState([])
  const [mysteryTv,setMysteryTv] = useState([])
  const [comedyTv,setComedyTv] = useState([])
  const [realityshow,setRealityShow] = useState([])
  const [sci_fi_fantasy,setSci_Fi_Fantasy] = useState([])
  const [talkShow,setTalkShow] = useState([])
  const [dailySoap,setDailySoap] = useState([])
  const [koreaTv,setKoreaTv] = useState([])
  const [turkTv,setTurkTv] = useState([])

  useEffect(()=>{
    const url1 = '/trending/tv/day?language=en-US'
    const url2 = '/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=80&with_original_language=en&without_genres=16%2C10762%2C10763%2C10764%2C10767'
    const url3 = '/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=vote_count.desc&with_genres=9648&with_original_language=en&without_genres=16%2C10762%2C10763%2C10764%2C10767'
    const url4 = '/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=vote_count.desc&with_genres=35&with_origin_country=US&without_genres=10767%2C10763%2C10764%2C99%2C10762'
    const url5 = '/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=vote_count.desc&with_genres=10764&with_original_language=en&without_genres=16'
    const url6 = '/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=vote_count.desc&with_genres=10765&with_original_language=en&without_genres=16'
    const url7 = '/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=10767&with_original_language=en'
    const url8 = '/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=vote_count.desc&with_genres=10766&with_original_language=en'
    const url9 = '/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=vote_count.desc&with_original_language=ko'
    const url10 = '/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=vote_count.desc&with_original_language=tr'

    FetchData(url1).then((res)=>{
    setBgSeries(res.results[0])
  })
  FetchData(url2).then((res)=>{
    setCrimeTV(res.results)
  })
  FetchData(url3).then((res)=>{
    setMysteryTv(res.results)
  })
  FetchData(url4).then((res)=>{
    setComedyTv(res.results)
  })
  FetchData(url5).then((res)=>{
    setRealityShow(res.results)
  })
  FetchData(url6).then((res)=>{
    setSci_Fi_Fantasy(res.results)
  })
  FetchData(url7).then((res)=>{
    setTalkShow(res.results)
  })
  FetchData(url8).then((res)=>{
    setDailySoap(res.results)
  })
  FetchData(url9).then((res)=>{
    setKoreaTv(res.results)
  })
  FetchData(url10).then((res)=>{
    setTurkTv(res.results)
  })
  },[])

  return (
    <Box display='flex' flexDirection='column' justifyContent='center' bgColor={'#1E1E1E'} mt={{lg:'90px'}}>
      {bgSeries !== undefined? (
      <Box h={{base:200,sm:300,md:500,lg:600}} w={'100%'} bgImage={`url(${`https://image.tmdb.org/t/p/original${bgSeries.backdrop_path}`})`}
     bgSize='100%' bgRepeat='repeat-x' display={'flex'}
    flexDirection='column-reverse' justifyContent='center'>
    <Text color=' #c0c0c0' fontSize={{base:'16',sm:'20',lg:'28'}}  fontWeight='semibold'>{bgSeries.overview}</Text>
    <Text color=' #c0c0c0' fontSize={{base:'32',sm:'40',lg:'48'}} fontWeight='semibold' w={200}>{bgSeries.original_title}</Text>
    <Box display='flex' w='150px' justifyContent='space-between'>
      <Tag bg='white' color='teal' w='40%' fontWeight={'bold'} fontSize={16} py={2} pr={3} rounded='sm' >{bgSeries.media_type === 'movie'? 'Movie' : "Series"}
    </Tag>
    <Tag fontWeight='bold' bg='teal' w='50%' color='white' fontSize={16} px={2} rounded='sm' mx={1}>{bgSeries.vote_average}<FaStar size={16} />
    </Tag></Box>
    </Box>): <Skeleton h={{base:200,sm:300,md:500,lg:600}} my='10px'/>}
    <Spacer />

    <Box bg={'black'} py={8}>
      <Heading color={'lightcyan'}>Investigation Sagas</Heading><br />
      {crimeTv.length > 0 ?(
      <Box ><CustomSlider items={crimeTv}/></Box>): <Skeleton h='100px' my='10px'/>}
    </Box>  
    <Spacer />

    <Box bg={'black'} py={8}>
      <Heading color={'lightcyan'}>Mystery TV</Heading><br />
      {mysteryTv.length > 0 ?(
      <Box ><CustomSlider items={mysteryTv}/></Box>): <Skeleton h='100px' my='10px'/>}
    </Box>  
    <Spacer />

    <Box bg={'black'} py={8}>
      <Heading color={'lightcyan'}>Favorite Sitcoms</Heading><br />
      {comedyTv.length > 0 ?(
      <Box ><CustomSlider items={comedyTv}/></Box>): <Skeleton h='100px' my='10px'/>}
    </Box>  
    <Spacer />

    <Box bg={'black'} py={8}>
      <Heading color={'lightcyan'}>Popular Reality Shows</Heading><br />
      {realityshow.length > 0 ?(
      <Box ><CustomSlider items={realityshow}/></Box>): <Skeleton h='100px' my='10px'/>}
    </Box>  
    <Spacer />

    <Box bg={'black'} py={8}>
      <Heading color={'lightcyan'}>Sci-Fi/Fantasy Gems</Heading><br />
      {sci_fi_fantasy.length > 0 ?(
      <Box ><CustomSlider items={sci_fi_fantasy}/></Box>): <Skeleton h='100px' my='10px'/>}
    </Box>  
    <Spacer />

    <Box bg={'black'} py={8}>
      <Heading color={'lightcyan'}>Peppy Talk Shows</Heading><br />
      {talkShow.length > 0 ?(
      <Box ><CustomSlider items={talkShow}/></Box>): <Skeleton h='100px' my='10px'/>}
    </Box>  
    <Spacer />

    <Box bg={'black'} py={8}>
      <Heading color={'lightcyan'}>Daily Soaps</Heading><br />
      {dailySoap.length > 0 ?(
      <Box ><CustomSlider items={dailySoap}/></Box>): <Skeleton h='100px' my='10px'/>}
    </Box>  
    <Spacer />

    <Box bg={'black'} py={8}>
      <Heading color={'lightcyan'}>Best of Korea</Heading><br />
      {koreaTv.length > 0 ?(
      <Box ><CustomSlider items={koreaTv}/></Box>): <Skeleton h='100px' my='10px'/>}
    </Box>  
    <Spacer />

    <Box bg={'black'} py={8}>
      <Heading color={'lightcyan'}>Turkish Delicacies</Heading><br />
      {turkTv.length > 0 ?(
      <Box ><CustomSlider items={turkTv}/></Box>): <Skeleton h='100px' my='10px'/>}
    </Box>  
    <Spacer />
    </Box>
  )
}

export default Series