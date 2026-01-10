import React from 'react';
import { footer_data } from '../assets/assets';

const Footer = () => {
  return (
    <div className='px-6 md:px-16 lg:px-24 xl:px-32 bg-primary/3'>
      <div className='flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-gray-500/30 text-gray-500'>

      <div>
        <i className="fa-brands fa-blogger cursor-pointer pr-2"
      style={{ color: "#9333ea",fontSize:40 }} 
      onClick={()=>navigate('/')}></i>
        <span className="font-bold text-2xl sm:text-3xl text-black">
            BlogSphere
        </span>
        <p className="max-w-[410px] mt-6 text-gray-600 text-sm leading-relaxed">BlogSphere is your go-to platform for discovering insightful blogs on technology, startups, lifestyle, and finance. 
        We aim to inspire, educate, and empower readers by sharing quality content that helps you grow personally and professionally.
        </p>
      </div>
      
    
    <div className='flex flex-wrap justify-between w-full md:w-[45%] gap-5'>
        {footer_data.map((section,index)=>(
            <div key={index}>
              <h3 className='font-semibold text-base text-gray-900 md:mb-5 mb-2'>{section.title}</h3>
              <ul className='text-sm pace-y-1'>
                {section.links.map((link,i)=>(
                    <li key={i}>
                      <a href='#' className='hover:underline transition'>{link}</a>
                    </li>
                ))}
              </ul>
            </div>
        ))}
    </div>
      </div>
      <p className='py-4 text-center text-sm md:text-base text-gray-500/80'>Copyright 2026 &#169; BlogSphere - All Right Reserved.</p>
    </div>
    
  );
}

export default Footer;
