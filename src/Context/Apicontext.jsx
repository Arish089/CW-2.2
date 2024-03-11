import axios from 'axios'
import { useEffect } from 'react';



async function FetchData(url){
    const baseurl = 'https://api.themoviedb.org/3'
    try {
      const resp = await axios({
        method:'get',
        baseURL: baseurl,
        url: url,
        headers:{
          'accept': 'application/json',
          'Authorization':
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OWVlY2FjNTNkMWY2NWZlYzJlZmM5MTRhMThmMjYxMiIsInN1YiI6IjY1OWFmODA5MGQxMWYyMDIwMmViMjIyMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VvH2aM_CCdil6AAuu-KU_0CEReTlj7W8y7Mm7G2EaYQ' 
        }
      })
      return resp.data
    } catch (error) {
      console.log(error);
    } 

    return
  }
  export default FetchData