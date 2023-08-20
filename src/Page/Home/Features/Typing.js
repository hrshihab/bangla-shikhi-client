import React from 'react';
import typing from './../../../assets/Features/typing.png'
import {IoMdPodium} from 'react-icons/io'
import {ImFilesEmpty} from 'react-icons/im'
import {FaUsers} from 'react-icons/fa'


const Typing = () => {
  return (
    <section class="bg-white dark:bg-gray-900">
    <div class="gap-8 items-center py-2 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-2 lg:px-6">
        <img class="w-full dark:hidden" src={typing} alt="typing image"/>
        
        <div class="mt-4 md:mt-0">
            <h2 class="mb-4 text-3xl md:text-4xl leading-normal tracking-wide font-bold text-blue-900 dark:text-white">A <span className=' text-teal-400'>user interface</span> designed <br /> for bangla typing</h2>
            
            <div className='grid gap-5 py-6 mb-3'>
              <div className='grid grid-cols-12 '>
                <div className='flex justify-center items-center bg-white  shadow-xl rounded-full   '><IoMdPodium className=' text-blue-900 text-3xl'></IoMdPodium></div>
                <div className=' col-span-7 ml-6 text-sky-800 text-md font-medium tracking-wide'>Enhanced Language Practice and Reinforcement</div>
              </div>
              <div className='grid grid-cols-12 '>
                <div className='flex justify-center items-center bg-white  shadow-xl rounded-full   '><ImFilesEmpty className=' text-blue-900 text-2xl'></ImFilesEmpty></div>
                <div className=' col-span-7 ml-6 text-sky-800 text-md font-medium tracking-wide'>Improved Vocabulary and Spelling fluency.</div>
              </div>
              <div className='grid grid-cols-12 '>
                <div className='flex justify-center items-center bg-white  shadow-xl rounded-full   '><FaUsers className=' text-blue-900 text-3xl'></FaUsers></div>
                <div className=' col-span-7 ml-6 text-sky-800 text-md font-medium tracking-wide'>Increased Efficiency and Productivity of the learner</div>
              </div>
             
            </div>
            <a href="#" class="inline-flex items-center font-medium text-white bg-orange-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 text-md rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900">
                Get started
                <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
        </div>
    </div>
</section>
  );
};

export default Typing;