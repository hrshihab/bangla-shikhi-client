import React, { useContext, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../../../contexts/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';


const GoogleSignIn = () => {
  const {googleSignIn} = useContext(AuthContext)
  const [loginError, setLoginError] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || '/';

  const handleSignIn = () => {
      googleSignIn()
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });

      })
      .catch((error)=> {
        console.log(error.message)
        setLoginError(error.message);
      })
  }
  return (
    <div>
 <button onClick={handleSignIn} className='flex gap-3 items-center text-gray-600 font-medium border-2 border-gray-200 px-4 py-2 rounded-xl hover:cursor-pointer hover:bg-gray-200'>
    <FcGoogle/> Sign in with Google
 </button>
 <div>
        {loginError && <p className='text-red-600'>{loginError}</p>}
   </div>
    </div>
   
   
  );
};

export default GoogleSignIn;