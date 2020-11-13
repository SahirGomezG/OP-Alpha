import Head from 'next/head';
import { useRouter } from 'next/router'
import React from 'react';
import { Box, Heading, Text, Divider, Button, Flex, Icon } from '@chakra-ui/core';
import { MdLock } from "react-icons/md"

import { Header } from './Header';
import PaymentModal from './PaymentModal';
import { getAllPublicOnePagerData } from '../data/dataService';
import { OnePagerPublicData } from '../model/model';

import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

type HomeProps = {
  paid: boolean;
  handlePayment: () => void;
  handleUnsubscribe: () => void;
};

const api_key = process.env.NEXT_PUBLIC_PUBLISHABLE_KEY_DEV;
const stripePromise = loadStripe(api_key);

/** Renders the home component. */
const Home = ({ paid, handlePayment, handleUnsubscribe }:HomeProps) => {
  const [onePagers, setOnePagers]: [OnePagerPublicData[], any] = React.useState([]);
  const [paymentModal, setPaymentModal] = React.useState(false);

  // React hook to load data on first render
  React.useEffect(() => {
    getAllPublicOnePagerData().then((result) => {
      setOnePagers(result);
    });
  }, []);

  const toggleModal = () => {
    setPaymentModal(!paymentModal)  
  }

  return (
    <Box>
      <Elements stripe={stripePromise}>
      <Head>
        <title>One Pager Alpha</title>
        <link rel='icon' href='/favicon.png' />
      </Head>

      <Header />

        <Box d='flex' justifyContent='center'>
          <Box w='xl'>
            <Heading as='h1' size='xl'>
              Welcome to One Pager Alpha!
            </Heading>

            <Heading as='h2' size='md'>
              View active OnePagers
            </Heading>

            <Divider />

            <OnePagerLinks onePagers={onePagers} rememberMe={paid}/>

            <Flex align="center" direction='row' justify='flex-end'>
              {!paid 
                ? <Button variantColor='blue' variant="outline" onClick={toggleModal}>
                  Join Today
                </Button> 
                : <Button variantColor='red' variant="outline" onClick={handleUnsubscribe}>
                  Unsubscribe
                </Button> }
            </Flex>
          
            <PaymentModal
              isOpen={paymentModal}
              toggle={toggleModal}
              handlePayment={handlePayment}
            />      
          </Box>
        </Box>
      </Elements>
    </Box>
  );
};

type OnePagerLinksProps = {
  onePagers: OnePagerPublicData[];
  rememberMe: boolean
};

const OnePagerLinks = ({ onePagers, rememberMe }: OnePagerLinksProps) => {
  const router = useRouter()

  return (
    <>
      {onePagers.map((onePagerData: OnePagerPublicData) => (
        <Box key={onePagerData.companyName} marginBottom='10px'>
          {onePagerData.freebieVersion || rememberMe 
          ? <span onClick={() => router.push(`/${onePagerData.url}`)} >
              <Icon name="view" size="20px" mr='2'/>{onePagerData.companyName}
            </span>
          : <Text color='tomato' margin='0'><Box as={MdLock} size="20px" mr='2'/>{onePagerData.companyName}</Text>}
          <Text margin='0'>{onePagerData.briefDescription}</Text>
        </Box>
      ))}
    </>
  );
};

export default Home;