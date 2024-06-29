import axios from 'axios'
import { useEffect } from 'react';



async function FetchData(url){
    const baseurl = 'https://movix-proxyserver.onrender.com/api/data'
    try {
      const resp = await axios({
        method:'get',
        baseURL: baseurl,
        params:{url}
      })
      return resp.data
    } catch (error) {
      console.log(error);
    } 

    return
  }
  export default FetchData