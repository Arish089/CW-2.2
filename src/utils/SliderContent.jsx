import React, { useContext, useRef, useState } from 'react';
import { Card,CardBody,Text,Img,Heading, Flex,Tag,TagLeftIcon,TagLabel, Tooltip, useToast } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { AddIcon } from '@chakra-ui/icons';
import axios from 'axios'
import { AuthContext } from '../AuthContext/AuthContextMain';
import AddToListButton from './AddToList';

const url1 = `https://movix-proxyserver.onrender.com/watchlist/list`
const url2 = `https://movix-proxyserver.onrender.com/favorite/list`


export function CustomSliderMov({items}) {
  const {CurrentUser} = useContext(AuthContext)
  return (
    <>
      <Swiper 
        slidesPerView={3}
        centeredSlides={false}
        slidesPerGroup={3}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          769: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
          480:{
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
          320:{
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
        }}
        scrollbar={true}
        navigation={true}
        pagination={{
          type:'progressbar'
        }}
        modules={[Keyboard, Scrollbar, Navigation, Pagination]}
        className="mySwiper"
      >{items.map((item)=>{
        return(<>
        <SwiperSlide key={item.id} >
          
        <Card mb={10} bg={'#1E1E1E'} color={'silver'} gap={4} mx={2}>
  <CardBody>
  <Link to={item.media_type === 'tv' ? `/detailsTv/${item.id}` : `/detailsMov/${item.id}`}>
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
       item.name || item.title : item.original_title || item.original_name }</Heading>
      <Text overflowY={'scroll'}>{item.overview}</Text>
    </Flex>
    </Link>
      <Flex justifyContent='space-between' py={4} >
      <AddToListButton URL ={url1} id={item.id} media_type={item.media_type || 'movie'} name={item.title || item.name|| item.original_title} user={CurrentUser} label={'Add to Watchlist'} />
      <AddToListButton URL ={url2} id={item.id} media_type={item.media_type || 'movie'} name={item.title || item.name|| item.original_title} user={CurrentUser} label={'Add to Favorites'} />
      </Flex>
  </CardBody>
</Card>

        </SwiperSlide>
        </>)
      })}
        
      </Swiper>
    </>
  );
}
export function CustomSliderTv({items}) {
  const {CurrentUser} = useContext(AuthContext)
  return (
    <>
      <Swiper 
        slidesPerView={3}
        centeredSlides={false}
        slidesPerGroup={3}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          769: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
          480:{
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
          320:{
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
        }}
        scrollbar={true}
        navigation={true}
        pagination={{
          type:'progressbar'
        }}
        modules={[Keyboard, Scrollbar, Navigation, Pagination]}
        className="mySwiper"
      >{items.map((item)=>{
        return(<>
        <SwiperSlide key={item.id} >

        <Card mb={10} bg={'#1E1E1E'} color={'silver'} gap={4} mx={2}>
  <CardBody>
  <Link to={item.media_type === 'movie' ? `/detailsMov/${item.id}` : `/detailsTv/${item.id}`}>
    <Img
      src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`} 
      alt={item.original_language === 'ja' || item.original_language === 'ko' || item.original_language === 'tr' 
      ?
       item.name : item.original_title || item.original_name}
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
    </Link>
    <Flex justifyContent='space-between' py={4}>
    <AddToListButton URL ={url1} id={item.id} media_type={item.media_type || 'tv'} name={ item.name|| item.original_name} user={CurrentUser} label={'Add to Watchlist'} />
    <AddToListButton URL ={url2} id={item.id} media_type={item.media_type || 'tv'} name={ item.name|| item.original_name} user={CurrentUser} label={'Add to Favorites'} />
      </Flex>
  </CardBody>
</Card>

        </SwiperSlide>
        </>)
      })}
        
      </Swiper>
    </>
  );
}