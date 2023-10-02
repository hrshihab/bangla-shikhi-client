import React from 'react';
import TopicsCard from './TopicsCard';

const Topics = ({handleDetails, data, details}) => {

   let activeMilstone =  Math.trunc(details.id/100);
  //console.log(data);
  return (
    <section className='mx-auto space-y-2'>
      <div className='px-4 py-2 shadow-md rounded-lg'>
        <div className='grid grid-cols-2 justify-center items-center '>
          <div>
            <h1 class=" text-lg font-bold text-gray-900 dark:text-white md:text-xl lg:text-xl"><span class="text-transparent bg-clip-text bg-gradient-to-r  to-violet-500 from-sky-400">Course Content</span></h1>
          </div>
          <div>
            <div class="flex justify-between items-center gap-4">
              <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div class="bg-gradient-to-r  to-violet-500 from-pink-400 h-2.5 rounded-full" style={{width: "45%"}}></div>
              </div>
              <span class="text-sm font-medium text-blue-700 dark:text-white">45%</span>
            </div>
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

      <div class=" grid h-[500px] w-full px-4 py-2 shadow-md rounded-lg overflow-y-auto ">
        <ul class="space-y-2 w-full font-medium">
          {
            data.map((milestone)=> {
                
                if(milestone.id===activeMilstone) return  <TopicsCard key={milestone.id} milestone={milestone} handleDetails = {handleDetails} status = {true} details = {details}> </TopicsCard>
                else return  <TopicsCard key={milestone.id} milestone={milestone} handleDetails = {handleDetails} status = {false} details = {details} >  </TopicsCard> 
                
            })
          }
        </ul>
      </div>
    </section> 
   
  );
};

export default Topics;