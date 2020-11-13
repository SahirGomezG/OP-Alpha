import { Flex, Badge, Heading, Text, Box, Image, Icon } from '@chakra-ui/core';

import { OnePagerData } from '../model/model';
import { ContentCard } from './ContentCard';
import { MdLocationOn } from "react-icons/md"

type OnePagerOverviewProps = {
  onePagerData: OnePagerData;
  isLoading: boolean;
};

export const OnePagerOverview = ({
  onePagerData,
  isLoading,
}: OnePagerOverviewProps) => {
  return (
    <ContentCard title='Overview' isLoading={isLoading}>
      <Flex align="center" direction='row' justify='space-between'>
        <Heading as='h1' size='lg' marginRight='10px'>
          {onePagerData.companyName}
        </Heading>

        <Image
          size="25%"
          objectFit="cover"
          src={onePagerData.logo}
          alt="Company Logo"
        /> 
      </Flex>
      <Text fontSize='sm' >
        <Box as={MdLocationOn} size="20px" color="blue.400"/>
        {onePagerData.location}
      </Text>
      <Heading as='h2' size='sm' color='grey' fontStyle='italic'>
        {onePagerData.briefDescription}
      </Heading>
      <Flex>
        {onePagerData.industryTags.map((tag: string) => {
          return (
            <Badge
              key={tag}
              rounded='full'
              px='2'
              variantColor='blue'
              marginRight='10px'
            >
              {tag}
            </Badge>
          );
        })}
      </Flex>
      <Text fontSize='sm'>{onePagerData.detailDescription}</Text>
    </ContentCard>
  );
};
