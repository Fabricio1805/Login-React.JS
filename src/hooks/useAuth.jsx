import { AuthContext } from '../contexts/auth';
import { useContext } from 'react';

const UseAuth = () =>{
    const context = useContext(AuthContext)

    return context
}

export default UseAuth;