import React, { useEffect, useState } from 'react';
import LessonsTopicsCard from './LessonsTopicsCard';

const LessonsTopics = ({handleDetails,contents,handleEdit,handlePreview}) => {
console.log(contents.length);
  
  return (
    <section className='mx-auto '>

      <div className='px-4 py-2 shadow-md rounded-lg'>
        <div className='grid grid-cols-2 justify-center items-center '>
          <div>
          <h1 class=" text-lg font-bold text-gray-900 dark:text-white md:text-xl lg:text-xl"><span class="text-transparent bg-clip-text bg-gradient-to-r  to-violet-500 from-sky-400">Course Content</span></h1>

        </div>

        <div>
       

        </div> 
       

        
        <div class="p-3 col-span-2"> 
          <div class="relative">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
              </svg>
            </div>
              <input type="text" id="input-group-search" class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Lessons"/>
          </div>
        </div>
        
      
      
     

        </div> 
        
      </div>
      <div class=" h-full w-full px-3 py-4 mt-2 overflow-y-auto ">
    <ul class="space-y-2 font-medium">

     {
      contents.map(content=> <LessonsTopicsCard
        handleEdit={handleEdit}
        handlePreview={handlePreview}
      key={content.id}
      content={content}
      handleDetails = {handleDetails}
      >

      </LessonsTopicsCard>)
     }
      </ul>
      </div>
    </section> 
   
  );
};

export default LessonsTopics;