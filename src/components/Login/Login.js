import React from 'react'
import './login.css'
import toast from 'react-hot-toast'
import axios from 'axios'
import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../Auth/Auth'
const Login = () => {
    const [mobile,setMobile]=useState('');
    const [pin,setPin]=useState('');
    const [auth,setAuth]=useAuth()
    const navigate=useNavigate()
    const handleClick=async()=>{
        try {
            const res=await axios.post('http://localhost:5000/api/login',{mobile,pin})
            if(res && res.data.success){
                 toast.success(res.data.message)
                 setAuth({
                    ...auth,user:res.data.user,
                    token:res.data.token
                  })
                 navigate('/')
                 localStorage.setItem('auth',JSON.stringify(res.data))
            }
        } catch (error) {
            console.log(error)
        }
       
    }
  return (
    <div className='login'>
      <div className='loginDiv'>
      <h1>Signin to Your Account</h1>
      <input type='text' placeholer=' Mobile no*'value={mobile} onChange={(e)=>setMobile(e.target.value)}/>
      <input type='text' placeholer='Enter 6 digit pin' value={pin} onChange={(e)=>setPin(e.target.value)}/>
      
      <button onClick={handleClick}>Sign in</button>
      </div>
    </div>
  )
}

export default Login
