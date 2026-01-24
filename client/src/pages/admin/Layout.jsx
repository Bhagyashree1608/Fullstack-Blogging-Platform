import React from 'react';
import { Outlet} from 'react-router-dom';
import Sidebar from '../../components/admin/Sidebar';
import { useAppContext } from '../../context/AppContext';

const Layout = () => {
  
  const {axios, setToken, navigate} = useAppContext()
  
  const logout = () =>{
    localStorage.removeItem('token');
    axios.defaults.headers.common['Authorization'] = null;
    setToken(null)
    navigate('/')
  }

  return (
    <>
    
    <div className='flex items-center justify-between py-2 h-[70px] px-4 sm:px-12 border-b border-gray-200'>
      <div className="flex items-center gap-2"> 
      <i className="fa-brands fa-blogger cursor-pointer hover:scale-110 transition-transform"
      style={{ color: "#9333ea",fontSize:50 }} 
      onClick={()=>navigate('/')}></i>
        <span className="font-bold" 
        style={{fontSize:30}}>
            BlogSphere
        </span> 
      </div>
      
    <button onClick={logout} className="flex items-center gap-2 rounded-full cursor-pointer bg-purple-600 text-white px-10 py-3.5">
   <span className="text-xl leading-none">Logout</span>
   </button>
    </div>
    <div className='flex h-[calc(100vh-70px)]'>
        <Sidebar/>
          <Outlet/>
    </div>
    </>
  );
}

export default Layout;
