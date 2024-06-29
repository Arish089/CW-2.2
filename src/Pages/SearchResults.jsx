import React, { useEffect, useState,useRef } from 'react'
import axios from 'axios'
import { Box, FormControl, FormLabel, HStack,Select, SimpleGrid,Flex,Heading,Text,Card,CardBody,Img, Button, Input,Skeleton } from '@chakra-ui/react'
import { useParams,Link } from 'react-router-dom'

const SearchResults = () => {
  const {searchquery} = useParams()
  const [page,setPage] = useState(1)
  const [totalPages,setTotalPages] = useState(null)
  const [searchResult,setSearchresult] = useState([])
  const [filter,setFilter] = useState('multi')
  const timerid = useRef(null)


  const debouncedSearch = (func,delay) =>{
    if(timerid.current){
      clearInterval(timerid.current)
    }
    timerid.current = setInterval(()=>{
      clearInterval(timerid.current)
      func()
    },delay)    
   }

  const FetchSearch = async ()=>{
    try {
      let resp = await axios({
        method:'get',
        baseURL: `https://movix-proxyserver.onrender.com/api/search/${searchquery}`,
        params:{
          page: page,
        filter: filter
      }
      })
      let finalresp = resp.data
      console.log(resp.data.results);
      setSearchresult(finalresp.results)
      setTotalPages(finalresp.total_pages)
    } catch (error) {
     console.log(error); 
    }
  }

  useEffect(()=>{
    if(searchquery.trim() !== ""){
      debouncedSearch(FetchSearch,1000)
      }else{
        searchResult([])
      }
    return ()=>{
      clearInterval(timerid.current)
    }
  },[searchquery,page,filter])

  return (
    <Box>
      <Box mt={{lg:'94px'}} bgColor={'black'} py={10}>
      <HStack w={{base:'40%',sm:'30%',lg:'20%'}} m='auto'>
        <FormControl>
          <FormLabel color='silver' textAlign='center' fontSize={20}>Filter</FormLabel>
        <Select value={filter} onChange={(e)=>setFilter(e.target.value)} color={'blue.300'}>
          <option value="multi">All</option>
          <option value="movie">Movies</option>
          <option value="tv">T.V/Series</option>
        </Select>
        </FormControl>
      </HStack>
      <Box p={10} bg='black'>
        <SimpleGrid columns={{base:1,sm:2,md:3}} gap={10}>
          {searchResult.length > 0 ?
          searchResult?.map((item)=>{
            return(
              <Box key={item.id}>
                <Link to={filter === 'movie' ? `/detailsMov/${item.id}` : filter === 'tv' ?`/detailsTv/${item.id}`:
                  item.media_type === 'movie' ? `/detailsMov/${item.id}` : `/detailsTv/${item.id}` }>
                 <Card mb={10} bg={'#1E1E1E'} color={'silver'} gap={4} mx={2}>
  <CardBody>
    <Img
      src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
      alt={`${
        item.original_language === 'ja' || item.original_language === 'ko' || item.original_language === 'tr' 
        ?
         item.name : item.original_title || item.original_name }`}
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
      <Button onClick={()=>setPage( Number(page) - 1)} isDisabled={page > 1 ? false : true} colorScheme='blue'>Previous</Button>
      <Input type='text' value={page} onChange={(e)=>{
    const nextPage = parseInt(e.target.value);
    if (!isNaN(nextPage) && nextPage >= 1 && nextPage <= totalPages) {
      setPage(nextPage);
    }} }/>
      <Button onClick={()=>setPage(Number(page) + 1)} isDisabled={page < totalPages ? false : true} colorScheme='blue'>Next</Button>
      </HStack>
      </Box>
    </Box>
    </Box>
  )
}

export default SearchResults