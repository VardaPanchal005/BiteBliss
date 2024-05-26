import React from 'react';
import logo from "./logo.jpg";
import { Link } from "react-router-dom";
import profile from "./profile.png";
import { useState } from 'react';
import onigiri from "./onigiri.jpg";

const Onigiri = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    event.preventDefault();
  };



  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const NavLink = ({ href, text, onClick }) => (
    <a href={href} onClick={onClick} className='hover:text-red-300'>{text}</a>
  );

 

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
          <NavLink  text='About Us' />
          <NavLink text='Recipes' />
          <h2>
            <Link to="/login">
              <img src={profile} className='w-14 h-14 mt-[-10px]' alt="Profile" />
            </Link>
          </h2>
        </div>
      </nav>
      <div className='text-center px-6'>
        <div className='mt-20 p-5 text-5xl font-bold px-0'>Onigiri (Japanese Rice Balls)</div>
        <div className=' container max-w-md  border-white mx-auto text-left'>This easy onigiri recipe is also fun to make! These rice balls are a staple of Japanese lunchboxes (bento). You can put almost anything in these rice balls; try substituting grilled salmon, pickled plums, beef, pork, turkey, or tuna with mayonnaise.</div>
       
    <div className="container max-w-md py-4 text-center mx-auto">
  <img src={onigiri} className='w-full h-auto mb-8' alt="Pav Bhaji" />
  <div className="border border-red-500 border-t-8 border-solid p-3 grid grid-cols-5 gap-6 rounded"> 
    <div className="col-span-1 ">
      <div className='font-bold'>Prep Time:</div>
      <div>20 mins</div>
    </div>
    <div className="col-span-1">
      <div className='font-bold'>Cook Time:</div>
      <div> 20 mins</div>
    </div>
    <div className="col-span-1">
      <div className='font-bold'>Total Time:</div>
      <div>1 hrs</div>
    </div>
    <div className="col-span-1">
      <div className='font-bold'>Servings: </div>
      <div>4</div>
    </div>
    <div className="col-span-1">
      <div className='font-bold'>Yield: </div>
      <div>8 onigiri</div>
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
          4 cups uncooked short-grain white rice
        </li>
        <li className="flex items-center">
          <span className="text-red-500 mr-2 mb-3">&#8226;</span>
          5 ½ cups water, divided
        </li>
        <li className="flex items-center">
          <span className="text-red-500 mr-2 mb-3">&#8226;</span>
          ¼ teaspoon salt
        </li>
        <li className="flex items-center">
          <span className="text-red-500 mr-2 mb-3">&#8226;</span>
          ¼ cup bonito shavings (dry fish flakes)
        </li>
        <li className="flex items-center">
          <span className="text-red-500 mr-2 mb-3">&#8226;</span>
          2 sheets nori (dry seaweed), cut into 1/2-inch strips
        </li>
        <li className="flex items-center">
          <span className="text-red-500 mr-2 mb-3">&#8226;</span>
          2 tablespoons sesame seeds
        </li>
        
      </ul>
    </div>
    <div className='container max-w-md text-left border-white mx-auto'>
    <div className='text-4xl font-bold mb-3 '>Directions</div>
    <div className='text-medium font-bold '>Step 1</div>
    <div>Wash rice in a mesh strainer until water runs clear. Combine washed rice and 4 1/2 cups water in a saucepan. Bring to a boil over high heat, stirring occasionally. Reduce heat to low; cover, and simmer rice until water is absorbed, 15 to 20 minutes. Let rice rest for 15 minutes to continue to steam and become tender. Allow cooked rice to cool.
</div>
<div className='text-medium font-bold mt-4'>Step 2</div>
<div>Combine remaining 1 cup water with salt in a small bowl; use to dampen hands before handling rice. Divide cooked rice into 8 equal portions. Use one portion of rice for each onigiri.
</div>
<div className='text-medium font-bold mt-4'>Step 3</div>
<div>Divide one portion of rice in two. Create a dimple in rice and fill with a heaping teaspoon of bonito flakes. Cover with remaining portion of rice and press lightly to enclose filling inside rice ball. Gently press rice to shape into a triangle; wrap with a strip of nori and sprinkle with sesame seeds. Repeat with remaining portions of rice.</div>

    </div></div>
    </div>
  )
}

export default Onigiri;
