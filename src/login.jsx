import React from 'react';
import food from "./food.jpg";
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username,setusername]=useState('');
    const [password,setpassword]=useState('');
    const navigate = useNavigate();

    const handleChange = () => {
       navigate('/'); };
    
    const handlechange=() => {
       navigate('/register'); };
       
  return (
    <div class="flex justify-center items-center h-screen relative">
    <img src={food} class="absolute inset-0 w-full h-full object-cover opacity-60" />
    <div class="border w-1/2 border-red-500 rounded relative z-10 bg-white p-3">
      <b class="text-2xl">Log in</b><br/>Log in to save and review your favorite recipes.<br/>
      <div className="flex flex-col items-center justify-center ">
      <div className="flex flex-col items-start w-80">
        <p className='text-base font-bold mb-2'>Username</p>
        <input
          type="text" 
          value={username}
          onChange={(e) => setusername(e.target.value)}
          className='border border-gray-500 rounded px-2 py-1 w-full'
          placeholder='username' required
        />
        <p className='text-base font-bold mt-4 mb-2'>Password</p>
        <input
          type="password" 
          value={password}
          onChange={(e) => setpassword(e.target.value)}
          className='border border-gray-500 rounded px-2 py-1 w-full'
          placeholder='Enter your password' required
        />
        <button
          className='bg-red-500 text-white rounded py-1 mt-4 text-base w-full mb-2'
          onClick={handleChange}
        >
          Log in
        </button>
      </div>
    </div>
      <p>Don't have an account? <button onClick={handlechange} className='hover:text-red-500'>Join now</button></p>
    </div>
  </div>
  

  )
}

export default Login;