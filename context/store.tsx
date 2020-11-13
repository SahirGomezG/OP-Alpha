import React, { useEffect, useState } from 'react';
import Cookie from "js-cookie";


type ContextType = {
  paid: boolean;
  makePayment: () => void;
}

const UserContext = React.createContext<ContextType>({ paid: false, makePayment:() => {} });

const UserContextProvider = (props) => {
    const [ paid, setPaid ] = useState(false);

    const makePayment = () => {
      setPaid(true)
    }
    return (
      <UserContext.Provider value={{ paid, makePayment }}>
        {props.children}
      </UserContext.Provider>
    )
}

export { UserContext, UserContextProvider };