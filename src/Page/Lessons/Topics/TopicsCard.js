import React, { useState } from 'react';

const TopicsCard = ({content,handleDetails}) => {
  const {title,totalTopics,id,estimatedCompletionTime,nextTopicId,prevTopicId,subtopics} = content
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = ({handleDetails}) => {
    setIsOpen(!isOpen);
  };
  return (


       <li className='shadow px-4 py-2 rounded-lg'>
          <button onClick={toggleDropdown} type="button" class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                
                <span class="flex-1 ml-3 text-transparent bg-clip-text bg-gradient-to-r to-violet-600 from-pink-600 text-left whitespace-nowrap">{title}</span>
                <svg class="w-3 h-3 text-violet-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                   <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/> 
                </svg>
          </button>
          {
            isOpen && 
            <ul  class=" py-2 rounded-lg mb-2 bg-slate-50 space-y-2">
               {
                  subtopics.map((topic,idx)=><li>
                     <a  onClick={()=> handleDetails(topic.id)} class="hover:cursor-pointer flex items-center w-full p-2 text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-600 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"> {id}-{idx} : {topic?.title}</a>
                  </li> )
               }
                
                
          </ul>
          } 
          
       </li> 
      

  );
};

export default TopicsCard;