import React from 'react';
import { Heading, Box, Flex } from '@chakra-ui/core';

import { OnePagerData } from '../model/model';
import { ContentCard } from './ContentCard';

import ReactPlayer from 'react-player/youtube'

type OnePagerVideoProps = {
  onePagerData: OnePagerData;
  isLoading: boolean;
};

export const OnePagerVideo = ({
  onePagerData,
  isLoading,
}: OnePagerVideoProps) => {
  return (
    <>
      <ContentCard title='Pitch Video' isLoading={isLoading}>
        <Heading as='h2' size='md' marginRight='10px'> 
          <Box>
            <Flex ml='10px' align="center">
              <ReactPlayer url={onePagerData.pitchVideoLink} />
            </Flex>
          </Box>     
        </Heading>
      </ContentCard> 
    </>
  );
};
