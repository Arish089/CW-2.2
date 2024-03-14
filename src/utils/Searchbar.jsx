import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { Button, FormControl,Input, InputGroup, InputRightAddon, border } from '@chakra-ui/react'
import { FaSearch } from 'react-icons/fa'
import axios from 'axios'

const Searchbar = ({handleSearch,searchquery,setSearchQuery}) => {
    

  return (
    <FormControl>
        <InputGroup>
    <Input type='search' color='white' placeholder='Search Movies, Series, Anime and more...' value={searchquery} onChange={(e)=> setSearchQuery(e.target.value)}/>
    <InputRightAddon onClick={handleSearch} bg='black'><FaSearch /></InputRightAddon>
    </InputGroup>
  </FormControl>
  )
}

export default Searchbar