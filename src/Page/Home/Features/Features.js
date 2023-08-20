import React from 'react';
import Typing from './Typing';

const Features = () => {
  return (
    <div>
   <section class=" dark:bg-gray-900 rounded-full mx-auto">
    <div class="pt-4 px-4 mx-auto max-w-screen-xl text-center lg:pt-6 lg:px-12  rounded-xl m-2 ">
    <h1 class="mb-4 text-lg font-extrabold tracking-tight leading-none text-gray-900 md:text-2xl lg:text-3xl dark:text-white">Our <span className='text-orange-700'>Features</span></h1>
        <p class="mb-2 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">This very extraordinary feature, can make learning activities more efficient</p>
      </div>
      </section>

      <Typing></Typing>
    </div>
 
  );
};

export default Features;