import React from 'react'
import ReactPlayer from 'react-player'

export default function VideoShow({details}) {
    const {link} = details;
    var played;

    const updateTime = (state) => {
      //console.log('updateTime', state);
      played = state.playedSeconds;
      console.log('played', played);
    }
  return (
    <>
      <ReactPlayer
        url = {link}
        onProgress={updateTime}
        controls = {true}
      > </ReactPlayer>
    </>
  )
}
