import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from "./VideoTitle"
import VideoBackground from "./VideoBackground"

const MainContainer = () => {

    const movies = useSelector(store => store.movies?.nowPlayingMovies) ;
    
    if (movies === null) return ; // also known as early returning (!movies) - ye bhi likh sakte the

    const random = Math.floor(Math.random()*20+1)
    const mainMovie = movies[random]

    const {original_title, overview, id} = mainMovie ;

  return (
    <div className='bg-green-400 h[60vh] '>
      <VideoTitle title={original_title} text={overview} />
      <VideoBackground movieID={id} />
    </div>
  )
}

export default MainContainer