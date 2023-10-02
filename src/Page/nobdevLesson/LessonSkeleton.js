import React from 'react'

export default function LessonSkeleton() {
  return (
    <section class="bg-white animate-pulse">
        <div className="text-sm breadcrumbs pl-10">
          <ul>
            <li className="bg-gray-200 w-[37px] rounded-sm h-[20px]" >    </li> 
            <li className = "bg-gray-200 w-[73px] rounded-sm h-[20px]">       </li>
          </ul>
        </div>
        <div className="mt-5 w-[570px] h-[48px] bg-gray-200 rounded-xl px-4 py-8 mx-auto "> </div>
      
        <div class="grid  mt-7 max-w-screen-xl px-4 pb-8 mx-auto md:gap-6  md:pb-16 md:grid-cols-12">
            <div className=" mx-auto w-full place-self-top  md:col-span-8 ">
                <div className="mx-auto w-[824px] h-[621px] shadow rounded-xl bg-gray-200 relative"> 
                    <div role="status" class="space-y-8 animate-pulse md:space-y-0 md:space-x-8 md:flex md:items-center">
                        <div class="flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
                            <svg class="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
                            </svg>
                        </div>
                    </div>
                    <div class="w-full">
                        <div class="h-2.5 bg-gray-100 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                        <div class="h-2 bg-gray-100 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
                        <div class="h-2 bg-gray-100 rounded-full dark:bg-gray-700 mb-2.5"></div>
                        <div class="h-2 bg-gray-100 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
                        <div class="h-2 bg-gray-100 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
                        <div class="h-2 bg-gray-100 rounded-full dark:bg-gray-700 max-w-[360px]"></div>

                        <div class="h-2.5 bg-gray-100 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                        <div class="h-2 bg-gray-100 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
                        <div class="h-2 bg-gray-100 rounded-full dark:bg-gray-700 mb-2.5"></div>
                        <div class="h-2 bg-gray-100 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
                        <div class="h-2 bg-gray-100 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
                        <div class="h-2 bg-gray-100 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                    </div>
                    <div className="grid grid-cols-8  w-full h-[50px] bg-gray-600 bottom-px absolute gap-x-2">
                        <div className="my-auto grid col-start-7 h-[25px] bg-gray-200 rounded-lg"></div>
                        <div className = " my-auto bg-gray-200 h-[25px] rounded-lg"></div>
                    </div>
                </div>
            </div>

            <div class="grid w-full md:w-4/5 md:mt-0 md:col-span-4 md:flex">
                <section className='mx-auto space-y-2'>
                    {/* your code goes here */}
                    <div className='px-4 py-2 shadow-md rounded-lg bg-gray-200 '>
                        <div className='grid grid-cols-2 gap-x-4 justify-center items-center mt-2'>
                            <div className= 'w-[184px] h-[28px] '>
                                <div className='w-[145px] h-[27px] bg-gray-100 rounded-xl'></div>
                            </div>
                            <div>
                                <div class="flex justify-between items-center gap-4">
                                    <div class="w-full bg-gray-100 rounded-full h-2.5 dark:bg-gray-700"></div>
                                    <span class="text-sm font-medium text-blue-700 dark:text-white">  </span>
                                </div>
                            </div> 
                            <div class="p-3 col-span-2 "> 
                                <div class="relative w-[270px] h-[48px] rounded-xl bg-gray-100"> </div>
                            </div>
                        </div>
                    </div>
                    {/* your code goes here */}
                    <div class=" bg-gray-300 grid h-[500px] w-full px-4 py-2 shadow-md rounded-lg overflow-y-auto ">
                        <ul class="space-y-2 w-full font-medium">
                            <li className="grid grid-cols-4 relative w-[275px] h-[62px] rounded-xl bg-gray-100"><div className="rounded-full h-[40px] w-[40px] bg-gray-200 my-auto mx-2.5"></div> <div className="col-span-3 w-[200px] bg-gray-200 h-[30px] my-auto rounded-lg"></div></li>
                            <li className="grid grid-cols-4 relative w-[275px] h-[62px] rounded-xl bg-gray-100"><div className="rounded-full h-[40px] w-[40px] bg-gray-200 my-auto mx-2.5"></div> <div className="col-span-3 w-[200px] bg-gray-200 h-[30px] my-auto rounded-lg"></div></li>
                            <li className="grid grid-cols-4 relative w-[275px] h-[62px] rounded-xl bg-gray-100"><div className="rounded-full h-[40px] w-[40px] bg-gray-200 my-auto mx-2.5"></div> <div className="col-span-3 w-[200px] bg-gray-200 h-[30px] my-auto rounded-lg"></div></li>
                            <li className="grid grid-cols-4 relative w-[275px] h-[62px] rounded-xl bg-gray-100"><div className="rounded-full h-[40px] w-[40px] bg-gray-200 my-auto mx-2.5"></div> <div className="col-span-3 w-[200px] bg-gray-200 h-[30px] my-auto rounded-lg"></div></li>
                            <li className="grid grid-cols-4 relative w-[275px] h-[62px] rounded-xl bg-gray-100"><div className="rounded-full h-[40px] w-[40px] bg-gray-200 my-auto mx-2.5"></div> <div className="col-span-3 w-[200px] bg-gray-200 h-[30px] my-auto rounded-lg"></div></li>
                            <li className="grid grid-cols-4 relative w-[275px] h-[62px] rounded-xl bg-gray-100"><div className="rounded-full h-[40px] w-[40px] bg-gray-200 my-auto mx-2.5"></div> <div className="col-span-3 w-[200px] bg-gray-200 h-[30px] my-auto rounded-lg"></div></li>
                            <li className="grid grid-cols-4 relative w-[275px] h-[62px] rounded-xl bg-gray-100"><div className="rounded-full h-[40px] w-[40px] bg-gray-200 my-auto mx-2.5"></div> <div className="col-span-3 w-[200px] bg-gray-200 h-[30px] my-auto rounded-lg"></div></li>
                        </ul>
                    </div>
                </section>
                {/* your code goes here */}
            </div>  
                        
      </div>
    </section>
  )
}
