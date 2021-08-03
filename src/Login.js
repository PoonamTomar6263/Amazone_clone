import React ,{useState} from 'react'

import './Login.css'
//import { Link ,useHistory} from 'react-router-dom';
import {Link, useHistory} from 'react-router-dom';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';

function Login() {
    const [{ }, dispatch] = useStateValue();
    const history=useHistory();
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
const signIn=e=>{
    e.preventDefault();
auth.signInWithEmailAndPassword(email,password)
.then((auth)=>{
    console.log(auth);
    dispatch({
        type: 'SET_USER',
        user:auth.user.providerData[0]
   });
    if(auth){
        history.push('/')
    }
})
.catch(error=>alert(error.message))
}
const register=e=>{
    e.preventDefault();

    auth.createUserWithEmailAndPassword(email,password)
    .then((auth)=>{
        console.log(auth);
        if(auth){
            history.push('/')
        }
    })
    .catch(error=>alert(error.message))
}
    return (
        <div className="login">
           <Link to="./">
            <img className="loginLogo" src="https://pngimg.com/uploads/amazon/amazon_PNG25.png"/>
            </Link>
            <level>Email</level>
            <input type="text" value={email} onChange={e=>setEmail(e.target.value)}></input>
            <level>Password</level>
            <input type="password" value={password} onChange={e=>setPassword(e.target.value)}></input>
            <button className="signIn" onClick={signIn} >Sign-In</button>
            <button  className="register" onClick={register}>Create Account</button>
        </div>
    )
}

export default Login
