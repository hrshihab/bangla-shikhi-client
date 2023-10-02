import React from 'react'

export default function ({details}) {
    const {link} = details;
  return (
    <div>
        <iframe src={link} width="750" height="600"> </iframe>
    </div>
  )
}

