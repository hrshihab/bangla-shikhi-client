import React from "react";
import Details from "../Details/Details";
import Topics from "../Topics/Topics";

const Lessons = () => {
    const handleDetails = (id) => {
        console.log('ok ',id);
    }
  return (
    <section class="bg-white dark:bg-gray-900 ">
            <h1 class="max-w-2xl text-gray-900 px-4 py-8 mx-auto mb-1 text-2xl font-bold tracking-tight leading-none md:text-3xl xl:text-4xl dark:text-white"><span className="text-transparent bg-clip-text bg-gradient-to-r to-orange-400 from-pink-500">Learning Bengali</span> Language Course</h1>
    <div class="grid border-2 border-red-600 max-w-screen-xl px-4 pb-8 mx-auto md:gap-6  md:pb-16 md:grid-cols-12">
        <div className="mx-auto w-full place-self-top border-blue-600 border-2 md:col-span-8">
            <Details></Details> 
        </div>
        <div class=" md:mt-0 md:col-span-4 md:flex">
            <Topics handleDetails= {handleDetails}></Topics>
        </div>                
    </div>
</section>
  );
};

export default Lessons;
