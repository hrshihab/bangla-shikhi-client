import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from './../../../assets/logo.png'
import { AuthContext } from '../../../contexts/AuthProvider';
import dp from './../../../assets/userProfile.jpg'
import { useQuery } from '@tanstack/react-query';

  

const UserAvatar = () => {
  const { user, logOut } = useContext(AuthContext);

  const {data : users = [],isLoading,refetch} = useQuery({
    queryKey:['users','admin',user?.email],
    queryFn: async()=> {
      const res = await fetch(`http://localhost:5000/users/admin/${user?.email}`)
      const data = await res.json();
      //console.log(data);
  
     return data
      
      
    }
  })

  console.log(users);

  const handleLogOut = () => {
    logOut()
        .then(() => { })
        .catch(err => console.log(err));
}
  return (
    <div className="flex justify-end navbar-end h-10"> 
    <button className="btn btn-ghost btn-circle">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>
    <button className="btn btn-ghost btn-circle">
      <div className="indicator">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
        <span className="badge badge-xs badge-primary indicator-item"></span>
      </div>
    </button>
    
          {user?.uid ?
            <>
                
                <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src={user?.photoURL?user?.photoURL : dp} className=' shadow-inner' alt='header pic' />
        </div>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content z-50 my-4  text-base list-none border-y-4 border-orange-700 bg-white   divide-y divide-gray-100 shadow-2xl dark:bg-gray-700 dark:divide-gray-600 rounded-xl w-56">
      <div class="py-3 px-4">
              <span
                class="block text-sm font-semibold text-gray-900 dark:text-white"
                >{user?.displayName ? user.displayName : "User Name"}</span
              >
              <span
                class="block text-sm text-gray-900 truncate dark:text-white"
                >{user?.email}</span
              >
            </div>
            <ul
              class="py-1 text-gray-700 dark:text-gray-300"
              aria-labelledby="dropdown"
            >
            {users?.isAdmin &&  <li>
                <Link
                  to="/dashboard" 
                  class="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                  >Dashboard</Link
                >
              </li>}
              <li>
                <Link
                  to="/profile" 
                  class="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                  >My profile</Link
                >
              </li>
              <li>
                <Link
                  to='/settings'
                  class="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                  >Account settings</Link
                >
              </li>
            </ul>
            <ul
              class="py-1 text-gray-700 dark:text-gray-300"
              aria-labelledby="dropdown"
            >
              <li>
                <Link
                  to="#"
                  class="flex items-center py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  ><svg
                    class="mr-2 w-5 h-5 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  My likes</Link
                >
              </li>
              <li>
                <Link
                  to="/collection"
                  class="flex items-center py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  ><svg
                    class="mr-2 w-5 h-5 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"
                    ></path>
                  </svg>
                  Collections</Link
                >
              </li>
              <li>
                <Link
                  to="#"
                  class="flex justify-between items-center py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <span class="flex items-center">
                    <svg
                      aria-hidden="true"
                      class="mr-2 w-5 h-5 text-primary-600 dark:text-primary-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    Pro version
                  </span>
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </Link>
              </li>
            </ul>
        <li><Link onClick={handleLogOut} to=""className='block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white' >Logout</Link></li>
      </ul>
    </div> 
    
  
            </>
            : <Link to='/login' className="btn btn-outline btn-error btn-sm ml-5">login</Link>}
  </div>
 
    
  );
};

export default UserAvatar;