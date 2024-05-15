import React from 'react';
import food from "./food.jpg"

const Login = () => {
  return (
    <div class="flex justify-center items-center h-screen relative">
    <img src={food} class="absolute inset-0 w-full h-full object-cover opacity-60" />
    <div class="border w-1/2 border-orange-400 rounded relative z-10 bg-white">
      <b class="text-xl">Log in</b><br/>Log in to save and review your favorite recipes.<br/>
      Don't have an account? Join now
    </div>
  </div>
  

  )
}

export default Login;