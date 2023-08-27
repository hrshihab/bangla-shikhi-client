import React from 'react';
import hero from './../../../assets/heroImage.png'
import { Link } from 'react-router-dom';

const Slider = () => {
  return (
    <section class="bg-white dark:bg-gray-900 border-b-2 rounded-b-[50px] md:rounded-b-[100px]  shadow-md md:shadow-xl">
    <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 xl:px-8 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-6">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold text-gray-700 tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white"><span className=' text-transparent bg-clip-text bg-gradient-to-r to-orange-400 from-pink-500'>Learning Bangla</span> is <br /> easier now</h1>
            <p class="max-w-2xl mb-6 font-light text-gray-600 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Learn bangla language is completely.Bangla language learning online platform where people can learn, type and speak bangla.</p>
            <Link to="/lessons" class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-orange-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                Get started
                <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </Link>
            <Link to="/community" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                Speak to explore
            </Link> 
        </div>
        <div class="hidden lg:mt-0 lg:col-span-6 lg:flex">
            <img className=' rounded-r-full' src={hero} alt="mockup"/>
        </div>                
    </div>
</section>
  );
};

export default Slider;