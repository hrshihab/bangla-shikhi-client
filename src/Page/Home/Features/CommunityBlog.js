import React from 'react';
import community from './../../../assets/Features/community.png'

const CommunityBlog = () => {
  return (
    <section class="bg-white dark:bg-gray-900">
    <div class="gap-8 items-center py-2 px-4 mx-auto max-w-screen-xl xl:gap-8 md:grid md:grid-cols-2 sm:py-2 lg:px-6">
        
        <div class="mt-4 md:mt-0">
            <h2 class="mb-4 text-3xl md:text-4xl leading-normal tracking-wide font-bold text-blue-900 dark:text-white"> <span className=' text-teal-400'>Community</span>  <br /> Blog </h2>
            
            <div className='grid gap-5 py-6 mb-3'>
            Reading community Blog will enhance <br /> your fluency  in bangla reading. Audio sound <br /> will help you to correct  of bangla words.t.
            </div>
           
        </div>

        <img className="w-full dark:hidden" src={community} alt="typing image"/>

    </div>
</section>
  );
};

export default CommunityBlog;