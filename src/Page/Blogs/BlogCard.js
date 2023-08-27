import React from 'react';
import { Link } from 'react-router-dom';
import avatar from './../../assets/Blogs/147142.png'
import CardSkeleton from './../Shared/Loading/CardSkeleton'


const BlogCard = ({blog,isLoading}) => {
  const {title,description,category,image,userName,userEmail,userPhoto,dateTime,_id:id} = blog
  //console.log(id);

  return (
   
<div class="max-w-sm bg-white border border-gray-200 rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700">
      


    <Link to={`/blog/${id}`}>
        <img class="rounded-t-lg h-52 w-full" src={image} alt="" />
    </Link>

    <div class="p-5 justify-between grid">
    <p class="text-sm font-medium text-blue-700 pb-2 truncate dark:text-white">
                            {category}
                        </p>

        <Link to={`/blog/${id}`}>
            <h5 class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        </Link>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{description.slice(0,100)}...</p>
        <div class="flex items-center  space-x-4 mt-4">
                    <div class="flex-shrink-0">
                        <img class="w-8 h-8 rounded-full " src={blog?.userPhoto?userPhoto:avatar} alt="Neil image"/>
                    </div>
                    <div class="flex-1 min-w-0">
                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                            {userName}
                        </p>
                        <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                            {dateTime.split('at').slice(0,1)}
                        </p>
                    </div>
                  
                </div>
    </div>
</div>

  );
};

export default BlogCard;