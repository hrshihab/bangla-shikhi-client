import React, { useState } from 'react';
import bgImage from './../../assets/abstract-fluid-art-colors-free-vector.jpg'
import CrudModal from './BlogWrite';
import { Link } from 'react-router-dom';
import { Button } from 'flowbite-react';
import { useQuery } from '@tanstack/react-query';
import BlogCard from './BlogCard';
import CardSkeleton from '../Shared/Loading/CardSkeleton';

const Blogs = () => {
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(6);
  const [count, setCount] = useState(0);


  console.log(count);


const {data : blogs = [],isLoading,refetch} = useQuery({
  queryKey:['blogs',page,size],
  queryFn: async()=> {
    const res = await fetch(`http://localhost:5000/blogs?page=${page}&size=${size}`)
    const data = await res.json();
    console.log(data);
    
    setCount(data.count)
    const displayBlogs = data.result.filter(blog=> blog.status !== 'pending')
    return displayBlogs;
    
  }
})

const pages = Math.ceil(count / size);




  return (

    <section className="bg-white dark:bg-gray-900">

    
    <section className=" border-b-2 rounded-b-[50px] md:rounded-b-[100px] xl:rounded-b-full shadow-md md:shadow-xl">
    <div className="text-sm breadcrumbs pl-10">
          <ul>
            <li><Link to="/">Home</Link></li> 
            <li>Blogs</li>
          </ul>
        </div>
    <div className="px-4 mx-auto max-w-screen-xl text-center py-5 lg:pb-8">
        <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight leading-none  md:text-3xl lg:text-4xl">Explore <span className="text-transparent bg-clip-text bg-gradient-to-r to-orange-400 from-pink-500">Our Blogs</span> </h1>
        <p className="mb-8 text-lg font-normal text-gray-600 lg:text-xl sm:px-16 lg:px-48">You can easily Share your blogs with us and can enhance your bangla learning skill. </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <Link to="/blogWrite" className="inline-flex justify-center items-center py-2 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                Write Blogs
                <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </Link>
            <Link to="/" className="inline-flex justify-center items-center py-2 px-5 text-gray-800 hover:text-gray-900 font-medium text-center bg-gray-200 rounded-lg border border-white hover:bg-gray-100  focus:ring-4 focus:ring-gray-400">
                Learn more
            </Link>  
        </div>
    </div>
</section>

<ul className="flex flex-wrap text-sm font-medium text-center text-gray-500   justify-center mt-8 dark:text-gray-400">
    <li className="mr-2">
        <Link to="#" aria-current="page" className="inline-block px-6 py-2 text-white bg-blue-500 rounded-full active dark:bg-gray-800 dark:text-blue-500">All</Link>
    </li>
    <li className="mr-2">
        <Link to="#" className="inline-block px-4 py-2 rounded-full hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">Entertainment</Link>
    </li>
    <li className="mr-2">
        <Link to="#" className="inline-block px-4 py-2 rounded-full hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">Technology</Link>
    </li>
    <li className="mr-2">
        <Link to="#" className="inline-block px-4 py-2 rounded-full hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">Cultural</Link>
    </li>
    <li className="mr-2">
        <Link to="#" className="inline-block px-4 py-2 rounded-full hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">Educational</Link>
    </li>
    <li className="mr-2">
        <Link to="#" className="inline-block px-4 py-2 rounded-full hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">Others</Link>
    </li>
   
    
<select id="countries" className="ml-6 bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  px-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
  <option selected>Latest</option>
  <option value="US">Most Liked</option>
  <option value="CA">Oldest</option>
  <option value="FR">Ascending</option>
  <option value="DE">Descending</option>
</select>

</ul>

    <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
       
    {isLoading ? 
              <div className='max-w-screen-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-between mx-auto'> 
                  <CardSkeleton></CardSkeleton>
                  <CardSkeleton></CardSkeleton> 
                  <CardSkeleton></CardSkeleton>
              </div>
                 
           
            
            :
   
        <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
           {
              
            blogs.map((blog,i)=> <BlogCard
            blog={blog}
            key={blog._id}
            isLoading={isLoading}

            ></BlogCard>) 
           }
               
        </div>}
    </div>

     <nav  className='flex justify-center py-5 mb-5'>
  <ul className="flex items-center -space-x-px h-8 text-sm">
    
  {
                    [...Array(pages).keys()].map(number =>
                    
                    <li> 
                      <Link to="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                      
                       <button
                        key={number}
                        className={page === number ? 'selected' : ''}
                        
                        onClick={() => setPage(number)}
                    >
                        {number + 1}
                    </button></Link></li>)


                }

   
  </ul>
  <select onChange={event => setSize(event.target.value)} className="ml-6 bg-gray-50 h-8   border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500  px-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
  <option selected>6</option>
  <option value="10">10</option>
  <option value="15">15</option>
  <option value="20">20</option>
  <option value="30">30</option>
</select>
</nav>

  </section>
  );
};

export default Blogs;