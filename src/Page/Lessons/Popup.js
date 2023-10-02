import React from "react";
import Button from "./Button.js";

export default function Popup({handleReports}) {
    const handleReportSubmit = () => {
        handleReports();
    }
  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-white p-2 rounded-lg w-auto">
        <div className="justify-between flex">
            <h1 className=" font-semibold text-xl text-gray-700">
            Tell us Problems With Details
            </h1>
            <div onClick={handleReports}> <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 48 48"><path fill="none" stroke="#374151" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m14 14l20 20m-20 0l20-20"/></svg></div>
        </div>
        
        <div className = "mt-2"> 
            <Button text="Problem On Aduio"></Button>
            <Button text="Text not Showing"></Button>
            <Button text="No content"></Button>
        </div>
        <div className = "mt-2">
            <Button text="Concept not Clear"></Button>
            <Button text="Video is not Running"></Button>
            <Button text="Video is not Clear"></Button>  
        </div>
        <div className = "mt-2">
            <Button text="Problem on PDF"></Button>
            <Button text="Small font"></Button>
            <Button text="Wrong Title"></Button>  
        </div>
        
        <div className="text-center border-gray-700">
          <button onClick = {handleReportSubmit} className="px-5 py-2 bg-gray-500 text-white rounded-full">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}