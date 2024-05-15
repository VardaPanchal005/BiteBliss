import React from 'react';
import { useState } from 'react';
import pancake from "./pancake.jpg";
import pasta from "./pasta.jpg";
import jalebi from "./jalebi.jpg";
import biryani from "./biryani.jpg";
import dosa from "./dosa.jpg";
import arrow from "./arrow.svg";
import pavbhaji from "./pav-bhaji.jpg";
import lasangna from "./lasagna.jpg";
import cake from "./cake.jpg";
import onigiri from "./onigiri.jpg";
import tacos from "./tacos.jpg"
import pie from "./pie.jpg";
import sauce from "./sauce.jpg";
import salad from "./salad.jpg";
import cake2 from "./cake2.jpg";
import salad2 from "./salad2.jpg";
import noodles from "./noodles.jpg";
import coffee from "./coffee.jpg";
import logo from "./logo.jpg";
import profile from "./profile.png";
import {Link} from "react-router-dom";
const Practice = () => {
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

  const scrollToMiddle = () => {
    window.scrollTo({
      top: document.body.scrollHeight / 8,
      behavior: "smooth",
    });
  };

  const scrolltoMiddle = () => {
    window.scrollTo({
      top: document.body.scrollHeight / 3,
      behavior: "smooth",
    });
  };

  return (
    <div className='bg-white'>
      <nav className='bg-white flex w-full h-20 shadow-lg shadow-gray-300 fixed top-0 z-10'>
        <img src={logo} className='rounded-full w-13 h-12 mt-3 ml-2' />
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
      <img src={profile} className='w-14 h-14 mt-[-10px]' alt="Profile Image" />
    </Link>
  </h2> 
        </div>
      </nav><br /><br /><br /><br />
      <div className='flex justify-center'>
        <img src={biryani} alt="Biryani" className="w-64 h-64 object-cover m-2 rounded" />
        <img src={pasta} alt="Pasta" className="w-64 h-64 object-cover m-2 rounded" />
        <img src={pancake} alt="Pancake" className="w-64 h-64 object-cover m-2 rounded" />
        <img src={dosa} alt="Dosa" className="w-64 h-64 object-cover m-2 rounded" />
        <img src={jalebi} alt="Jalebi" className="w-44 h-64 object-cover m-2 rounded" />
      </div>
      <p className='font-bold text-3xl py-3'>About Us</p>
      <div className='flex gap-3 p-3 text-left '>
        <div className='flex-1 border border-gray-400 rounded px-3'>
          <p className='font-bold text-xl text-red-500 pt-2'>
            Who We Are
          </p>
          <p className='py-2'>
            Home cooks are our heroes—it's as simple as that. BiteBliss is a community built by and for kitchen experts: The cooks who will dedicate the weekend to a perfect beef bourguignon but love the simplicity of a slow-cooker rendition, too. Most importantly, BiteBliss connects home cooks with their greatest sources of inspiration — other home cooks. We're the world's leading digital food brand, and that inspires us to do everything possible to keep our community connected.
          </p>
        </div>
        <div className='flex-1 border border-gray-400 rounded px-3'>
          <p className='font-bold text-xl text-red-500 pt-2'>
            Our History
          </p>
          <p className='py-2'>
            Founded in 1997 as CookieRecipe.com, BiteBliss changed the food world by providing the tools to share recipes and cooking tips. Since then, BiteBliss has become the world's largest community-driven food brand, providing trusted resources to more than 60 million home cooks each month. The combination of the BiteBliss community with our team of editorial and kitchen professionals  and has turned the brand into an indispensable resource for cooks of all skill levels.
          </p>
        </div>
      </div>
      <br />
      <p className='font-bold text-xl'>Above all, we are:</p>
      <div className="flex justify-center">
        <ul className="list-disc text-left ">
          <li className="mb-2"><b className='text-red-500'>Friendly</b> - We love trading ideas and hanging out with fellow home cooks.</li>
          <li className="mb-2"><b className='text-red-500'>Supportive</b> - Struggling with dinner inspo? We’re here to help!</li>
          <li className="mb-2"><b className='text-red-500'>Creative</b> - Cooking is an art. We like to experiment and express ourselves.</li>
          <li className="mb-2"><b className='text-red-500'>Approachable</b> - We don't judge—all cooking levels and recipes are welcome.</li>
          <li className="mb-2"><b className='text-red-500'>Down-to-Earth</b> - We love good food, period. It doesn’t need to be fussy to be great.</li>
          <li className="mb-2"><b className='text-red-500'>Fun</b> - Like you, we enjoy friends, family, cooking, and having a good laugh.</li>
        </ul>
      </div>
      <div className='flex items-center justify-center'>
        <p className='text-xl font-bold p-4'>Trending Recipes</p>
        <img src={arrow} className='w-8 h-8' />
      </div>
      <div className='flex gap-3 p-3'>
        <div className='flex-1 border border-gray-400 rounded'>
          <div className='h-full flex flex-col'>
            <img src={pavbhaji} className='w-full h-full rounded object-cover' alt="pav bhaji" />
            <div className='flex-grow flex items-center font-bold p-2 text-xl text-red-500 justify-center'>Pav Bhaji</div>
          </div>
        </div>
        <div className='flex-1 border border-gray-400 rounded'>
          <div className='h-full flex flex-col'>
            <img src={tacos} className='w-full h-full rounded object-cover' alt="lasagna" />
            <div className='flex-grow flex items-center p-2 text-red-500 font-bold text-xl justify-center'>Tacos</div>
          </div>
        </div>
        <div className='flex-1 border border-gray-400 rounded'>
          <div className='h-full flex flex-col'>
            <img src={cake} className='w-full h-full rounded object-cover' alt="cake" />
            <div className='flex-grow flex items-center p-2 text-red-500 text-xl font-bold justify-center'>Pound Cake</div>
          </div>
        </div>
      </div>

      <div className='flex gap-3 p-2'>
        <div className='flex-1 border border-gray-400 rounded'>
          <div className='h-full flex flex-col'>
            <img src={onigiri} className='w-full h-full rounded object-cover' alt="pav bhaji" />
            <div className='flex-grow flex items-center p-2 text-red-500 font-bold text-xl  justify-center'>Onigiri</div>
          </div>
        </div>
        <div className='flex-1 border border-gray-400 rounded'>
          <div className='h-full flex flex-col'>
            <img src={pie} className='w-full h-full rounded object-cover' alt="lasagna" />
            <div className='flex-grow flex items-center p-2 text-red-500 font-bold text-xl  justify-center'>Apple pie</div>
          </div>
        </div>
        <div className='flex-1 border border-gray-400 rounded'>
          <div className='h-full flex flex-col'>
            <img src={lasangna} className='w-full h-full rounded object-cover' alt="cake" />
            <div className='flex-grow flex items-center p-2 text-red-500 font-bold text-xl  justify-center'>Brocht</div>
          </div>
        </div>
      </div>
      <div className='flex gap-3 p-2'>
        <div className='flex-1 border border-gray-400 rounded'>
          <div className='h-full flex flex-col'>
            <img src={sauce} className='w-full h-full rounded object-cover' alt="pav bhaji" />
            <div className='flex-grow flex items-center p-2 text-red-500 font-bold text-xl  justify-center'>Tzatziki sauce</div>
          </div>
        </div>
        <div className='flex-1 border border-gray-400 rounded'>
          <div className='h-full flex flex-col'>
            <img src={salad} className='w-full h-full rounded object-cover' alt="lasagna" />
            <div className='flex-grow flex items-center p-2 text-red-500 font-bold text-xl  justify-center'>Tteokbokki </div>
          </div>
        </div>
        <div className='flex-1 border border-gray-400 rounded'>
          <div className='h-full flex flex-col'>
            <img src={cake2} className='w-full h-full rounded object-cover' alt="cake" />
            <div className='flex-grow flex items-center p-2 text-red-500 font-bold text-xl  justify-center'>Pavlova</div>
          </div>
        </div>
      </div>
      <div className='flex gap-3 p-2'>
        <div className='flex-1 border border-gray-400 rounded'>
          <div className='h-full flex flex-col'>
            <img src={salad2} className='w-full h-full rounded object-cover' alt="pav bhaji" />
            <div className='flex-grow flex items-center p-2 text-red-500 font-bold text-xl  justify-center'>Ratatouille</div>
          </div>
        </div>
        <div className='flex-1 border border-gray-400 rounded'>
          <div className='h-full flex flex-col'>
            <img src={noodles} className='w-full h-full rounded object-cover' alt="lasagna" />
            <div className='flex-grow flex items-center p-2 text-red-500 font-bold text-xl  justify-center'>Pho</div>
          </div>
        </div>
        <div className='flex-1 border border-gray-400 rounded'>
          <div className='h-full flex flex-col'>
            <img src={coffee} className='w-full h-full rounded object-cover' alt="cake" />
            <div className='flex-grow flex items-center p-2 text-red-500 font-bold text-xl  justify-center'>Sangria</div>
          </div>
        </div>
      </div>
      <footer className="bg-red-500 text-white p-4 text-center">
        <p>&copy; {new Date().getFullYear()} BiteBliss. All rights reserved.</p>
      </footer>


    </div>
  );
};

export default Practice;
