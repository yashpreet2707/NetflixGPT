import { RiInformationLine, RiPlayFill } from '@remixicon/react'
import React from 'react'

const VideoTitle = ({title,text}) => {

  return (
    <div className='bg-gradient-to-r frfom-black absolute w-screen h-[80vh] aspect-video z-10 p-4 pl-5 xl:pl-10 pb-20 flex flex-col justify-end'>
      <h1 className='text-5xl font-bold mb-4'>{title}</h1>
      <p className='text-sm xl:text-base hidden xl:block lg:w-[40vw] pt-2 pb-4'>{text}</p> 
      <div className='flex gap-x-4'>
        <button className='border border-black px-3 py-2 text-lg rounded-sm bg-white text-black hover:bg-opacity-60 flex justify-evenly items-center gap-x-1 font-semibold'><RiPlayFill/> Play</button>
        <button className='border border-black px-3 py-2 text-lg rounded-sm bg-gray-400 bg-opacity-45 flex justify-evenly items-center gap-x-2 font-semibold'><RiInformationLine/> More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle