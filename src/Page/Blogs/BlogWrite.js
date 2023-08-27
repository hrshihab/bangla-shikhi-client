import React, { useContext } from "react";
import { useForm } from 'react-hook-form';
import blogGif from './../../assets/Blogs/blog.gif'
import toast from 'react-hot-toast';
import { AuthContext } from './../../contexts/AuthProvider';
import { Link, Navigate, useNavigate } from "react-router-dom";





const BlogWrite = () => {
  const {register,handleSubmit,formState:{ errors }} = useForm();
  const {user} = useContext(AuthContext)
  const imageHostKey = process.env.REACT_APP_imgbb_key;

  const navigate = useNavigate();


  const handlePostBlog = (data,event) => {   
    const dateTime = new Date()
    const formatDate = (dateTime) => {
      return new Intl.DateTimeFormat("en", {
        day: "numeric",
        month: "long",
        year: "numeric",
        weekday: "long",
        hour: "numeric",
        minute: "numeric",
        timeZoneName: "short"
      }).format(dateTime);
    };

   // console.log(dateTime);
    

    const permission = window.confirm('Are you ready to post blog ?')
    if(permission){
      const formData = new FormData();
      formData.append('image',data.image[0]);
      const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
      fetch(url,{
        method:'POST', 
        body: formData
      })
      .then(res=>res.json())
      .then(imgData=> {
        if(imgData.success){
          const blogInfo = {
            title: data.title,
            category:data.category,
            image:imgData.data.url,
            description:data.description,
            dateTime:formatDate(dateTime),
            userName:user?.displayName,
            userEmail:user?.email,
            userPhoto:user?.photoURL
          }

          fetch('http://localhost:5000/blogWrite',{
            method:'POST',
            headers:{
              'content-type':'application/json'
            },
            body: JSON.stringify(blogInfo)
          })
          .then(res=> res.json())
          .then(result => {
            console.log(result);
            toast.success(`${data.title} added successfully`)
            event.target.reset()
            navigate('/blogs');
          })
          //console.log(blogInfo);
          
        }
        
      })
      
    }
    
    //console.log(data.image[0],' clicked');
    // const form = event.target; 
    // const title = form.title.value;
    // const description = form.description.value;
    // const category = form.category.value;
    // const image = form.image.files[0];

   

    
    //console.log('clicked');
  }
  return (

<section class="bg-white dark:bg-gray-900 ">
<section class=" border-b-2 rounded-b-[50px] md:rounded-b-[100px] xl:rounded-b-full shadow-md md:shadow-xl">
<div className="text-sm breadcrumbs pl-10">
          <ul>
            <li><Link to="/">Home</Link></li> 
            <li><Link to="/blogs">blogs</Link></li> 
            <li>Write Blog</li>
          </ul>
        </div>
    <div class="px-4 mx-auto max-w-screen-xl text-center py-5 lg:pb-8">
        <h1 class="mb-4 text-3xl font-extrabold tracking-tight leading-none text-gray-900 dark:text-white  md:text-3xl lg:text-4xl">Explore <span class="text-transparent bg-clip-text bg-gradient-to-r to-orange-400 from-pink-500">Our Blogs</span> </h1>
        <p class="mb-8 text-lg font-normal text-gray-600 lg:text-xl sm:px-16 lg:px-48">You can easily Share your blogs with us and can enhance your bangla learning skill. </p>
        <div class="flex flex-col space-y-2 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <Link to="/blogs" class="inline-flex justify-center items-center py-2 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                Get started
                <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </Link>
            <Link to="/" class="inline-flex justify-center text-gray-800 hover:text-gray-900 items-center py-2 px-5  dark:text-white  font-medium text-center bg-gray-200 rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                Learn more
            </Link>  
        </div>
    </div>
</section>
    <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 ">
        <div class="mx-auto place-self-center lg:col-span-7">
       
      {/* Open the modal using ID.showModal() method */}
      {/* <button className="btn" onClick={() => window.my_modal_5.showModal()}>
        open modal
      </button> */}
      {/* <dialog id="my_modal_5" className="modal modal-bottom  sm:modal-middle"> */}
        <form onSubmit={handleSubmit(handlePostBlog)}   className=" bg-white  shadow-2xl px-6 py-6 rounded-3xl">
          <h3 className="font-bold text-lg text-orange-700 text-center py-4">
            Write a blog !
          </h3>
          <div class="grid gap-4 mb-4 sm:grid-cols-2">
            <div className=" sm:col-span-2"> 
              
              <label
                for="name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Blogs Title
              </label>
              <input  {...register('title',{
                required:'Title is required',
                minLength:{value: 20 , message:'Title must be 20 characters long'}
              })}
                type="text"
                name="title"
                id="name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Type Blogs Title"
                required=""
              />
              {errors.title && <p className='text-red-500'>{errors.title.message}</p>}
            </div>
            
            <div>
              <label
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                for="file_input"
              >
                Upload file
              </label>
              <input
                {...register('image',{
                  required:'Photo is Required'
                })}
                class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                aria-describedby="file_input_help"
                id="file_input"
                type="file"
                name="image"
              />
              {errors.image && <p className='text-red-500'>{errors.image.message}</p>}
              <p
                class="mt-1 text-sm text-gray-500 dark:text-gray-300"
                id="file_input_help"
              >
                SVG, PNG, JPG or GIF{" "}
              </p>
            </div>
            <div>
              <label
                for="category"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Category
              </label>
              <select
                {...register('category',{
                  required:true
                })}
                
                id="category"
                name="category"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              >
                <option selected="">Entertainment</option>
                <option value="Technology">Technology</option>
                <option value="Cultural">Cultural</option>
                <option value="Educational">Educational</option>
                <option value="Others">Others</option>
              </select>{errors.category && <p className='text-red-500'>{errors.category.message}</p>}
            </div>
            <div class="sm:col-span-2">
              <label
                for="description"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Description
              </label>
              <textarea
                {...register('description',{
                  required:'Description minimum length should be 200 characters long',
                  minLength:{value: 200 , message:'Description minimum length should be 200 characters long'}
                })}
                name="description"
                id="description"
                rows="4"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Write Blogs description here"
              ></textarea>
               {errors.description && <p className='text-red-500'>{errors.description.message}</p>}
            </div>
          </div>
          <button
            type="submit"
            class="text-white inline-flex items-center bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-primary-800"
          >
            <svg
              class="mr-1 -ml-1 w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
            Submit Blog
          </button>
        
        </form>


            
        </div>
        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src={blogGif} className="rounded-3xl " alt="mockup"/>
        </div>                
    </div>
</section>





   
  );
};

export default BlogWrite;
