import React, { createContext, useEffect, useState } from "react";
import { auth } from "../components/auth/firebase.init";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";

export const UserContext = createContext();
const AuthContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);

    const handleSignUp = (email, password) =>{
      setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const handleLogin = (email, password) =>{
      setLoader(true)
       return signInWithEmailAndPassword(auth, email, password);
    }

    useEffect(()=>{
      const unsubcribe = onAuthStateChanged(auth, (currentUser)=>{
        if(currentUser){
          setUser(currentUser);
          setLoader(false)
        }else{
          setUser(null)
          setLoader(true)
        }
      });
      return ()=> {
        unsubcribe()
      }
    },[])

  const userInfo = {
    handleSignUp,
    handleLogin,
    user,
    loader,
  };
  return (
    <UserContext.Provider value={userInfo}>{children}</UserContext.Provider>
  );
};

export default AuthContext;
