import React, { useContext, useEffect } from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Text,
    FormControl,
    FormLabel,
    Input,
    Box,
    Alert,
    AlertIcon
  } from "@chakra-ui/core";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import { UserContext } from '../context/store';

type PaymentModalProps = {
  isOpen: boolean;
  toggle: any;
  handlePayment: () => void;
};

const PaymentModal = ({
  isOpen,
  toggle,
  handlePayment
}:PaymentModalProps) => {
  const [isProcessing, setProcessingTo] = React.useState(false);
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [zip, setZip] = React.useState('');
  const [checkoutError, setCheckoutError] = React.useState('');

  const stripe = useStripe();
  const elements = useElements();

  const { paid, makePayment } = useContext(UserContext);

  const handleCardDetailsChange = (ev) => {
    ev.error ? setCheckoutError(ev.error.message) : setCheckoutError(null);
  };

  const handleFormSubmit = async () => {
  
    const billingDetails = {
      name: name,
      email: email,
      address: {
        postal_code: zip
      }
    };
    setProcessingTo(true);
    const cardElement = elements.getElement("card");

    try {      
      const { data: clientSecret } = await axios.post('https://us-central1-pbj-pickup-backend.cloudfunctions.net/stripeCharge', {
        amount: 15000, receipt_email: 'test@email.com'
      })
      
      const paymentMethodReq = await stripe.createPaymentMethod({
        type: "card",
        card: cardElement,
        billing_details: billingDetails
      })

      if (paymentMethodReq.error) {
        setCheckoutError(paymentMethodReq.error.message);
        setProcessingTo(false);
        return;
      }

      const { error } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: paymentMethodReq.paymentMethod.id
      });

      if (error) {
        setCheckoutError(error.message);
        setProcessingTo(false);
        return;
      }
      
      if (!error){
        setProcessingTo(false);
        handlePayment();
        console.log('Success!!');
        toggle()  

      }

    } catch (error) {
      setCheckoutError(error.message);
      return;
    }
  };

  const cardElementOpts = {
    style: {
      base: {
        color: "#383e56",
        fontSize: "18px",
        fontFamily: "Helvetica Neue",
        iconColor: "#383e56",
        "::placeholder": {
          color: "#383e56",
        }
      },
      invalid: {
        iconColor: "#772510",
        color: "#772510"
      },
      complete: {
        iconColor: "#cbf4c9"
      }},
    hidePostalCode: true
  };
 
  return (
    <>
      <Modal isOpen={isOpen} onClose={toggle} size='xl'>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Join OnePager Alpha</ModalHeader>
          <ModalCloseButton />

          <ModalBody>
            <Box w='90%'>
              <FormControl>
                <FormLabel htmlFor="name">Full Name</FormLabel>
                <Input type="text" id="name" onChange={(e) => setName(e.target.value)} />
                <FormLabel htmlFor="email">Email address</FormLabel>
                <Input type="email" id="email" onChange={(e) => setEmail(e.target.value)} />
                <FormLabel htmlFor="zip">Zip Code</FormLabel>
                <Input type="text" id="zip" onChange={(e) => setZip(e.target.value)}/>
              </FormControl>
            </Box>
          
            <FormLabel mt='2'>Credit Card Information</FormLabel>
            <CardElement 
              options={cardElementOpts}
              onChange={handleCardDetailsChange}/>

            {checkoutError && <Alert status="error" mt='4'><AlertIcon />{checkoutError}</Alert>}
            
          </ModalBody>

          <ModalFooter>
            <Button variantColor='red' variant="outline" mr={3} onClick={toggle}>
              Close
            </Button>
            <Button variant="ghost" type="submit" isLoading={isProcessing} onClick={handleFormSubmit}>
              Pay
            </Button>       
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}  

export default PaymentModal