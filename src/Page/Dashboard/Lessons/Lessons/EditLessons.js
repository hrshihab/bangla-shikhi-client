import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

const EditLessons = ({handleEdit,isEdit,setIsPreview,singleLessons}) => {

    const {estimatedCompletionTime,id:topicId,nextTopicId,prevTopicId,type,title,activeStatus} = singleLessons;
    //console.log(title);
    const [isEditable, setIsEditable] = useState(false);
    const [dataLength,setDataLength] = useState(0)



const {register,handleSubmit,reset,formState:{errors}} = useForm()


const handleUpdateLessons = (data) => {
   
  console.log(data);
  const indexData = 
    { id: data.topicId, type: data.type, title: data.title, totalTopics: 0, estimatedCompletionTime: data.estimateTime,  nextTopicId: data.nextId, prevTopicId: data.prevId }
    //console.log(indexData);


    const newArray = [];
const parts = {};


for (const key in data) {
  if (key.includes("#")) {
    const field = key.split("#")[0];
    const id = key.split("#")[1];
    console.log(field,id);
    if (!parts[id]) {
      parts[id] = {};
    }
    parts[id][field] = data[key];
  }
}

for (const id in parts) {
  const newObj = {
    id,
    topicId: data.topicId,
    ...parts[id]
  };
  newArray.push(newObj);
}

console.log(newArray);


 // Reset the form after a short delay
 
    // reset form with user data
    reset(data);





}

    const {data:contentsDetails = [],isLoading ,refetch} = useQuery({
        queryKey:[topicId],
        queryFn: async () => {
          const res = await fetch('http://localhost:5000/lessons') 
          const data = await res.json()
          const filtredItem = data.filter(item=> item.topicId === topicId)
          setDataLength(filtredItem.length)
          //console.log(Object.keys(filtredItem[0]));
          return filtredItem
        }
      })
    //console.log(Object.keys(contentsDetails[0]));
  return (
    <form onSubmit={handleSubmit(handleUpdateLessons)} id="drawer-update-product" class={` fixed top-20 left-0 z-40 w-full h-5/6 max-w-3xl p-4 overflow-y-auto transition-transform ${isEdit ? '': "-translate-x-full"} bg-white dark:bg-gray-800`} tabindex="-1" aria-labelledby="drawer-update-product-label" aria-hidden="true">
    <h5 id="drawer-label" class="inline-flex items-center mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-gray-400">Modify Lessons</h5>
    <button onClick={handleEdit } type="button" data-drawer-dismiss="drawer-update-product" aria-controls="drawer-update-product" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
        <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
        <span class="sr-only">Close menu</span>
    </button>
    <div class="grid gap-4  ">
        <div class="space-y-4  sm:space-y-6">
            <div>
                <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title of Topics</label>
                <input type="text"   name="title"  {...register('title',{required:true})} id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" value='df' required=""/>
                {errors.title && <p className='text-red-500'>{errors.title.message}</p>}

            </div>
            <div class=" grid sm:grid-cols-3 sm:gap-6 ">
            <div>
                <label for="product-brand" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Topic ID</label>
                <input type="text"  id="product-brand" name='topicId'   {...register('topicId',{required:true })}   class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" value={topicId} placeholder="Product Brand" required=""/>
                {errors.topicId && <p className='text-red-500'>{errors.topicId.message}</p> }
            </div>
            <div><label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Type</label><select name='type' {...register('type')} id="category" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"><option selected="">{type}</option><option defaultValue="pdf">PDF</option><option defaultValue="Image">Image</option><option defaultValue="video">Video</option><option defaultValue="exercise">Exercise</option></select></div>
            <div>
                <label for="item-weight" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Next Id</label>
                <input type="number" readOnly  name='nextId'   {...register('nextId',{required:true })}  id="item-weight" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" value={nextTopicId} placeholder="Ex. 12" required=""/>
            </div>
            <div>
                <label for="length" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Previous Id</label>
                <input type="number" readOnly  name='prevId'   {...register('prevId',{required:true })} id="lenght" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" value={prevTopicId} placeholder="Ex. 105" required=""/>
            
            </div>
            <div>
                <label for="breadth" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Active Status</label>
                <input type="text"  name="status" readOnly   {...register('status')} id="breadth" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" value={singleLessons?.activeStatus?activeStatus:'False'} placeholder="" />
                {errors.status && <p className='text-red-500'>{errors.status.message}</p> }
            </div>
            <div>
                <label for="width" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Estimated Time</label>
                <input type="text"name='estimateTime'   {...register('estimateTime')} id="width" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" value={singleLessons?.estimatedCompletionTime?estimatedCompletionTime:'15 min'} placeholder="15 min" />
                {errors.estimateTime && <p className='text-red-500'>{errors.estimateTime.message}</p> }
            </div>
            
        </div>
        <div>
    <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
    {contentsDetails.map((object, index) => (
        <div key={index} className="w-full flex flex-wrap px-2 py-3  mb-6 bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-700 dark:border-gray-600">
             
            {
                
            
            Object.entries(object).map(([key, value]) => {
               
                // Skip "id" and "topicId" fields
                if ( key === "topicId"|| key === '_id') {
                    return null; // Skip rendering for these fields
                }
                
                
                return (
                    <div  className="w-full gap-1 flex  px-2.5 py-1">
                        <input
                            type="text"
                            id={`field-${key}`}
                            className="w-1/4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            defaultValue={key}
                            placeholder="Field"
                            required=""
                        />
                        <input
                            type="text"
                            id={`description-${key}`}
                            className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            defaultValue={value}
                            name={key}
                               {...register(`${key+'#'+object.id}`)}
                            placeholder="Description"
                            required=""
                        />
                    </div>
                    
                );
            })}
        </div>
    ))}
</div>

        </div> 
     
    </div>
    <div class="grid grid-cols-2 gap-4 mt-6 sm:w-1/2">
        <button type="submit"  class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Update product</button>
        <button type="button" class="text-red-600 inline-flex justify-center items-center hover:text-white border border-red-600 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">
            <svg aria-hidden="true" class="w-5 h-5 mr-1 -ml-1" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
            </svg>
            Delete
        </button>
    </div>

</form>
  );
};

export default EditLessons;