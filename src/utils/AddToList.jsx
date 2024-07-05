import React from 'react';
import { Tag, TagLeftIcon, TagLabel, Tooltip, useToast } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import axios from 'axios';

const AddToListButton = ({ URL, id, media_type, name, user, label }) => {
  const toast = useToast();
  
  const addToList = async () => {
    try {
      const requestData = {
        list_id: id,
        media_type: media_type,
        name: name,
        ActiveUser: user.email,
      };
      const resp = await axios.post(URL, requestData);
      toast({
        title: 'Added Successfully',
        status: 'success',
        isClosable: true,
      });
    } catch (error) {
      console.log('Error:', error.response ? error.response.data : error.message);
      toast({
        title: 'Error in adding',
        status: 'error',
        isClosable: true,
      });
    }
  };

  return (
    <Tag variant={label === 'Add to Watchlist' ? 'solid' : 'outline'} colorScheme='cyan' w='35%' h={12} onClick={addToList} cursor='pointer'>
      <TagLeftIcon as={AddIcon} />
      <TagLabel>
        <Tooltip label={label}>
          {label}
        </Tooltip>
      </TagLabel>
    </Tag>
  );
};

export default AddToListButton;
