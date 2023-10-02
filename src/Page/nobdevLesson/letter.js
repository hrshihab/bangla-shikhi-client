import React,{useState} from 'react';



const Letter = (props) => { 
    const {borno,text,audioLink} = props;
    const playAudio = () => {
        console.log('playing audio');
    }

    return (
        <div >
            <div className="border rounded-md shadow" >
                <p className = "text-transparent bg-gradient-to-r from-[#E74793] to-[#FF894C] bg-clip-text font-extrabold text-8xl text-center pt-3">{borno}</p>
                <div className = 'grid grid-cols-10'>
                    <button onClick={playAudio} className = "px-4 col-start-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 14 14"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3 5H1.5a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1H3Zm0 4l3.91 2.81a1 1 0 0 0 1 .08A1 1 0 0 0 8.5 11V3a1 1 0 0 0-.5-.89a1 1 0 0 0-1 .08L3 5m9.5-1a4.38 4.38 0 0 1 1 3a6.92 6.92 0 0 1-1 3.5m-2-5A2.19 2.19 0 0 1 11 7a2.19 2.19 0 0 1-.5 1.5"/></svg>
                    </button>
                </div>
                
                <p className = "text-gray-500 text-bold"> {text}</p>
                
            </div>
        </div>
    );
};
export default Letter;