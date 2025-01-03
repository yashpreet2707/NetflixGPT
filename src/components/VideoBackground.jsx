import React  from 'react'
import { useTrailerID } from '../hooks/useTrailerID';
import { useSelector } from 'react-redux';

const VideoBackground = ({movieID}) => {

  useTrailerID(movieID) ;

  const youtubeID = useSelector(store => store.movies.trailerID)

  return (
    <div className='h-[100vh]'>
      <iframe className='relative w-screen -top-[10vh] h-[80vh] xl:h-[90vh] object-fill' src={"https://www.youtube.com/embed/"+youtubeID+"/?&autoplay=1&mute=1"} referrerPolicy="strict-origin-when-cross-origin"></iframe>
    </div>
  )
}

export default VideoBackground