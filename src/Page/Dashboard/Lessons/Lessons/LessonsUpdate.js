import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import LessonsTopics from './LessonsTopics';
import PreviewLessons from './PreviewLessons';
import EditLessons from './EditLessons';

const LessonsUpdate = () => {
    const [details,setDetails] = useState({})
    const [isPreview,setIsPreview]= useState(false)
    const [isEdit,setIsEdit]= useState(false)
    const [singleLessons,setSingleLessons] = useState({})
    const [init,setInit] = useState(false)
    const [initialEdit,setInitialEdit] = useState(false)
  
  
  
   
  
    
    // const handlePreview = (topic) => {
    //   setInit(true)
    //   setInitialEdit(false)
    //   setIsPreview(!isPreview)
    //   setIsEdit(false)
    //   setSingleLessons(topic)
    //  // console.log(isPreview);
    
    // }
    
    console.log(isEdit);
    const handleEdit = (topic) => {
      setIsEdit(!isEdit)
    
      setSingleLessons(topic)
    
    }

const {data:contents = [],isLoading,refetch} = useQuery({
  queryKey:[],
  queryFn: async () => {
    const res = await fetch('http://localhost:5000/coursecontent')
    const data = await res.json()
    //console.log(data);
    return data
  }
})


//console.log(contents.length);

const handleDetails = (topicId) => {
  const id = Math.trunc(topicId/100)
  setDetails(contents[id-1].subtopics.find(topic=>topic.id===topicId)) 
}
  
  return (
    <div className='py-20'>
     <LessonsTopics
     handleEdit={handleEdit}
     //handlePreview={handlePreview}
     contents={contents}
     handleDetails={handleDetails}
     isLoading={isLoading}
     ></LessonsTopics>
      {/* <!-- drawer component --> */}
      {<EditLessons handleEdit={handleEdit} isEdit={isEdit} singleLessons={singleLessons} ></EditLessons>}
        {/* <!-- Preview Drawer --> */}

      {/* { init &&
       
          <PreviewLessons
          isEdit={isEdit}
      isPreview = {isPreview}
      handlePreview={handlePreview}
      blog={singleLessons}
      
      ></PreviewLessons>
      } */}
     
    </div>
  );
}; 

export default LessonsUpdate;