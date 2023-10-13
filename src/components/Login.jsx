import {Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, loginWithEmailAndPassword } from "../auth/firebase";
import { useEffect } from "react";
import { Button, Card} from "react-bootstrap";

const Login = () => {
    const [email, setEmail]= useState('');
    const [password, setPassword]= useState('');
    const [user, loading]= useAuthState(auth);
    const navigate = useNavigate();

    useEffect(()=>{
        if(loading) return
        if (user) navigate('/countries')
    },[user,loading,navigate])
    
    return (
        <div style={{display:'flex', justifyContent:'center', alignItems:'center', height:'100vh'}}>
            <Card style={{height:'auto', width:'35rem', alignItems:'center',  padding:'2rem',gap:'2rem' }}>            
            <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="user"  style={{height:'10rem', width:'10rem'}}/>           
            <input
             type="email" 
             value={email}
             onChange={(e)=>setEmail(e.target.value)}
             placeholder="Email"

             style={{width:'20rem'}}
             />
            <input
             type="password" 
             value={password}
             onChange={(e)=>setPassword(e.target.value)}
             placeholder="Password"

             style={{width:'20rem'}}
             />
             <Button onClick={()=> loginWithEmailAndPassword(email, password)} style={{width:'20rem'}}>Login</Button>
             <div>
                Don't have an account?
                <Link to="/register">Register</Link>
            </div>
            </Card>
        </div>
        
    );
};

export default Login;