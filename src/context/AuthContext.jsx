import React, { createContext, useEffect, useState } from "react";
import { auth } from "../components/auth/firebase.init";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import axios from "axios";
export const UserContext = createContext();
const AuthContext = ({ children }) => {
  const provider = new GoogleAuthProvider();
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);

  const handleSignUp = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const handleLogin = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const handleSignInGoogle = () => {
    return signInWithPopup(auth, provider);
  };

  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);

        // for authorization with jwt
        if (currentUser?.email) {
          const user = { email: currentUser.email };
          axios
            .post("https://assignment-11-server-side-sandy.vercel.app/jwt", user, {
              withCredentials: true,
            })
            .then((res) => {
              console.log("login token",res.data);
              setLoader(false);

            });
        }
      } else {
        axios.post(
          "https://assignment-11-server-side-sandy.vercel.app/logout",
          {},
          {
            withCredentials: true,
          }
        )
        .then(res=> {
          console.log('logout', res.data);
          setLoader(false);
        })
        setUser(null);
 
      }
    });
    return () => {
      unsubcribe();
    };
  }, []);

  const handleUpdateProfile = (updatedData) => {
    return updateProfile(auth.currentUser, updatedData);
  };

  const userInfo = {
    handleSignUp,
    handleLogin,
    user,
    loader,
    handleUpdateProfile,
    handleSignInGoogle,
  };
  return (
    <UserContext.Provider value={userInfo}>{children}</UserContext.Provider>
  );
};

export default AuthContext;
