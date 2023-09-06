import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import userDp from './../../assets/verified-profile-9305221-7647858.webp'

const FullBlog = () => {
  const {id} = useParams();
  //console.log('params',id);
  const {data:blog= [],isLoading} = useQuery({
    queryKey:['blog',id],
    queryFn: async() => {
      const res = await fetch(`http://localhost:5000/blog/${id}`)
      const data = res.json();
      return data

    }
  })
  return (
    <div>
       <div className="text-sm breadcrumbs pl-10">
          <ul>
            <li><Link to="/">Home</Link></li> 
            <li><Link to="/blogs">blogs</Link></li> 
            <li>Full Blog</li>
          </ul>
        </div>

      <main class="pt-4 pb-16 lg:pt-8 lg:pb-24 bg-white dark:bg-gray-900">
       
        <div class="flex justify-between px-4 mx-auto max-w-screen-xl ">
          
            <article class="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
                <header class="mb-4 lg:mb-6 not-format">
                <h1 class="mb-4 text-2xl font-bold  leading-relax text-gray-900 lg:mb-6 lg:text-3xl dark:text-white">{blog?.title}</h1>
                    <address class="flex items-center my-6 not-italic">
                        <div class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                            <img class="mr-4 w-12 h-12 rounded-full" src={blog?.userPhoto?blog.userPhoto:userDp} alt="Jese Leos"/>
                            <div>
                                <a href="#" rel="author" class="text-lg font-semibold text-gray-700 dark:text-white">{blog?.userName}</a>
                                <p class="text-base font-light text-gray-500 dark:text-gray-400">{blog?.dateTime}</p>
                            </div>
                        </div>
                    </address>
                    
                    <figure><img className='w-full max-h-80 rounded-3xl' src={blog?.image} alt=""/>
              <figcaption className='text-center'>Source of Image : Internet</figcaption>
          </figure>
                </header>
              
                <p class="lead text-gray-500 tracking-wide">{blog?.description}</p>
            </article>
          </div>
      </main>    
    </div>
  );
};

export default FullBlog;