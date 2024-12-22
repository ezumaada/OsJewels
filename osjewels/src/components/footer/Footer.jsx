import React from 'react';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className='bg-black text-white pt-5 flex-col items-center overflow-clip px-[5vw] flex'>
      <section className='flex flex-col md:flex-row'>
        <div className='gap-3 py-4 flex flex-col'>
          <img src="/images/ingourd-black-logo.png" alt="logo" className='w-[200px] h-[100px]' />
          <p className='pr-8'>We have jewellery that suits your style and which you’re proud to wear.  </p>
          <p>From women to men.</p>
          
          
        </div>
        <div className='flex flex-row py-4 gap-4 justify-between'>
          <ul className='gap-2 flex-col flex'>
            <li className='text-white font-semibold text-xl'> Shop</li>
            
            <li className='text-lg'><Link to="/watches">Watches</Link></li>
            <li className='text-lg'><Link to="/rings">Rings</Link></li>
            <li className='text-lg'><Link to="/necklaces">Necklaces</Link></li>
            <li className='text-lg'><Link to="/earrings">Earrings</Link></li>
            <li className='text-lg'><Link to="/diamonds">Diamonds</Link></li>
          </ul>
          <ul className='gap-2 flex-col flex'>
            <li className='font-semibold text-xl'>Your Account</li>
            <li className='text-lg'><Link to="/signup">Sign Up </Link></li>
            <li className='text-lg'><Link to="/signin">Login </Link></li>
            <li className='text-lg'><Link to="/shipping">Shipping</Link></li>
            
          </ul>
        </div>
        <div className='flex flex-row py-4 justify-between'>
          <ul className='gap-2 flex-col flex'>
            <li className='font-semibold text-xl'>About Us </li>
            <li className='text-lg'><Link to="/about">About Us</Link></li>
            <li className='text-lg'><Link to="/blog">Blog</Link></li>
            <li className='text-lg'><Link to="/shipping">Shipping</Link></li>
            <li className='text-lg'><Link to="/privacy">Privacy Policy</Link></li>
          </ul>
          <ul className='gap-2 flex-col flex'>
            <li className='font-semibold text-xl'>Resources</li>
            <li className='text-lg'><Link to="/ebooks">Free eBooks</Link></li>
            
            <li className='text-lg'><Link to="/youtube-playlist">YouTube Playlist</Link></li>
          </ul>
        </div>
      </section>
      <section className='flex flex-col space-x-4
       gap-3 border-t-2 border-slate-300 py-5 md:flex-row items-center md:justify-between'>
        <div>
          <p>Ingoude Jewellry</p>
          <p>© 2000-2024, All rights reserved</p>
        </div>
        
        <div className='flex flex-row gap-2'>
          <img src="/images/visa.png" className='h-9' alt="visa-logo" />
          
          <img src="/images/american-express.png" className='h-9'alt="american-express" />
          <img src="/images/apple-pay.png" className='h-11'alt="applepay-card-logo" />
        </div>
      </section>
    </div>
  );
};

export default Footer;
