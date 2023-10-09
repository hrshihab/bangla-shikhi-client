import React from "react";
import './Next.css';

export default function Popup({setPopupStatus,setEvent,event,status}) {
    
    const handlePopCrossClick = () => {
        setPopupStatus('Not clicked');
        event.target.value = '';
        setEvent(event);
    }
    
  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center">
        <div className="bg-white p-2 rounded-lg w-auto">
            <div className="justify-between flex">
                <h1 className=" font-semibold text-xl text-gray-700"></h1>
                <div onClick={handlePopCrossClick}> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48"><path fill="none" stroke="#374151" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m14 14l20 20m-20 0l20-20"/></svg></div>
            </div>
            {status===0 && <div className="flex justify-between"> 
                            <div className="rounded-full bg-green-700 pt-2 pl-2"><svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56"><mask id="ipSCorrect0"><path fill="#fff" fill-rule="evenodd" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m4 24l5-5l10 10L39 9l5 5l-25 25L4 24Z" clip-rule="evenodd"/></mask><path fill="white" d="M0 0h48v48H0z" mask="url(#ipSCorrect0)"/></svg></div>
                            <p className="text-3xl ml-4 my-auto">Correct Answer</p>
                        </div>}
            {status===1 && <div className="flex justify-between"> <div className="rounded-full bg-red-700"><svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 20 20"><path fill="white" d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15l-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152l2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg></div><p className="text-3xl ml-4 my-auto">Wrong Answer</p></div>}
            <div class="skill-contain">  </div>
        </div>
    </div>
  );
}