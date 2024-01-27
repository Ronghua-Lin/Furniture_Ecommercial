import React, { useState } from 'react';

export const ContextAPI=React.createContext()
const defaultImage =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHfd3PPulVSp4ZbuBFNkePoUR_fLJQe474Ag&usqp=CAU";

const ContextProvider = ({ children }) => {
  const [profile, setProfile] = useState({
    image:defaultImage,
    title:"Luxury Furniture",
    role:"Interior designer",
    location:"New York, New York",
    likes:[]
  });

  const [cart,setCart]=useState([])

 

  return (
    <ContextAPI.Provider value={{ profile, setProfile,cart,setCart }}>
      {children}
    </ContextAPI.Provider>
  );
};

export default ContextProvider;
