import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Box, Heading,Spacer,Tag,Text, Skeleton } from '@chakra-ui/react'
import { FaStar } from 'react-icons/fa'
import {CustomSliderMov,CustomSliderTv} from '../utils/SliderContent'
import FetchData from '../Context/Apicontext'


const Homepage = () => {
  const [bgmov,setBgMov] = useState({})

  const [trend,setTrend] = useState([])
  const [popularMov,setPopularMov] = useState([])
  const [topRatedTv,setTopRatedTv] = useState([])
  const [popularTv,setPopularTv] = useState([])
  const [topRatedMov,setTopRatedMov] = useState([])
  const [upcomingMov,setUpcomingMov] = useState([])
  const [comedyTv,setComedyTv] = useState([])
  const [fantasyMov,setFantasyMov] = useState([])
  const [blockBMov,setBlockBMov] = useState([])
  const [mysteryTv,setMysteryTv] = useState([])
  const [topanime,setTopAnime] = useState([])

  useEffect(()=>{
    const url1 = '/trending/all/day?language=en-US'
    const url2 = '/movie/popular?language=en-US&page=1'
    const url3 = '/tv/top_rated?language=en-US&page=1'
    const url4 = '/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=vote_count.desc&with_origin_country=US&without_genres=10767%2C10763%2C10764%2C9910762'
    const url5 = '/movie/top_rated?language=en-US&page=1'
    const url6 = '/movie/upcoming?language=en-US&page=1'
    const url7 = '/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=vote_count.desc&with_genres=35&with_origin_country=US&without_genres=10767%2C10763%2C10764%2C99%2C10762'
    const url8 = '/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_count.desc&with_genres=14'
    const url9 = '/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=revenue.desc'
    const url10 = '/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=vote_count.desc&with_genres=9648'
    const url11 = '/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=vote_count.desc&with_genres=16&with_origin_country=JP'
    FetchData(url1).then((res)=>{
      setTrend(res.results)
      console.log(res.results[0]);
      setBgMov(res.results[0])
    
    })
    FetchData(url2).then((res)=>{
      setPopularMov(res.results)
    })
    FetchData(url3).then((res)=>{
      setTopRatedTv(res.results)
    })
    FetchData(url4).then((res)=>{
      setPopularTv(res.results)
    })
    FetchData(url5).then((res)=>{
      setTopRatedMov(res.results)
    })
    FetchData(url6).then((res)=>{
      setUpcomingMov(res.results)
    })
    FetchData(url7).then((res)=>{
      setComedyTv(res.results)
    })
    FetchData(url8).then((res)=>{
      setFantasyMov(res.results)
    })
    FetchData(url9).then((res)=>{
      setBlockBMov(res.results)
    })
    FetchData(url10).then((res)=>{
      setMysteryTv(res.results)
    })
    FetchData(url11).then((res)=>{
      setTopAnime(res.results)
    })
    },[])
  

  return (
    <Box display='flex' flexDirection='column' justifyContent='center' bgColor={'#1E1E1E'} >
      <Link to={bgmov.media_type === 'movie' ? `/detailsMov/${bgmov.id}` : `/detailsTv/${bgmov.id}`}>
      {bgmov !==  null ?(
    <Box h={{base:200,sm:300,md:500,lg:600}} w={'100%'} overflowY={"scroll"} bgImage={`url(${`https://image.tmdb.org/t/p/original${bgmov.backdrop_path}`})`}
     bgSize='100%' bgRepeat='repeat-x' display={'flex'}
    flexDirection='column-reverse' justifyContent='center'>
    <Text color=' #c0c0c0' fontSize={{base:'16',sm:'20',lg:'28'}}  fontWeight='semibold'>{bgmov.overview}</Text>
    <Text color=' #c0c0c0' fontSize={{base:'32',sm:'40',lg:'48'}} fontWeight='semibold' w={{md:360}}>{bgmov.original_language === 'ja' ? bgmov.name || bgmov.title : bgmov.original_title || bgmov.original_name }
    </Text>
    <Box display='flex' w='150px' justifyContent='space-between' >
      <Tag bg='white' color='teal' w='40%' fontWeight={'bold'} fontSize={16} py={2} pr={3} rounded='sm' >{bgmov.media_type === 'movie'? 'Movie' : "Series"}
    </Tag>
    <Tag fontWeight='bold' bg='teal' w='50%' color='white' fontSize={16} px={2} rounded='sm' mx={1}>{bgmov.vote_average}<FaStar size={16} />
    </Tag></Box>
    </Box>):<Skeleton h={{base:200,sm:300,md:500,lg:600}} my='10px'/>}
    </Link>
    <Spacer />
    <Box bg={'black'} py={8}>
      <Heading color={'lightcyan'}>Trending</Heading><br />
      {trend.length > 0 ?(
      <Box ><CustomSliderMov items={trend}/></Box>): <Skeleton h='100px' my='10px'/>}
    </Box>  
      
    <Spacer />
    <Box bg={'black'} py={8}>
      <Heading color={'lightcyan'}>Popular Movies</Heading><br />
      {popularMov.length > 0 ?(
      <Box ><CustomSliderMov items={popularMov}/></Box>) :<Skeleton h='100px' my='10px'/> }
    </Box>
    <Spacer />
    <Box bg={'black'} py={8}>
      <Heading color={'lightcyan'}>Top Rated Series</Heading><br />
      {topRatedTv.length > 0 ? (
      <Box ><CustomSliderTv items={topRatedTv}/></Box>):<Skeleton h='100px' my='10px'/>  }
    </Box>
    <Spacer />
    <Box bg={'black'} py={8}>
      <Heading color={'lightcyan'}>Popular TV Shows</Heading><br />
      {popularTv.length > 0 ? (
      <Box ><CustomSliderTv items={popularTv}/></Box>) : <Skeleton h='200px' my='10px'/>}
    </Box>
    <Spacer />
    <Box bg={'black'} py={8}>
      <Heading color={'lightcyan'}>Top Rated Movies</Heading><br />
      {topRatedMov.length > 0 ? (
      <Box ><CustomSliderMov items={topRatedMov}/></Box>):<Skeleton h='200px' my='10px'/> }
    </Box>
    <Spacer />
    <Box bg={'black'} py={8}>
      <Heading color={'lightcyan'}>Upcoming Movies</Heading><br />
      {upcomingMov.length > 0 ?(
      <Box ><CustomSliderMov items={upcomingMov}/></Box>): <Skeleton h='200px' my='10px'/> }
    </Box>
    <Spacer />
    <Box bg={'black'} py={8}>
      <Heading color={'lightcyan'}>Comedy TV Series</Heading><br />
      {comedyTv.length > 0 ? (
      <Box ><CustomSliderTv items={comedyTv}/></Box>):<Skeleton h='200px' my='10px'/> }
    </Box>
    <Spacer />
    <Box bg={'black'} py={8}>
      <Heading color={'lightcyan'}>Popular Fantasy Movies</Heading><br />
      {fantasyMov.length > 0 ? (
      <Box ><CustomSliderMov items={fantasyMov}/></Box>):<Skeleton h='200px' my='10px'/>}
    </Box>
    <Spacer />
    <Box bg={'black'} py={8}>
      <Heading color={'lightcyan'}>Biggest Blockbusters</Heading><br />
      {blockBMov.length > 0 ? (
      <Box ><CustomSliderMov items={blockBMov}/></Box>): <Skeleton h='200px' my='10px'/>}
    </Box>
    <Spacer />
    <Box bg={'black'} py={8}>
      <Heading color={'lightcyan'}>Mysterical Series</Heading><br />
      {mysteryTv.length > 0 ? (
      <Box ><CustomSliderTv items={mysteryTv}/></Box>):<Skeleton h='200px' my='10px'/>}
    </Box>
    <Spacer />
    <Box bg={'black'} py={8}>
      <Heading color={'lightcyan'}>Popular Anime Series</Heading><br />
      {topanime.length > 0 ? (
      <Box ><CustomSliderTv items={topanime}/></Box>):<Skeleton h='200px' my='10px'/>}
    </Box>
    
    <Spacer />
    </Box>
    
  )
}

export default Homepage;