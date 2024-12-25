import React, { useContext } from 'react';
import { UserContext } from '../context/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRoute = ({children}) => {
    const {user, loader} = useContext(UserContext);
    const location = useLocation()
    if(loader){
        return <>
        <div className='w-full min-h-screen flex justify-center items-center'>
        <span className="loading loading-spinner loading-lg"></span>
        </div>
        </>
    }
    if(user){
        return children;
    }
    return <Navigate state={location.pathname} to="/signIn"></Navigate>
};

export default PrivetRoute;