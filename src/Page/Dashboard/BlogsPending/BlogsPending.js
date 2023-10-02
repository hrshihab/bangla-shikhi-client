import React from 'react';
import AllBlogs from '../AllBlogs/AllBlogs';
import { useQuery } from '@tanstack/react-query';
import MakeUserAdminCard from '../../Shared/Loading/MakeUserAdminCard';

const BlogsPending = () => {


  const {data : blogs = [],isLoading,refetch} = useQuery({
    queryKey:['blogspending'],
    queryFn: async()=> {
      const res = await fetch(`http://localhost:5000/blogspending`)
      const data = await res.json();
      console.log(data);
  
      return data
      
      
    }
  })
  if (isLoading) {
    return <MakeUserAdminCard></MakeUserAdminCard>
  }
  return (
   <AllBlogs 
   blogs={blogs}
   isLoading={isLoading}
   refetch={refetch}
     ></AllBlogs>

  );
};

export default BlogsPending;