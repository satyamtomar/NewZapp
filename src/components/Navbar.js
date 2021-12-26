import React from "react";
import { Link } from "react-router-dom";
import './nav.css'
import {GiNewspaper } from "react-icons/gi"
// You have to add group-hover variant in tailwind config
// to see what I've done in tailwind config go check my git code. 

// You have to add _all_layouts.scss code to have some css styling..


const Navbar = () => {
  return (
    <>
    
    <nav className="">
    
    
     <div className="bg-gray-800   py-3  text-gray-400 flex flex-col  items-center space-x-8 md:flex-row mx-auto justify-between px-3">
    <div className="flex flex-row items-center space-x-2 ">
    
    <svg viewBox="0 0 960 200" className="h-full w-full items-center">
                <symbol id="s-text">
                  <text text-anchor="middle" x="30%" y="60%" className="text-8xl">
                  <Link className="hover:text-gray-600 " to="/">NewZapp</Link>
                  
                  </text>
                </symbol>
                <g className = "g-ants">
		<use href="#s-text" class="text-copy"></use>
		<use href="#s-text" class="text-copy"></use>
		<use href="#s-text" class="text-copy"></use>
		<use href="#s-text" class="text-copy"></use>
		<use href="#s-text" class="text-copy"></use>
	</g>
              </svg>
    
    </div>
    <div className="flex items-center space-x-2 md:flex-row flex-col">
      <Link className="hover:no-underline hover:text-gray-100" to="/">general</Link><Link className="hover:no-underline hover:text-gray-100" to="business">business</Link><Link className="hover:no-underline hover:text-gray-100" to="entertainment">entertainment</Link><Link className="hover:no-underline hover:text-gray-100" to="health">health</Link><Link className="hover:no-underline hover:text-gray-100" to="science">science</Link><Link className="hover:no-underline hover:text-gray-100" to="sports">sports</Link><Link className="hover:no-underline hover:text-gray-100" to="technology">technology</Link>
    </div>
    </div>
    
    

    </nav>


    </>
  );
};

export default Navbar;
