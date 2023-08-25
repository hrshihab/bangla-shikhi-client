import React from 'react';
import bgImage from './../../assets/abstract-fluid-art-colors-free-vector.jpg'
import CrudModal from './BlogWrite';
import { Link } from 'react-router-dom';
import { Button } from 'flowbite-react';
import { useQuery } from '@tanstack/react-query';
import BlogCard from './BlogCard';

const Blogs = () => {

const {data : blogs = [],isLoading,refetch} = useQuery({
  queryKey:['blogs'],
  queryFn: async()=> {
    const res = await fetch('http://localhost:5000/blogs')
    const data = await res.json();
    return data;
    
  }
})

  return (

    <section class="bg-white dark:bg-gray-900">
    

    <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">

        <div class="max-w-screen-md px-8 pb-4 mx-auto text-center mb-8 lg:mb-16 shadow-2xl rounded-3xl border-b-1 border-orange-700">
             <h1 class="mb-4 text-2xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">See <span class="text-transparent bg-clip-text bg-gradient-to-r to-orange-400 from-pink-500">Our Blog</span> </h1>
            <p class="text-gray-500 sm:text-xl dark:text-gray-400">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
           
            <button type="button" class="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"><Link to='/blogWrite'>Write Blog</Link></button>

        </div>
        <div class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
           {
            blogs.map((blog,i)=> <BlogCard
            blog={blog}
            key={blog._id}

            ></BlogCard>)
           }
               
        </div>
    </div>
  </section>
  );
};

export default Blogs;