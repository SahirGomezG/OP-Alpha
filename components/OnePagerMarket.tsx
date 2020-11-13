import React from 'react';
import { Box, Flex, Heading, Text } from '@chakra-ui/core';

import { OnePagerData, OnePagerStat } from '../model/model';
import { ContentCard } from './ContentCard';

type OnePagerMarketProps = {
  onePagerData: OnePagerData;
  isLoading: boolean;
};

/** Renders the Market card. */
export const OnePagerMarket = ({
  onePagerData,
  isLoading,
}: OnePagerMarketProps) => {
  return (
    <ContentCard title='Market' isLoading={isLoading}>
      <Flex align='center' justifyContent='center' >
        {onePagerData.marketStats && onePagerData.marketStats.map((stat: OnePagerStat) => (
          <Stat key={stat.title} stat={stat}></Stat>  
        ))}
      </Flex> 
    </ContentCard>
  );
};

const Stat = ({ stat }: { stat: OnePagerStat }) => {
  return ( 
      <Box w="30%" m='2' h='160px' textAlign='center' bg="#E3F2FD" rounded='lg' >
          <Heading as='h3' size='md' marginBottom='0'>
            {stat.title}
          </Heading>
          <Text fontSize='sm' marginTop='2px' color='blue.500'>
            {stat.description}
          </Text>
          <Heading as='h3' size='sm' marginBottom='16px'>
            {stat.amount + ' ' + stat.value}
          </Heading>
      </Box>   
  );
};