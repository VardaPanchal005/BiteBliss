import React from 'react';
import logo from "./logo.jpg";
import { Link } from "react-router-dom";
import profile from "./profile.png";
import { useState } from 'react';
import pavbhaji from "./pav-bhaji.jpg";

const Pavbhaji = () => {
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
        <div className='mt-20 p-5 text-5xl font-bold px-0'>Pav Bhaji</div>
        <div className=' container max-w-md  border-white mx-auto text-left'>I made this after trying different methods over a few years.It all came together so well. The flavor and texture were amazing. You really need to add water at the end and not be scared that it will ruin the dish, it will not! You need a fairly runny consistency for the best pav bhaji. Garnish with fresh chopped tomatoes, onions, and fresh cilantro if desired. Serve with toasted white bread or bread rolls.</div>
       
    <div className="container max-w-md py-4 text-center mx-auto">
  <img src={pavbhaji} className='w-full h-auto mb-8' alt="Pav Bhaji" />
  <div className="border border-red-500 border-t-8 border-solid p-3 grid grid-cols-5 gap-6 rounded"> 
    <div className="col-span-1 ">
      <div className='font-bold'>Prep Time:</div>
      <div>15 mins</div>
    </div>
    <div className="col-span-1">
      <div className='font-bold'>Cook Time:</div>
      <div>50 mins</div>
    </div>
    <div className="col-span-1">
      <div className='font-bold'>Total Time:</div>
      <div>1 hr 5 mins</div>
    </div>
    <div className="col-span-1">
      <div className='font-bold'>Servings: </div>
      <div>4</div>
    </div>
    <div className="col-span-1">
      <div className='font-bold'>Yield: </div>
      <div>4 servings</div>
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
          2 tablespoons oil, divided
        </li>
        <li className="flex items-center">
          <span className="text-red-500 mr-2 mb-3">&#8226;</span>
          1 large onion, grated
        </li>
        <li className="flex items-center">
          <span className="text-red-500 mr-2 mb-3">&#8226;</span>
          ¾ teaspoon salt, or as needed
        </li>
        <li className="flex items-center">
          <span className="text-red-500 mr-2 mb-3">&#8226;</span>
          5 cloves garlic, grated
        </li>
        <li className="flex items-center">
          <span className="text-red-500 mr-2 mb-3">&#8226;</span>
          1 ¼ cups water, or more as needed
        </li>
        <li className="flex items-center">
          <span className="text-red-500 mr-2 mb-3">&#8226;</span>
          2 teaspoons pav bhaji masala, divided
        </li>
        <li className="flex items-center">
          <span className="text-red-500 mr-2 mb-3">&#8226;</span>
          1 (14.5 ounce) can diced tomatoes
        </li>
        <li className="flex items-center">
          <span className="text-red-500 mr-2 mb-3">&#8226;</span>
          2 small potatoes, peeled and cut into small cubes
        </li>
        <li className="flex items-center">
          <span className="text-red-500 mr-2 mb-3">&#8226;</span>
          3 tablespoons canned sweet corn, drained
        </li>
        <li className="flex items-center">
          <span className="text-red-500 mr-2 mb-3">&#8226;</span>
          1 teaspoon mild chile powder
        </li>
        <li className="flex items-center">
          <span className="text-red-500 mr-2 mb-3">&#8226;</span>
          1 teaspoon ground coriander
        </li>
        <li className="flex items-center">
          <span className="text-red-500 mr-2 mb-3">&#8226;</span>
          1 pinch ground ginger
        </li>
        <li className="flex items-center">
          <span className="text-red-500 mr-2 mb-3">&#8226;</span>
          ½ teaspoon lemon juice
        </li>
        <li className="flex items-center">
          <span className="text-red-500 mr-2">&#8226;</span>
          1 tablespoon unsalted butter, or more to taste
        </li>
      </ul>
    </div>
    <div className='container max-w-md text-left border-white mx-auto'>
    <div className='text-4xl font-bold mb-3 '>Directions</div>
    <div className='text-medium font-bold '>Step 1</div>
    <div>Heat 1 tablespoon oil in a saucepan over medium heat. Add onion and 1/4 teaspoon salt; fry until browned, 5 to 8 minutes. Add garlic; cook and stir for 4 minutes. Pour in 1 cup water. Add 1 teaspoon pav bhaji masala and 1/2 teaspoon salt. Bring to a boil. Reduce heat and simmer until flavors combine, about 10 minutes.
</div>
<div className='text-medium font-bold mt-4'>Step 2</div>
<div>Add tomatoes, potatoes, and corn to the saucepan. Season with chile powder, coriander, and ginger. Bring to a boil. Reduce heat and simmer for 15 minutes. Mash curry gently with the back of a wooden spoon or spatula. Simmer for 10 minutes more. Taste and adjust salt. Add 1/2 teaspoon pav bhaji masala and lemon juice. Mash slightly again.
</div>
<div className='text-medium font-bold mt-4'>Step 3</div>
<div>Add 1/4 to 1/2 cup water to give curry a runny consistency. Add remaining 1 tablespoon oil and butter; stir until butter is melted. Divide into serving bowls and sprinkle remaining pav bhaji masala on top.</div>
</div>
      </div>
    </div>
  )
}

export default Pavbhaji;
