import React from 'react';
import Router from 'next/router';
import { parseCookies } from "../lib/parseCookies";

const checkUserAuthentication = (context) => {
  const cookies = parseCookies(context.req);
  const userAuth = cookies.rememberMe;
  let auth = false
  if (userAuth === 'true'){
    auth = true
  } else {
    auth = false
  }
  return { auth: auth }; 
};

export default WrappedComponent => {
  const hocComponent = ({ ...props }) => <WrappedComponent {...props} />;

  hocComponent.getInitialProps = async ( context) => {
    const userAuth = await checkUserAuthentication(context);
    console.log(userAuth)
    //const userAuth = await parseCookies(context.req).rememberMe;
    
    // Authorized?
    if (!userAuth?.auth) {
      // Handle server-side and client-side rendering.
      if (context.res) {
        context.res?.writeHead(302, {
          Location: '/',
        });
        context.res?.end();
      } else {
        Router.replace('/');
      }
    } else if (WrappedComponent.getInitialProps) {
      const wrappedProps = await WrappedComponent.getInitialProps({...context, auth: userAuth});
      return { ...wrappedProps, userAuth };
    }

    return { userAuth };
  };

  return hocComponent;
};
