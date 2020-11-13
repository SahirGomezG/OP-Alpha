/*import Home from '../components/Home';

export default function Index() {
  return <Home />;
}*/
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
    <>
    <Home paid={rememberMe} handlePayment={handlePayment} handleUnsubscribe={handleUnsubscribe}/>
    <div>
      remember me
      <input
        type="checkbox"
        value={rememberMe}
        checked={rememberMe}
        onChange={e => setRememberMe(e.target.checked)}
      />
    </div>
    </>
  );
};

Index.getInitialProps = ({ req }) => {
  const cookies = parseCookies(req);
  return { initialCookieValue: cookies.rememberMe }
};

export default Index;