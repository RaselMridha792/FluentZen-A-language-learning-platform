import React, { useContext } from 'react';
import { UserContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const PrivetRoute = ({children}) => {
    const {user, loader} = useContext(UserContext);
    const navigate = useNavigate()
    if(loader){
        return <>
        <h1>page Loading</h1>
        </>
    }
    if(user){
        return children
    }
    return navigate('/signIn')
};

export default PrivetRoute;