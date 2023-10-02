import { useQuery } from '@tanstack/react-query';
import React from 'react';
import AllBlogs from './AllBlogs';
import MakeUserAdminCard from '../../Shared/Loading/MakeUserAdminCard';

const BlogsApproved = () => {
  const {data : blogs = [],isLoading,refetch} = useQuery({
    queryKey:['blogsapproved'],
    queryFn: async()=> {
      const res = await fetch(`http://localhost:5000/blogsapproved`)
      const data = await res.json();
      console.log(data);
  
      return data
      
      
    }
  })

  if (isLoading) {
    return <MakeUserAdminCard></MakeUserAdminCard>
  }
  return (
    <div>
        <AllBlogs
   blogs={blogs}
   isLoading={isLoading}
   refetch={refetch}
     ></AllBlogs>
    </div>
  );
};

export default BlogsApproved;