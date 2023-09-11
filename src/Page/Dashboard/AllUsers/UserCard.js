import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';

const UserCard = ({userData,handleMakeAdmin,handleRemoveAdmin}) => {
  const {displayName,email,photoURL,role,accountType,_id:id} = userData
  const {user} = useContext(AuthContext)
  return (
    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              
    <th scope="row" class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
        <img class="w-10 h-10 rounded-full" src={photoURL} alt={displayName}/>
        <div class="pl-3">
            <div class="text-base font-semibold">{displayName}</div>
            <div class="font-normal text-gray-500">{email}</div>
        </div>  
    </th>
    <td class="px-4 py-3">
         <span class="bg-primary-100 text-primary-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300">{role}</span>
     </td>
    <td class="px-6 py-4">
        <div class="flex items-center">
            <div class="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div> {accountType}
        </div>
    </td>
    { user?.email === email ?<></> :
      role==='admin'?<td class="px-6 py-4" onClick={()=> handleRemoveAdmin(id)}>
      <a href="#" class="font-medium text-orange-600 dark:text-orange-500 hover:underline">Remove Admin</a>
  </td> : <td class="px-6 py-4" onClick={()=> handleMakeAdmin(id)}>
      <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Make Admin</a>
  </td>
    }
   
</tr>
  );
};

export default UserCard;