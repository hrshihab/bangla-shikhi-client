import React ,{useEffect,useState} from 'react';
import Letters from '../../nobdevLesson/Letters.js'
import TextShow from '../../nobdevLesson/TextShow.js'
import VideoShow from '../../nobdevLesson/VideoShow';
import PdfShow from '../../nobdevLesson/PdfShow';
import { Link } from 'react-router-dom';
import Vowel from '../../nobdevLesson/vowel.json';
import PopUp from '../Popup.js';
import PopUp2 from '../PopUp2.js';
import Quiz from '../../nobdevLesson/quiz/Quizz.js';

const Details = ({details,handleDetails}) => {
  const {prevTopicId,nextTopicId,id} = details
  const [reportStatus, setReportStatus] = useState(false);
  const [shareStatus, setShareStatus] = useState(false);

  const handleReport = () => {
    setReportStatus(!reportStatus);
  }

  const handleShare = () => {
    setShareStatus(!shareStatus);
  }
  
{/*
   useEffect(()=> {
      
        fetch('http://localhost:5000/details')
        .then((res)=> {
          if(!res.ok) {
            throw new Error('Deatails cannot load')
          }

           return res.json();
        })
        .then((result) => {
          console.log(result);
          setVowel(result);
          
        })
        .catch((error)=> {
          console.error(error.message);
        })
   },[]);
  */}
  return (
    <div className='mx-auto shadow rounded-xl'>
      <div class=" my-4 py-6 border-pink-600 mx-auto  px-10 overflow-x-auto">
        {
            details.type==='video' && <VideoShow details={details} > </VideoShow>
        }
        {
            details.type==='text' && <TextShow characters={Vowel} topicId={details.id}></TextShow>
        }
        {
            details.type==='letter' && <Letters characters={Vowel} topicId = {details.id}></Letters>
        }
        {
          details.type ==='pdf' && <PdfShow details={details}></PdfShow>
        }
        {
          details.type ==='exercise' && <Quiz> </Quiz>
        }
        </div> 
        <div className='flex justify-between px-4'>
          <h1 class="max-w-2xl mb-4  text-lg font-bold tracking-tight leading-none md:text-xl xl:text-xl dark:text-white">{details?.title}</h1>

          <div className='flex gap-4'>
              <Link onClick={()=> handleDetails(prevTopicId)} class="inline-flex btn-sm items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 hover:cursor-pointer rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                Previous
              </Link>
              <Link onClick={()=> handleDetails(nextTopicId)} class="inline-flex btn-sm items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg hover:cursor-pointer bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                Next
                <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </Link>
          </div>

        </div>
        <div>
          <p>{details.subtitiles}</p>
        </div>
        <div className="flex gap-4 border rounded-lg">
          <button onClick ={handleShare} type="button" class="mx-2 my-auto rounded-lg  px-2 py-2.5 hover:bg-gray-200 inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15"><path fill="#9ca3af" d="M10 2.499a2.5 2.5 0 0 1 5 0a2.5 2.5 0 0 1-3.566 2.26L9.131 7.52l2.038 2.858A2.5 2.5 0 0 1 15 12.493a2.5 2.5 0 1 1-4.559-1.417L8.246 8H4.949A2.501 2.501 0 0 1 0 7.495A2.5 2.5 0 0 1 4.95 7h3.312l2.37-2.84A2.488 2.488 0 0 1 10 2.499Z"/></svg>
            <p className="mx-2 text-sm text-gray-400  font-medium text-center">Share</p> 
          </button>
          <button onClick={handleReport} type="button" class="mt-2 my-auto rounded-lg px-2 py-2.5 hover:bg-gray-200 inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21"><path fill="none" stroke="#9ca3af" stroke-linecap="round" stroke-linejoin="round" d="M5.5 17.5v-11m0 0c.667-1.333 1.667-2 3-2c2 0 2 2 4 2c1.333 0 2.333-.333 3-1v6c-.667.667-1.667 1-3 1c-2 0-2-2-4-2c-1.333 0-2.333.667-3 2z"/></svg>
          <p className="mx-2 text-sm text-gray-400  font-medium text-center">Report</p> 
          </button>
        </div>
        {reportStatus && <PopUp handleReports= {handleReport}></PopUp>}
        {shareStatus && <PopUp2 handleShare={handleShare}></PopUp2>}
        <h2>Chapter Material</h2>
        <div>

        </div>
    </div>
  );
};

export default Details;