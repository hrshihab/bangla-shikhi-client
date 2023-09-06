import React from 'react';
import { Link } from 'react-router-dom';

const Details = ({details,handleDetails}) => {
  const {prevTopicId,nextTopicId,id} = details

  //console.log(details);
  //console.log('from detaisl',id,nextTopicId,prevTopicId);
  return (
    <div className='mx-auto '>
      <div class=" max-h-[472px] shadow my-4 py-6 border-pink-600 mx-auto rounded-xl px-10">
            <h1 class="max-w-2xl mb-4  text-xl font-bold tracking-tight leading-none md:text-2xl xl:text-2xl dark:text-white">Welcome to a Fascinating Bengali Language Experience!</h1>
            <p class="max-w-2xl text-justify mb-6 font-light text-gray-500 md:mb-8 md:text-lg lg:text-lg dark:text-gray-400">Step into a world of wonder and discovery as we introduce you to the captivating universe of the Bengali language. Here at our online hub, learning Bengali is an exhilarating adventure waiting to unfold. Whether you're a curious novice or a seasoned explorer of languages, get ready for an immersive journey that promises both enlightenment and entertainment. <br />The allure of Bengali beckons! Whether your dream is to converse fluently, explore Bengali literature, or expand your linguistic horizons, our website is your gateway to all things Bengali. It's time to start your remarkable linguistic journey. Join us now, and let's set sail into the captivating world of the Bengali language. Your adventure awaits!</p>
            
        </div> 
        <div className='flex justify-between px-4'>
        <h1 class="max-w-2xl mb-4  text-lg font-bold tracking-tight leading-none md:text-xl xl:text-xl dark:text-white">{details?.title}</h1>

        <div className='flex gap-4'>
        <Link onClick={()=> handleDetails(prevTopicId)} class="inline-flex btn-sm items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 hover:cursor-pointer rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                Previous
            </Link>
        <Link onClick={()=> handleDetails(nextTopicId)} class="inline-flex btn-sm items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg hover:cursor-pointer bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                Next
                <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </Link>
             
        </div>
        </div>
        
    </div>
  );
};

export default Details;