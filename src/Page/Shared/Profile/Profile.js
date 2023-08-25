import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';

const Profile = () => {
  const {user} = useContext(AuthContext)
  return (
    <div className='h-full'>
      <h2 className='text-center text-semibold text-xl md:text-5xl  text-orange-700 py-60'>Profile Section <br /> <br />Updated Coming Soon !! <br />Thanks {user?.displayName}</h2>
    </div>
  );
};

export default Profile;<h2>Profile SEction</h2>