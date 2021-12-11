import React from "react";
import { Link } from "react-router-dom";

import {GiNewspaper } from "react-icons/gi"
// You have to add group-hover variant in tailwind config
// to see what I've done in tailwind config go check my git code. 

// You have to add _all_layouts.scss code to have some css styling..


const Navbar = () => {
  return (
    <>
    
    <nav className="">
    <div className="sticky top-0">

    <div className=" bg-gray-300 items-center flex md:justify-between py-3 justify-center">
     <div className=" flex flex-col  items-center space-x-8 md:flex-row">
    <div className="flex flex-row items-center space-x-2 ">
    <GiNewspaper className="h-8 w-8" />
    <Link className="text-lg" to="/">NewZapp</Link>
    
    </div>
    <div className="flex items-center space-x-2 md:flex-row flex-col">
      <Link className="hover:no-underline hover:text-gray-100" to="/">general</Link><Link className="hover:no-underline hover:text-gray-100" to="business">business</Link><Link className="hover:no-underline hover:text-gray-100" to="entertainment">entertainment</Link><Link className="hover:no-underline hover:text-gray-100" to="health">health</Link><Link className="hover:no-underline hover:text-gray-100" to="science">science</Link><Link className="hover:no-underline hover:text-gray-100" to="sports">sports</Link><Link className="hover:no-underline hover:text-gray-100" to="technology">technology</Link>
    </div>
    </div>
    

    </div>
    </div>

    </nav>


    </>
  );
};

export default Navbar;
