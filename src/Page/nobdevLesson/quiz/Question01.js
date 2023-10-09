import React,{useState} from 'react'
import PopUp from './PopUpQuiz';

export default function Question01({arr,questionNo}) {
    const [solveStatus, setSolveStatus] = useState('Unsolved');
    const [popupstatus, setPopupStatus] = useState('Not clicked');
    const [answer, setAnswer] = useState();
    var design;

    if(solveStatus==='Unsolved') design = "text-red-500";
    else design = "text-green-500";

    const handleClicks = (event)  => {
          if(answer.target.value===arr[2]) {
            setSolveStatus('Solved');
            setPopupStatus('clicked');
          }
          else {
            setPopupStatus('wrongclicked');
          }

          setTimeout(()=> {
            setPopupStatus('Not clicked');
            answer.target.value = '';
            setAnswer(answer);
          },5000)
    }
    const handleChange = (e) => {
       setAnswer(e);
    }
   
  return (
    <div className="w-full mx-auto p-4 rounded-xl shadow-lg">
      <div className="justify-between flex">
            <h1 className=" font-semibold text-xl text-gray-700">
            Question No. 0{questionNo}
            </h1>
            <div className={design}>{solveStatus}</div>
        </div>
      <div className="mb-4">
        <p className="text-3xl">What letter should be in the Blank?</p>
        <div > 
            <label for='lastName' className='text-transparent bg-gradient-to-r from-[#E74793] to-[#FF894C] bg-clip-text font-extrabold text-7xl text-center pt-3'>{arr[0]}, </label>
            <label className='text-transparent bg-gradient-to-r from-[#E74793] to-[#FF894C] bg-clip-text font-extrabold text-7xl text-center pt-3'>{arr[1]}, </label>
		        <input type='text' onChange={handleChange} className='mx-auto focus:border-none w-[141px] h-[108px] caret-[#F87660] text-transparent bg-gradient-to-r from-[#E74793] to-[#FF894C] bg-clip-text font-extrabold text-7xl text-center'/>
            <label for='lastName' className='text-transparent bg-gradient-to-r from-[#E74793] to-[#FF894C] bg-clip-text font-extrabold text-7xl text-center pt-3'>, {arr[3]},</label>
            <label for='lastName' className='text-transparent bg-gradient-to-r from-[#E74793] to-[#FF894C] bg-clip-text font-extrabold text-7xl text-center pt-3'> {arr[4]}</label>
        </div>
      </div>

      <button onClick={handleClicks} className="bg-green-500 text-white px-4 py-2 rounded-lg ">Check Answer</button>
      {popupstatus === 'clicked' && <PopUp setPopupStatus={setPopupStatus} setEvent={setAnswer} event={answer} status={0}></PopUp>}
      {popupstatus === 'wrongclicked' && <PopUp setPopupStatus={setPopupStatus} setEvent={setAnswer} event={answer} status ={1} ></PopUp> }
    </div>
  )
}
