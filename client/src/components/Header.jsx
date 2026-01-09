import React from 'react';
import { assets } from '../assets/assets';

const Header = () => {
  return (
    <div className='mx-8 sm:mx-16 xl:mx-24 relative'>
        <div className='text-center mt-20 mb-8'>

           <div className='inline-flex items-center justify-center gap-4 px-6 py-1.5 mb-4 border border-primary/40 bg-primary/10 rounded-full text-sm text-primary'>
            <p>New: AI feature Integrated</p>
            <i className="fa-solid fa-star cursor-pointer"></i>
           </div>

        <h1 className='text-3xl sm:text-6xl font-semibold sm:leading-16 text-gray-700'>Where your <span className='text-primary'>Thoughts</span><br />Find a Voice.</h1>
        <p className='my-6 sm:my-8 max-w-2xl m-auto max-sm:text-xl text-gray-500'>
            Create, publish, and inspire — it’s your creative corner. From quick thoughts to
  deep stories, express yourself without limits.</p>

       <form className='flex justify-between max-w-lg max-sm:scale-75 mx-auto border border-gray-300 bg-white rounded overflow-hidden'>
        <input type='text' placeholder="Search for Blogs" required className='w-full pl-4 outline-none'/> 
        <button type='submit' className='bg-primary text-white px-8 py-2 m-1.5 rounded hover:scale-105 transition-all cursor-pointer'> Search</button>
       </form>

        </div>
        <img 
          src={assets.gb} 
          alt='gradient'
          className="fixed inset-0 w-screen h-screen object-cover opacity-50 -z-10"/>
    </div>
  );
}

export default Header;
