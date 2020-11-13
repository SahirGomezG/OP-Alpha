import { useState, useEffect } from "react";
import Home from '../components/Home';
import Cookie from "js-cookie";
import { parseCookies } from "../lib/parseCookies";


const Index = ({ initialCookieValue }) => {
  const [rememberMe, setRememberMe] = useState(() =>
    JSON.parse(initialCookieValue || false) 
  );

  useEffect(() => {
    Cookie.set("rememberMe", JSON.stringify(rememberMe));
  }, [rememberMe]);

  const handlePayment = () => {
    setRememberMe(true)
  }
  const handleUnsubscribe = () => {
    setRememberMe(false)
  }
  return (
    <Home paid={rememberMe} handlePayment={handlePayment} handleUnsubscribe={handleUnsubscribe}/>
  );
};

Index.getInitialProps = ({ req }) => {
  const cookies = parseCookies(req);
  return { initialCookieValue: cookies.rememberMe }
};

export default Index;