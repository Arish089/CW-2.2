import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Box, FormControl, FormLabel, HStack,Select, SimpleGrid,Flex,Heading,Text,Card,CardBody,Img, Button, Input,Skeleton } from '@chakra-ui/react'

const Anime = () => {
  const [Anime,setAnime] = useState([])
  const [page,setPage] = useState(1)
  const [totalPages,setTotalPages] = useState(null)
  const [sort,setSort] = useState('vote_count.desc')
  const [filter,setFilter] = useState('JP')

  const fetchAnime=async () =>{
    try {
     
    let resp = await axios({
      method:'get',
      baseURL:`https://movix-proxyserver.onrender.com/api/anime`,
      params:{
        page: page,
        sort_by: sort,
        with_origin_country: filter
      }
    })
    let finalresp = resp.data
    setAnime(finalresp.results)
    setTotalPages(finalresp.total_pages)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    fetchAnime()
  },[page,sort,filter])
  return (
    <Box mt={{lg:'94px'}} bgColor={'black'} py={10}>
      <HStack w={{base:'50%',sm:'40%',md:'30%',lg:'20%'}} m='auto'>
        <FormControl>
        <FormLabel color='silver' textAlign='center' fontSize={20}>Filter</FormLabel>
        <Select value={sort} onChange={(e)=>setSort(e.target.value)} color={'blue.300'}>
          <option value="vote_count.desc"  >Vote Count(descending)</option>
          <option value="vote_count.asc">Vote Count(ascending)</option>
          <option value="popularity.desc">Popularity(descending)</option>
          <option value="popularity.asc">Popularity(ascending)</option>
          <option value="first_air_date.desc">First Aired (descending)</option>
          <option value="first_air_date.asc">First Aired (ascending)</option>
        </Select>
        </FormControl>
        <FormControl>
          <FormLabel color='silver' textAlign='center' fontSize={20}>Sort</FormLabel>
        <Select value={filter} onChange={(e)=>setFilter(e.target.value)} color={'blue.300'}>
          <option value="JP">Anime</option>
          <option value="US">Animation</option>
        </Select>
        </FormControl>
      </HStack>
      <Box p={10} bg='black'>
        <SimpleGrid columns={{base:1,sm:2,md:3}} gap={10}>
          {Anime.length > 0 ?
          Anime?.map((item)=>{
            return(
              <Box key={item.id}>
                <Link to={`/detailsTv/${item.id}`}>
                 <Card mb={10} bg={'#1E1E1E'} color={'silver'} gap={4} mx={2}>
  <CardBody>
    <Img
      src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
      onError={(e)=>{
        e.target.onerror = null;
        e.target.src = `https://placehold.co/600x400?text=${
          item.original_language === 'ja' || item.original_language === 'ko' || item.original_language === 'tr' 
          ?
           item.name : item.original_title || item.original_name }`
      }}
    />
    
    <Flex direction={'column'} height='180' mt='6' spacing='3'>
      <Heading size='md'>{
      item.original_language === 'ja' || item.original_language === 'ko' || item.original_language === 'tr' 
      ?
       item.name : item.original_title || item.original_name }</Heading>
      <Text overflowY={'scroll'}>{item.overview}</Text>
    </Flex>
  </CardBody>
</Card>
</Link>
              </Box>
            )
          }): <Skeleton h='100vh' w='100vw' my='10px'/>}
        </SimpleGrid>
      </Box>
      <Box display='flex' justifyContent='center'>
      <HStack bg={'black'} color='blue.200' m='auto'>
      <Button onClick={()=>setPage(page - 1)} isDisabled={page > 1 ? false : true} colorScheme='blue'>Previous</Button>
      <Input type="number" value={page} onChange={(e)=>setPage(e.target.value)} />
      <Button onClick={()=>setPage(Number(page) + 1)} isDisabled={page < totalPages ? false : true} colorScheme='blue'>Next</Button>
      </HStack>
      </Box>
    </Box>
  )
}

export default Anime