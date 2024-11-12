import React from 'react'
import Header from './Header'
import { useNowPlayingMovies } from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {

  useNowPlayingMovies() ;

  return (
    <div className='h-screen text-5xl'>
      <Header />

      <div className='pt-[15vh]'>
      <MainContainer />
      <SecondaryContainer />
      </div>

      {/*
        - Main container 
          -- videoBackgroudn
          --videoTitle
        - Secondary container
          -- various list of movies (-,-,-,-,)
              --- cards ( alot of cards  (horizontally scrollable) )
      */}

    </div>
  )
}

export default Browse