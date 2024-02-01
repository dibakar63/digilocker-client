import React from 'react'
import { SiSimpleicons } from "react-icons/si";
import './navbar.css'
import { useAuth } from '@clerk/nextjs';
import { useState } from 'react';
const Navbar = () => {
  const [auth,setAuth]=useState()
  console.log(auth.user.name)
  return (
    <div className='navbar'>
    {!auth.user ?(<>
    <SiSimpleicons/>
    <span style={{paddingBottom:"6px",cursor:"pointer"}}>Legacies Locker</span> </>):(<>
        <SiSimpleicons/>
    <span style={{paddingBottom:"6px",cursor:"pointer"}}>Legacies Locker</span> <span>{auth.user.name}</span>  
    </>)
    }
      
    </div>
  )
}

export default Navbar
