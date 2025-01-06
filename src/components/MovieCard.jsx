import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({posterID}) => {


  return (
    <div className=''>
      <img className='w-48' src={IMG_CDN_URL + posterID} alt="movie-poster" />
    </div>
  )
}

export default MovieCard