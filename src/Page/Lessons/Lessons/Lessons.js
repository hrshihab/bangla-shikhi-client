import React, { useEffect, useState } from "react";
import Details from "../Details/Details";
import Topics from "../Topics/Topics";

const Lessons = () => {

    const [data,setData] = useState([])
    const [details,setDetails] = useState({})
    
    useEffect(() => {
        fetch('courseContent.json')
          .then((res) => {
            if (!res.ok) {
              throw new Error('Network response was not ok');
            }
            return res.json();
          })
          .then((result) => {setData(result) 
            })
          .catch((error) => console.error(error)); // Handle any fetch or JSON parsing errors
      }, []);
    const handleDetails = (topicId) => {
        
        const id = Math.trunc(topicId/10)

        setDetails(data[id-1].subtopics.find(topic=>topic.id===topicId)) 
          
    }
  return (
    <section class="bg-white dark:bg-gray-900 ">
            <h1 class="max-w-2xl text-gray-900 px-4 py-8 mx-auto mb-1 text-2xl font-bold tracking-tight leading-none md:text-3xl xl:text-4xl dark:text-white"><span className="text-transparent bg-clip-text bg-gradient-to-r to-orange-400 from-pink-500">Learning Bengali</span> Language Course</h1>
    <div class="grid  max-w-screen-xl px-4 pb-8 mx-auto md:gap-6  md:pb-16 md:grid-cols-12">
        <div className="mx-auto w-full place-self-top  md:col-span-8">
            <Details 
            details= {details}
            handleDetails={handleDetails}
            ></Details> 
        </div>
        <div class="  md:mt-0 md:col-span-4 md:flex">
            <Topics handleDetails= {handleDetails}></Topics>
        </div>                
    </div>
</section>
  );
};
 
export default Lessons;
