import React from 'react'

export default function VideoShow({details}) {
    const {link} = details;
  return (
    <div class="aspect-w-16 aspect-h-10">
        <iframe src={link} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
    </div>
  )
}
