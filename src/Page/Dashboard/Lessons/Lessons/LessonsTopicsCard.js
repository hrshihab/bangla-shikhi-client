import React, { useState } from 'react';
import SubTopicsCard from './SubTopicsCard';

const LessonsTopicsCard = ({content,handleDetails,handleEdit}) => {
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
          <div class="overflow-x-auto ">
                        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead class="text-xs  text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th  scope="col" class="p-4">
                                        Id
                                    </th>
                                    <th scope="col" class="p-4">Title</th>
                                    <th scope="col" class="p-4">Category</th>
                                    <th scope="col" class="p-4">Actions</th>

                                 
                                </tr>
                            </thead>
                            <tbody>
          
           
               {
                  subtopics.map((topic,idx)=><SubTopicsCard
                  handleEdit={handleEdit}
                  //handlePreview={handlePreview}
                  key={idx}
                  topic={topic}></SubTopicsCard> )
               }
                {/* <li>
                     <a  onClick={()=> handleDetails(topic.id)} class="hover:cursor-pointer flex items-center w-full p-2 text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-600 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"> {id}-{idx} : {topic?.title}</a>
                  </li> */}
                
          
          
              </tbody>
                        </table>
                    </div>
}
       </li> 
      

  );
};

export default LessonsTopicsCard;