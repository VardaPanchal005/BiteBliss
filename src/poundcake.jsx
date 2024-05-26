import React from 'react';
import logo from "./logo.jpg";
import { Link } from "react-router-dom";
import profile from "./profile.png";
import { useState } from 'react';
import poundcake from "./cake.jpg";

const Poundcake = () => {
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
        <div className='mt-20 p-5 text-5xl font-bold px-0'>Sour Cream Pound Cake</div>
        <div className=' container max-w-md  border-white mx-auto text-left'>This sour cream pound cake is always a hit! Sour cream keeps it moist and vanilla adds a lovely flavor. Great for brunch or dust with confectioners sugar and serve with berries for dessert.</div>
       
    <div className="container max-w-md py-4 text-center mx-auto">
  <img src={poundcake} className='w-full h-auto mb-8' alt="Pav Bhaji" />
  <div className="border border-red-500 border-t-8 border-solid p-3 grid grid-cols-5 gap-6 rounded"> 
    <div className="col-span-1 ">
      <div className='font-bold'>Prep Time:</div>
      <div>20 mins</div>
    </div>
    <div className="col-span-1">
      <div className='font-bold'>Cook Time:</div>
      <div>1 hr 20 mins</div>
    </div>
    <div className="col-span-1">
      <div className='font-bold'>Total Time:</div>
      <div>2 hrs 40 mins</div>
    </div>
    <div className="col-span-1">
      <div className='font-bold'>Servings: </div>
      <div>14</div>
    </div>
    <div className="col-span-1">
      <div className='font-bold'>Yield: </div>
      <div>1 (10-inch) e</div>
    </div>
  </div>
</div>
<div className="max-w-md mx-auto py-3">
      <ul className="list-disc list-inside">
        <li className='flex items center text-4xl font-bold'>
            <span className='text-white mr-[-14px] mb-3'>&#8226;</span>
            Ingredients
        </li>
        <li className="flex items-center">
          <span className="text-red-500 mr-2 mb-3">&#8226;</span>
          3 cups all-purpose flour
        </li>
        <li className="flex items-center">
          <span className="text-red-500 mr-2 mb-3">&#8226;</span>
          1/2 teaspoon salt
        </li>
        <li className="flex items-center">
          <span className="text-red-500 mr-2 mb-3">&#8226;</span>
          1/4 teaspoon baking soda
        </li>
        <li className="flex items-center">
          <span className="text-red-500 mr-2 mb-3">&#8226;</span>
          3 cups white sugar
        </li>
        <li className="flex items-center">
          <span className="text-red-500 mr-2 mb-3">&#8226;</span>
          1 cup unsalted butter, softened
        </li>
        <li className="flex items-center">
          <span className="text-red-500 mr-2 mb-3">&#8226;</span>
          6 large eggs
        </li>
        <li className="flex items-center">
          <span className="text-red-500 mr-2 mb-3">&#8226;</span>
          1 tablespoon vanilla extract
        </li>
          <li className="flex items-center">
          <span className="text-red-500 mr-2 mb-3">&#8226;</span>
          1/8 teaspoon ground mace or 1/4 teaspoon ground nutmeg
          </li>
        <li className="flex items-center">
          <span className="text-red-500 mr-2 mb-3">&#8226;</span>
          1 cup sour cream
        </li>
        <li className="flex items-center">
          <span className="text-red-500 mr-2 mb-3">&#8226;</span>
          confectioners' sugar, or as needed
        </li>
      </ul>
    </div>
    <div className='container max-w-md text-left border-white mx-auto'>
    <div className='text-4xl font-bold mb-3 '>Directions</div>
    <div className='text-medium font-bold '>Step 1</div>
    <div>Gather all ingredients. Preheat the oven to 350 degrees F (175 degrees C). Grease and flour a 10-inch fluted tube pan (such as Bundt or angel food cake pan).
</div>
<div className='text-medium font-bold mt-4'>Step 2</div>
<div>Mix flour, salt, baking soda, and mace in a bowl; set aside.
</div>
<div className='text-medium font-bold mt-4'>Step 3</div>
<div>Beat sugar and butter with an electric mixer in a large bowl until light and fluffy, about 5 minutes.</div>
<div className='text-medium font-bold mt-4'>Step 4</div>
<div>Add eggs, one at a time, beating well after each addition. Beat in vanilla.</div>
<div className='text-medium font-bold mt-4'>Step 5</div>
<div>Add flour mixture to wet ingredients alternately with sour cream, mixing until just incorporated.</div>

<div className='text-medium font-bold mt-4'>Step 6</div>
<div>Pour batter into the prepared pan; use the back of a spoon to smooth out the surface of the batter.</div>
<div className='text-medium font-bold mt-4'>Step 7</div>
<div>Bake in the preheated oven until a toothpick inserted in the center comes out clean, about 1 hour and 25 minutes. Run a thin knife or offset spatula around the edge of cake. Cool in the pan on a wire rack for 20 minutes, then invert onto a wire rack and cool completely.</div>
<div><div className='text-medium font-bold mt-4 '>Step 8</div>
<div className='mb-4'>Dust with confectioners' sugar before serving.</div>
</div>
    </div></div>
    </div>
  )
}

export default Poundcake;
