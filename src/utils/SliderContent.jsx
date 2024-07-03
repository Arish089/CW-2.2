import React, { useRef, useState } from 'react';
import { Card,CardBody,Text,Img,Heading, Flex,Tag,TagLeftIcon,TagLabel, Tooltip } from '@chakra-ui/react';
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







export function CustomSliderMov({items}) {
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
          <Link to={item.media_type === 'tv' ? `/detailsTv/${item.id}` : `/detailsMov/${item.id}`}>
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
       item.name || item.title : item.original_title || item.original_name }</Heading>
      <Text overflowY={'scroll'}>{item.overview}</Text>
    </Flex>
      <Flex justifyContent='space-between' py={4} >
      <Tag key={item.id} variant='solid' colorScheme='cyan' w='35%' h={12}>
        <TagLeftIcon as={AddIcon}/>
      <TagLabel><Tooltip label="Add to Watchlist">
  Add to Watchlist
</Tooltip></TagLabel>
    </Tag>
    <Tag key={item.id} variant='outline' colorScheme='cyan' w='35%'>
        <TagLeftIcon as={AddIcon}/>
      <TagLabel><Tooltip label="Add to Favorites">
  Add to Favorites
</Tooltip></TagLabel>
    </Tag>
      </Flex>
  </CardBody>
</Card>
</Link>
        </SwiperSlide>
        </>)
      })}
        
      </Swiper>
    </>
  );
}
export function CustomSliderTv({items}) {
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
          <Link to={item.media_type === 'movie' ? `/detailsMov/${item.id}` : `/detailsMov/${item.id}`}>
        <Card mb={10} bg={'#1E1E1E'} color={'silver'} gap={4} mx={2}>
  <CardBody>
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
    <Flex justifyContent='space-between' py={4} >
      <Tag key={item.id} variant='solid' colorScheme='cyan' w='35%' h={12}>
        <TagLeftIcon as={AddIcon}/>
      <TagLabel><Tooltip label="Add to Watchlist">
  Add to Watchlist
</Tooltip></TagLabel>
    </Tag>
    <Tag key={item.id} variant='outline' colorScheme='cyan' w='35%'>
        <TagLeftIcon as={AddIcon}/>
      <TagLabel><Tooltip label="Add to Favorites">
  Add to Favorites
</Tooltip></TagLabel>
    </Tag>
      </Flex>
  </CardBody>
</Card>
</Link>
        </SwiperSlide>
        </>)
      })}
        
      </Swiper>
    </>
  );
}