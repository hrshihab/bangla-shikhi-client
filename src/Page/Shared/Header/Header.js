import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from './../../../assets/logo.png'
import { AuthContext } from '../../../contexts/AuthProvider';
import dp from './../../../assets/userProfile.jpg'
import UserAvatar from './UserAvatar';
import { useQuery } from '@tanstack/react-query';

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);
  const handleLogOut = () => {
    logOut()
        .then(() => { })
        .catch(err => console.log(err));
}

  const menuItem = <React.Fragment>
          <li ><Link to='/' className='block py-2 pl-3 pr-4 text-white bg-orange-700 rounded md:bg-transparent md:text-orange-700 md:p-0 dark:text-white md:dark:text-orange-500" aria-current="page"  '>Home</Link></li>
          <li><Link to='/lessons' className='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-700 md:p-0 dark:text-white md:dark:hover:text-orange-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent '>Lessons</Link></li>
          <li><Link to='/banglatype' className='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-700 md:p-0 dark:text-white md:dark:hover:text-orange-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent '>Bangla Type</Link></li>
          <li><Link to='/blogs' className='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-700 md:p-0 dark:text-white md:dark:hover:text-orange-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent '>Blogs</Link></li>
          <li><Link to='/community' className='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-700 md:p-0 dark:text-white md:dark:hover:text-orange-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent '>Community</Link></li>
          <li><Link to='/donate' className='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-700 md:p-0 dark:text-white md:dark:hover:text-orange-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent '>Donate</Link></li>
          
  </React.Fragment>
  return (
  
    <div className="navbar text-gray-700 md:px-10">
    <div className="navbar-start">
      <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        <ul tabIndex={0} className="menu menu-sm dropdown-content z-50 my-4 py-6 gap-2  text-sm font-semibold text-gray-900 dark:text-white list-none border-y-4 border-orange-700 bg-white   divide-y divide-gray-100 shadow-2xl dark:bg-gray-700 dark:divide-gray-600 rounded-xl w-40">
         {menuItem}
        </ul>
      </div>
      <Link to='/' class="flex items-center">
        <img src={logo} class="h-8 mr-3" alt="Logo" />
        <span class="self-center text-2xl font-bold whitespace-nowrap dark:text-white"> <span className=' text-orange-700'>BanglaShikhi</span> </span>
    </Link>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className=" font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        {menuItem}
        
      </ul>
    </div>
 
 
      
    <UserAvatar ></UserAvatar>
      
    
  </div>

 
  );
};

export default Header;