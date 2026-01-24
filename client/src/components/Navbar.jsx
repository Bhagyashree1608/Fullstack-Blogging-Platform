import React from 'react';
import BlogIcon from '../assets/blogger.svg?react';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

const Navbar = () => {

    const {navigate, token} = useAppContext()

  return (
    <div className="flex justify-between items-center py-5 mx-8 sm:mx-20 xl:mx-32"> 

      <div className="flex items-center gap-2">
        
      <i className="fa-brands fa-blogger cursor-pointer hover:scale-110 transition-transform"
      style={{ color: "#9333ea",fontSize:50 }} 
      onClick={()=>navigate('/')}></i>
        <span className="font-bold" 
        style={{fontSize:30}}>
            BlogSphere
        </span> 
      </div>

   <button onClick={()=>navigate('/admin')} className="flex items-center gap-2 rounded-full cursor-pointer bg-purple-600 text-white px-10 py-3.5">
   <i className="fa-solid fa-arrow-right-to-bracket fa-beat"></i>
   <span className="text-xl leading-none">{token ? 'Dashboard' : 'Login'}</span>
   </button>
    </div>
  );
};

export default Navbar;
