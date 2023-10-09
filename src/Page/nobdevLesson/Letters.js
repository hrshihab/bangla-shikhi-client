import React,{useEffect, useState} from 'react'
import Letter from './letter.js'



export default function Letters(props) {
    const {characters,topicId} = props;

  return (
    <div className='border-black grid grid-cols-1 gap-y-10 md:grid-cols-3 md:gap-y-10 md:gap-x-10 place-content-center'>
        {
            characters.map((character)=> {
            if(character.topicId===topicId) return <Letter key = {character.id} borno={character.borno} color={character.color} id = {character.id} text = {character.text} topicId={topicId} audioLink={character.audioLink}> </Letter>
            }
            )
        }
    </div>
  );
};
