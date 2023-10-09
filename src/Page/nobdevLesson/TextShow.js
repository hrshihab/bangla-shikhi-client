import React from 'react'
//import img from './logo512.png'

export default function TextShow({characters,topicId}) {
    var x;
    //console.log(characters);
     characters.find((character)=> {
        if(character.topicId===topicId) x = character;
    })

  return (
    <div className = "rounded-md grid grid-cols-1 text-xl">
        <img src={x.imgSrc} className = "rounded w-[275px] h-[183px]"/>
        <p className=" block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-500 text-bold">{x.title}</p>
        <p>{x.text1}</p>
        <p>{x.text2}</p>
        <p>{x.text3}</p>
        <p className="italic ">{x.text4}</p>
    </div>
  )
}
