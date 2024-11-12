import React  from 'react'
import { useTrailerID } from '../hooks/useTrailerID';
import { useSelector } from 'react-redux';

const VideoBackground = ({movieID}) => {

  useTrailerID(movieID) ;

  const youtubeID = useSelector(store => store.movies.trailerID)

  return (
    <div className='bg-cyan-600 h-[80vh]'>
      <iframe className='absolute w-screen -top-[10vh] h-[90vh] object-fill' src={"https://www.youtube.com/embed/"+youtubeID+"/?&autoplay=1&mute=1"} referrerPolicy="strict-origin-when-cross-origin"></iframe>
    </div>
  )
}

export default VideoBackground