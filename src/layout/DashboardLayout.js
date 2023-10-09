import React, { useState } from 'react';
import Header from '../Page/Shared/Header/Header';
import { Link, Outlet } from 'react-router-dom';
import UserAvatar from '../Page/Shared/Header/UserAvatar';
import logo from './../assets/logo.png'
import { useQuery } from '@tanstack/react-query';
import MdPlayLesson from 'react-icons/md'

const DashboardLayout = () => {
  const [sidebar,setSidebar]=  useState(true)
  const handleToggleSidebar = () => {
    console.log('clicked',sidebar);
        setSidebar(!sidebar)

  }
  const {data : blogs = [],isLoading,refetch} = useQuery({
   queryKey:['blogs'],
   queryFn: async()=> {
     const res = await fetch(`http://localhost:5000/blogs`)
     const data = await res.json();
     //console.log(data);
 
     
       return data.result.filter(data=> data.status === 'pending')
     
     
     
     
     
   }
 })
  return (
    <div className='max-w-screen-2xl'>  
     
<nav class="fixed max-w-screen-2xl  top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
  <div class="px-3 py-3 lg:px-5 lg:pl-3">
    <div class="flex items-center justify-between">
      <div class="flex items-center justify-start">
        <button data-drawer-target="logo-sidebar" onClick={handleToggleSidebar} data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
            <span class="sr-only">Open sidebar</span>
            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
               <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
            </svg>
         </button>
         <Link to='/' class="flex items-center">
        <img src={logo} class="h-8 mr-3" alt="Logo" />
        <span class="self-center text-2xl font-bold whitespace-nowrap dark:text-white"> <span className=' text-orange-700'>BanglaShikhi</span> </span>
    </Link>
      </div>
      <div >
          <UserAvatar></UserAvatar>
        </div>
    </div>
  </div>
</nav>

{
   <aside id="logo-sidebar" class={` fixed top-0  z-40 w-64 h-screen pt-20 transition-transform ${sidebar && "-translate-x-full"}  bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar"`}>
  <div class="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
     <ul class="space-y-2 font-medium">
        <li>
           <Link to="/dashboard" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <svg class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                 <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"/>
                 <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"/>
              </svg>
              <span class="ml-3">Dashboard</span>
           </Link>
        </li>
        <li>
           <Link to="/dashboard/allusers" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                 <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z"/>
              </svg>
              <span class="flex-1 ml-3 whitespace-nowrap">Users</span>
           </Link>
        </li>
        <li>
           <Link to="/dashboard/blogsapproved" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                 <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z"/>
              </svg>
              <span class="flex-1 ml-3 whitespace-nowrap">All Blogs</span>
              <span class="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span>
           </Link>
        </li>
        <li>
           <Link to="/dashboard/blogspending" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                 <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z"/>
              </svg>
              <span class="flex-1 ml-3 whitespace-nowrap">Blogs Pending</span>
              <span class="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">{blogs.length}</span>
           </Link>
        </li>
       
        <li>
           <Link to="/dashboard/lessons" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
           <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="book"><g data-name="1"><path fill="#c0cdea" d="M22,4.67383v12.07a2.05476,2.05476,0,0,1-1.74,1.98l-.33.04a25.46052,25.46052,0,0,0-7.46,2.46.88438.88438,0,0,1-.47.11,1.00885,1.00885,0,0,1-.49-.11l-.04-.02a25.69023,25.69023,0,0,0-7.43994-2.44l-.29-.04a2.05476,2.05476,0,0,1-1.74-1.98v-12.08a1.96731,1.96731,0,0,1,2.16-1.99,18.75552,18.75552,0,0,1,7.06,2.34l.25.15a1.07326,1.07326,0,0,0,1.06006,0l.17-.11a18.851,18.851,0,0,1,7.07-2.37h.06A1.97,1.97,0,0,1,22,4.67383Z"></path><path fill="#6282c1" d="M12,5.30381v16.03a1.00885,1.00885,0,0,1-.49-.11l-.04-.02a25.69023,25.69023,0,0,0-7.43994-2.44l-.29-.04a2.05477,2.05477,0,0,1-1.74-1.98V4.6638a1.96731,1.96731,0,0,1,2.16-1.99,18.75552,18.75552,0,0,1,7.06,2.34l.25.15A1.048,1.048,0,0,0,12,5.30381Z"></path><path fill="#f7b115" d="M7.75,9.246H5.5a.75.75,0,0,1,0-1.5H7.75a.75.75,0,0,1,0,1.5Z"></path><path fill="#ef7a1b" d="M8.5,12.246h-3a.75.75,0,1,1,0-1.5h3a.75.75,0,0,1,0,1.5Z"></path></g></svg>
                           <span class="flex-1 ml-3 whitespace-nowrap">Lessons</span>

           </Link>
        </li>
        <li>
           <Link to="/dashboard/donations" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
           <svg
           class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
      viewBox="0 0 576 512"
      fill="currentColor"
      height="1em"
      width="1em"

    >
      <path d="M0 112.5v309.8c0 18 10.1 35 27 41.3 87 32.5 174 10.3 261-11.9 79.8-20.3 159.6-40.7 239.3-18.9 23 6.3 48.7-9.5 48.7-33.4V89.7c0-18-10.1-35-27-41.3-87-32.5-174-10.3-261 11.9-79.8 20.3-159.6 40.6-239.3 18.8C25.6 72.8 0 88.6 0 112.5zM288 352c-44.2 0-80-43-80-96s35.8-96 80-96 80 43 80 96-35.8 96-80 96zm-224 0c35.3 0 64 28.7 64 64H64v-64zm64-208c0 35.3-28.7 64-64 64v-64h64zm384 160v64h-64c0-35.3 28.7-64 64-64zM448 96h64v64c-35.3 0-64-28.7-64-64z" />
    </svg>
                           <span class="flex-1 ml-3 whitespace-nowrap">Donations</span>

           </Link> 
        </li>
    
     </ul>
  </div>
</aside>
}


<div class="p-4 sm:ml-64">
  <Outlet></Outlet>
</div>

   </div>
   
  );
};

export default DashboardLayout;