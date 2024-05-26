import React from 'react';
import logo from "./logo.jpg";
import { Link } from "react-router-dom";
import profile from "./profile.png";
import { useState } from 'react';
import tacos from "./tacos.jpg";

const Tacos = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    event.preventDefault();
  };

  const scrollToMiddle = () => {
    window.scrollTo({
      top: document.body.scrollHeight / 8,
      behavior: "smooth",
    });
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const NavLink = ({ href, text, onClick }) => (
    <a href={href} onClick={onClick} className='hover:text-red-300'>{text}</a>
  );

  const scrolltoMiddle = () => {
    window.scrollTo({
      top: document.body.scrollHeight / 3,
      behavior: "smooth",
    });
  };

  return (
    <div className='bg-white'>
      <nav className='bg-white flex w-full h-20 shadow-lg shadow-gray-300 fixed top-0 z-10 mb-4'>
        <img src={logo} className='rounded-full w-13 h-12 mt-3 ml-2' alt="Logo" />
        <h1 className='text-left py-5 pl-3 font-bold text-xl text-red-500'>BiteBliss</h1>
        <div className='flex gap-8 py-5 pr-5 font-bold text-red-500 text-lg ml-auto'>
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleChange}
              className="mr-4 px-2 mt-1 border border-gray-400 rounded text-black"
            />
          </form>
          <NavLink onClick={scrollToMiddle} text='About Us' />
          <NavLink onClick={scrolltoMiddle} text='Recipes' />
          <h2>
            <Link to="/login">
              <img src={profile} className='w-14 h-14 mt-[-10px]' alt="Profile" />
            </Link>
          </h2>
        </div>
      </nav>
      <div className='text-center px-6'>
        <div className='mt-20 p-5 text-5xl font-bold px-0'>Tacos</div>
        <div className=' container max-w-md  border-white mx-auto text-left'>These savory avocado tacos are quick and easy.</div>
       
    <div className="container max-w-md py-4 text-center mx-auto">
  <img src={tacos} className='w-full h-auto mb-8' alt="Pav Bhaji" />
  <div className="border border-red-500 border-t-8 border-solid p-3 grid grid-cols-5 gap-6 rounded"> 
    <div className="col-span-1 ">
      <div className='font-bold'>Prep Time:</div>
      <div>20 mins</div>
    </div>
    <div className="col-span-1">
      <div className='font-bold'>Cook Time:</div>
      <div>5 mins</div>
    </div>
    <div className="col-span-1">
      <div className='font-bold'>Total Time:</div>
      <div>25 mins</div>
    </div>
    <div className="col-span-1">
      <div className='font-bold'>Servings: </div>
      <div>6</div>
    </div>
    <div className="col-span-1">
      <div className='font-bold'>Yield: </div>
      <div>6 servings</div>
    </div>
  </div>
</div>
<div className="max-w-md mx-auto py-4">
      <ul className="list-disc list-inside">
        <li className='flex items center text-4xl font-bold'>
            <span className='text-white mr-[-14px] mb-4'>&#8226;</span>
            Ingredients
        </li>
        <li className="flex items-center">
          <span className="text-red-500 mr-2 mb-3">&#8226;</span>
          3 avocados - peeled, pitted, and mashed
        </li>
        <li className="flex items-center">
          <span className="text-red-500 mr-2 mb-3">&#8226;</span>
          ¼ cup onions, diced
        </li>
        <li className="flex items-center">
          <span className="text-red-500 mr-2 mb-3">&#8226;</span>
          ¼ teaspoon garlic salt
        </li>
        <li className="flex items-center">
          <span className="text-red-500 mr-2 mb-3">&#8226;</span>
          12 (6 inch) corn tortillas
        </li>
        <li className="flex items-center">
          <span className="text-red-500 mr-2 mb-3">&#8226;</span>
          1 bunch fresh cilantro leaves, finely chopped
        </li>
        <li className="flex items-center">
          <span className="text-red-500 mr-2 mb-3">&#8226;</span>
          jalapeno pepper sauce, to taste
        </li>
       
      </ul>
    </div>
    <div className='container max-w-md text-left border-white mx-auto'>
    <div className='text-4xl font-bold mb-3 '>Directions</div>
    <div className='text-medium font-bold '>Step 1</div>
    <div>Preheat the oven to 325 degrees F (165 degrees C).
</div>
<div className='text-medium font-bold mt-4'>Step 2</div>
<div>Mix avocados, onions, and garlic salt in a medium bowl; set aside.
</div>
<div className='text-medium font-bold mt-4'>Step 3</div>
<div>Arrange corn tortillas in a single layer on a large baking sheet.</div>
<div className='text-medium font-bold mt-4'>Step 4</div>
<div>Bake tortillas in the preheated oven until heated through, 2 to 5 minutes.</div>

<div className='text-medium font-bold mt-4'>Step 5</div>
<div>Spread tortillas with avocado mixture. Garnish with cilantro and sprinkle with jalapeño pepper sauce.</div></div>
    </div>
    </div>
  )
}

export default Tacos;
