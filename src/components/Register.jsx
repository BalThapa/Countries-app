import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, registerWithEmailAndPassword } from "../auth/firebase";
import { useEffect } from "react";
import { Button, Card } from "react-bootstrap";


const Register = ()=>{
    const [email, setEmail]= useState('');
    const [password, setPassword]= useState('');
    const [rePassword, setRePassword]= useState('');
    const [name, setName]= useState('');
    const [user, loading]= useAuthState(auth);
    const navigate = useNavigate();

    const register = () => {
        if(!name){ 
            alert ("Please enter name")
            return;
        }
        if(password !== rePassword){
            alert ("Passwords do not match")
            return;
        }
        registerWithEmailAndPassword(name, email, password)
    }


    useEffect(()=>{
        if(loading) return
        if (user) navigate('/countries')
    },[user,loading,navigate])
    
    return (
        <div style={{display:'flex', justifyContent:'center', alignItems:'center', height:'100vh'}}>
            <Card style={{height:'auto', width:'auto', alignItems:'center',  padding:'2rem',gap:'2rem', boxShadow:'0 0 10px rgba(0, 0, 0, 0.2)' }}>
                <div>
                    <h1>Sign up</h1>
                    <p>It's quick and easy.</p>
                </div>
            <input
             type="text" 
             value={name}
             onChange={(e)=>setName(e.target.value)}
             placeholder="Full Name"
             style={{width:'20rem'}}
             />
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
             placeholder="New Password"
             style={{width:'20rem'}}
             />

            <input
             type="password" 
             value={rePassword}
             onChange={(e)=>setRePassword(e.target.value)}
             placeholder="Re-enter Password"
             style={{width:'20rem'}}
             />

            <Button onClick={register} style={{width:'20rem'}}>Register</Button>
            <div>
                Already have an account?
                <Link to="/login">Login</Link>
            </div>
            </Card>
        </div>
    )
}

export default Register;