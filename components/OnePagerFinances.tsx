import React from 'react';
import { Flex, Heading, Text, Progress, Tooltip, Box, Grid } from '@chakra-ui/core';

import { OnePagerData } from '../model/model';
import { ContentCard } from './ContentCard';

type OnePagerFinancesProps = {
  onePagerData: OnePagerData;
  isLoading: boolean;
};

/** Renders the Finances card. */
export const OnePagerFinances = ({
  onePagerData,
  isLoading,
}: OnePagerFinancesProps) => {
  // Format a number to include a dollar sign. This function
  // will be improved as part of task 2.
  const formatFinanceNumber = (financeNumber: number) => {
    return `$${financeNumber && financeNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
  };

  const fundingStageProgress = (fundsRaisedInStage: number, fundraisingStageGoal: number) => {
    let progress = (fundsRaisedInStage/fundraisingStageGoal) * 100;
    return Math.floor(progress * 100) / 100; 
  };

  return (
    <ContentCard title='Finances' isLoading={isLoading}>
      <Flex align="center">
        <SubHeading>
          Funding Stage:
        </SubHeading>
        <Heading as='h2' size='lg' color='blue.500'>
          {onePagerData.fundraisingStage}
        </Heading>
      </Flex>
      <Flex align="center">
        <SubHeading>
          Funding Details: 
        </SubHeading>
        <Text fontSize='sm' color='grey'>
          {onePagerData.fundraisingDetails}
        </Text>
      </Flex>
      <Grid templateColumns="repeat(2, 1fr)" gap={4} textAlign='center'>
        <Box w="100%" p='1' bg="#ECEFF1" rounded='lg'>
          <Text fontSize="md"> Funds Raised:</Text> 
          <SubHeading>
            {formatFinanceNumber(onePagerData.fundsRaisedInStage)}
          </SubHeading>
        </Box>
        <Box w="100%" bg="#ECEFF1" rounded='lg'>
          <Text fontSize="md"> Funding Goal:</Text> 
          <SubHeading>
          {formatFinanceNumber(onePagerData.fundraisingStageGoal)}
          </SubHeading>
        </Box>
      </Grid>
     
      <SubHeading>
        Funding Stage Progress:
      </SubHeading>
      <Tooltip label={`${fundingStageProgress(onePagerData.fundsRaisedInStage, onePagerData.fundraisingStageGoal)} %`} aria-label='nn'> 
        <Box>
          <Progress 
            color="green" 
            height="30px" 
            value={fundingStageProgress(onePagerData.fundsRaisedInStage, onePagerData.fundraisingStageGoal)} />
        </Box>
      </Tooltip>
    </ContentCard>
  );
};

/** Renders smaller heading. */
const SubHeading = ({ children }) => (
  <Heading as='h2' size='md' marginRight='10px'>
    {children}
  </Heading>
);
