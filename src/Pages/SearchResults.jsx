import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Box } from '@chakra-ui/react'

const SearchResults = () => {
  const [query,setQuery] = useState('')
  const [page,setPage] = useState(1)
  const [searchResult,setSearchresult] = useState([])


  const FetchSearch = async ()=>{
    try {
      let resp = await axios({
        method:'get',
        baseURL: `https://api.themoviedb.org/3`,
        url:`/search/multi?include_adult=false&language=en-US`,
        headers:{
          'accept': 'application/json',
          'Authorization':
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OWVlY2FjNTNkMWY2NWZlYzJlZmM5MTRhMThmMjYxMiIsInN1YiI6IjY1OWFmODA5MGQxMWYyMDIwMmViMjIyMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VvH2aM_CCdil6AAuu-KU_0CEReTlj7W8y7Mm7G2EaYQ' 
        },
        params:{
          page: page,
          query: query}
      })
      let finalresp = resp.data
      console.log(resp.data);
      setSearchresult(finalresp.data)
    } catch (error) {
     console.log(error); 
    }
  }

  useEffect(()=>{
    FetchSearch()
  },[page])
  return (
    <Box>
      
    </Box>
  )
}

export default SearchResults