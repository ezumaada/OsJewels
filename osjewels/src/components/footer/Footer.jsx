import React from 'react';



import { Link } from "react-router-dom";

const Footer = () => {
  return (
   <div className='bg-black text-white pt-5 flex-col items-center overflow-clip px-[5vw] flex'>
      <section className='flex flex-col md:flex-row'>
        <div className='gap-3 py-4 flex flex-col'>
          <img src="/images/oster-logo.png" alt="logo" className='w-[200px]' />
           <p className='pr-8'>We have jewellry that suits your style and which you’re proud to wear. From women to men.</p>
           <div>
             <Link to="/contact">Contact Us</Link>
             <Link to="/shipping">Shipping</Link>
             <Link to="/returns">Returns</Link>
             <Link to="/terms">Terms & Conditions</Link>
             <Link to="/privacy">Privacy Policy</Link>
             <Link to="/faq">FAQ</Link>
             <Link to="/returns">Returns</Link>
             <Link to="/terms">Terms & Conditions</Link>
             <Link to="/privacy">Privacy Policy</Link>
             <Link to="/faq">FAQ</Link>
             <Link to="/returns">Returns</Link>
             <Link to="/terms">Terms & Conditions</Link>
             <Link to="/privacy">Privacy Policy</Link>
             <Link to="/faq">FAQ</Link>
             <Link to="/returns">Returns</Link>
             <Link to="/terms">Terms & Conditions</Link>
           </div>
        </div>
        <div className='flex flex-row py-4 gap-2 justify-between'>
          <ul>
            <li className='text-white font-semibold text-xl'>Main Menu</li>
            <li className=' text-lg'><Link to="/collections">About</Link></li>
            <li className=' text-lg'><Link to="/watches">About</Link></li>
            <li className=' text-lg'><Link to="/rings">About</Link></li>
            <li className=' text-lg'><Link to="/necklaces">About</Link></li>
            <li className=' text-lg'><Link to="/earrings">About</Link></li>
            <li className=' text-lg'><Link to="/diamonds">About</Link></li>
            <li className=' text-lg'><Link to="/diamonds">About</Link></li>
            <li>Features</li>
            <li>Works</li>
            <li>Careers</li>
          </ul>
          <ul>
            <li className='font-semibold text-xl'>Your Account</li>
            <li>Create Account</li>
            <li>Login to Account</li>
            <li>Shipping </li>
            <li>Orders </li>
          </ul>
        </div>
        <div className='flex flex-row py-4 justify-between'>
          <ul>
            <li className='font-semibold text-xl'>FAQ</li>
            <li>Account</li>
            <li>Manage Deliveries</li>
            <li>Orders</li>
            <li>Payments</li>
          </ul>
          <ul>
            <li className='font-semibold text-xl'>RESOURCES</li>
            <li>Free eBooks</li>
            <li>Development Tutorials</li>
            <li>How to-Blog</li>
            <li>Youtube Playlist</li>
          </ul>
        </div>
      </section>
      <section className='flex flex-col gap-3 border-t-2 border-slate-300 py-5 md:flex-row items-center md:justify-between'>
        <p>© 2000-2021, All rights reserved</p>
        <div className='flex flex-row gap-2'>
          <img src="/images/visa.png" alt="visa-logo" />
          <img src="/images/american-express.png" alt="master-card-logo" />
          <img src="/images/paypal.png" alt="paypal-logo" />
          <img src="/images/applepay.png" alt="applepay-card-logo" />
          
        </div>
      </section>
   </div>
  )
}

export default Footer