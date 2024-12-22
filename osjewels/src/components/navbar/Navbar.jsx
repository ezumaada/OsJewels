import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../authcontext/AuthContext';

import { useNavigate } from "react-router-dom";

import { useCart } from "../../cartcontext/CartContext";


const Navbar = () => {
  const navigate = useNavigate();

  const { user, logOut } = useAuth();
  const { cart, getTotalQuantity } = useCart(); // Access cart and total quantity

  const totalQuantity = getTotalQuantity();
    const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Close sidebar if clicked outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen]);
  

  return (
    <div className='my-6'>
        {/* Navbar for small screens */}
      <div className="flex shadow-lg justify-between gap-6 mt-11 mx-[5vw]  items-center p-4 md:hidden">
        <div className='flex items-center gap-3 flex-row'>        
         {/* Hamburger icon */}
            <button onClick={toggleSidebar} className="text-black">
          <img src="/images/burger-icon.png" alt="Hamburger-icon" className="h-6" />
            </button>
            <Link to="/products"><img src="/images/search-icon.svg" alt="search-icon" /></Link>
        </div>
         {/* Logo */}
         <Link to="/"><img src="/images/ingourd-black-logo.png"  alt="logo" /> </Link>
         <div className='flex flex-row gap-3'>
            
            <Link to="/cart" className="relative inline-flex">
              <img src="/images/cart-icon.svg" alt="cart" />{totalQuantity > 0 && (
          <div className="absolute -top-2 -right-2 bg-red-500 text-white w-[16px] h-[16px] rounded-full flex items-center justify-center text-xs font-bold">
            {totalQuantity}
          </div>
        )}</Link>
            
                
        </div>

      </div>
      
      {/* Full navbar for md & lg screens */}
        
      <div className='hidden md:flex shadow-lg mt-11 mx-[5vw] px-4  flex-row justify-between items-center gap-5'>
        <div>
            <Link to="/"><img src="/images/ingourd-black-logo.png" alt="logo" /> </Link>
        </div>
        <div>
  <ul className="flex flex-row items-center justify-between gap-7">
    <li className="transition duration-300 text-md transform hover:scale-105">
      <Link to="/products">
        Shop
        <hr />
      </Link>
    </li>

    <li className="transition duration-300 text-md transform hover:scale-105">
      <Link to="/sales">On Sale</Link>
    </li>

    <li className="transition duration-300 text-md transform hover:scale-105">
      <Link to="/about">
        About Us
        <hr />
      </Link>
    </li>
  </ul>
</div>

        
        <div className='flex flex-row gap-3'>
            <Link to="/cart" className="relative inline-flex"><img src="/images/cart-icon.svg" alt="cart" className='w-[35px] h-[35px] md:w-[35px] md:h-[35px]'/> {totalQuantity > 0 && (
          <div className="absolute -top-2 -right-2 bg-red-500 text-white w-[16px] h-[16px] rounded-full flex items-center justify-center text-xs font-bold">
            {totalQuantity}
          </div>
        )}</Link>
           
                
        </div>
        {/* Conditionally render Sign In or Sign Out */}
        {!user ? (
            <Link to="/signin" className="text-black border-black border-solid border-2 px-3 py-2">Sign In</Link>
          ) : (
            <button
  onClick={async () => {
    try {
      await logOut(); // Log out the user
      navigate("/"); // Redirect to homepage after successful sign-out
    } catch (error) {
      console.error("Error signing out:", error);
    }
  }}
  className="text-black border-black border-solid border-2 px-3 py-2"
>
  Sign Out
</button>

          )}
        </div>

        {/* Sidebar for small screens (opens on click) */}
      {isOpen && (
        <>
          {/* Overlay for blur effect */}
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-10"></div>

          {/* Sidebar */}
          <div
            ref={sidebarRef}
            className={`fixed top-0 left-0 h-full bg-white shadow-lg z-20 transform transition-transform duration-300 ${
              isOpen ? 'translate-x-0' : '-translate-x-full'
            } w-[30%]`}
          >
            <button
              className="p-2 text-black"
              onClick={toggleSidebar}
            >
              Close
            </button>
            <ul className="p-4">
              <li className="my-4">
                <Link to="/watches" className='hover:text-lg transition duration-300'>
                  New Arrivals
                </Link>
              </li>
              <li className="my-4">
                <Link to="/rings" className='hover:text-lg transition duration-300'>
                  On Sale
                </Link>
              </li>
              <li className="my-4">
                <Link to="/diamonds" className='hover:text-lg transition duration-300'>
                  Brands
                </Link>
              </li>
              <li className="my-4">
                <Link to="/sales" className='hover:text-lg transition duration-300'>
                  Brands
                </Link>
              </li>
              
             
            </ul>
            <div className='fixed bottom-0 flex flex-col gap-2'>
            <Link to="/signup" className='shadow-lg transform hover:scale-110 items-center px-4 justify-center transition duration-300'>
          Sign Up </Link>
         
            <Link to="/login" className='shadow-lg transform hover:scale-110 items-center px-4 justify-center transition duration-300'>
              Login </Link>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Navbar