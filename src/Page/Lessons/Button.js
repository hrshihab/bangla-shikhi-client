import React,{useState} from 'react'

export default function Button({text}) {
    const [status, setStatus] = useState(false);
    var desing;

    if(status) desing = "py-2.5 px-5 mr-2 mb-2 text-sm font-medium outline-none bg-white rounded-full border border-gray-200 bg-gray-100 text-blue-700 z-10 ring-4  dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700";
    else desing = "py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"

    const handleClick = () => {
        setStatus(!status);
    }
 return (
    <>
        <button onClick={handleClick} type="button" class={desing}>{text}</button>
    </>
  )
}
