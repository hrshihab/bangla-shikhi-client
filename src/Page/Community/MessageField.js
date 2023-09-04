import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { BiSolidSend } from "react-icons/bi";
import { AuthContext } from "../../contexts/AuthProvider";

const MessageField = ({refetch}) => {
  const  {user} = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleMessage = (data,event) => {
    const dateTime = new Date()
    const formatDate = (dateTime) => {
      return new Intl.DateTimeFormat("en", {
        day: "numeric",
        month: "long",
        hour: "numeric",
        minute: "numeric",
       
      }).format(dateTime);
    }
      const messageInfo = { 
        message:data.message,
        userName:user?.displayName,
        userEmail:user?.email,
        userPhoto:user?.photoURL?user.photoURL:'https://i.ibb.co/8jRk4wc/6073874.png',
        date:formatDate(dateTime)
      }
      fetch('http://localhost:5000/messages',{
            method:'POST',
            headers:{
              'content-type':'application/json'
            },
            body: JSON.stringify(messageInfo)
          })
          .then(res=> res.json())
          .then(result => {
           
              refetch()
              event.target.reset()
            
            
          })

  }
  return (
    <div className="py-6">
      <form
        onSubmit={handleSubmit(handleMessage)}
        class="w-full max-w-xl mx-auto"
      >
        <div class="relative">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
            <svg
              class="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 16"
            >
              <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
              <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
            </svg>
          </div>
          <input
            type="text"
            className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter your message here..."
            {...register("message", { required: true, minLength: 1 })}
            required
          />
          <button
            type="submit"
            className="text-white absolute right-2.5 bottom-1.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md px-2 py-1 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <BiSolidSend />
          </button>
        </div>
      </form>
    </div>
  );
};

export default MessageField;
