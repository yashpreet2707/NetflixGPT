import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {

  const movies = useSelector(store => store.movies)

  return (
    <div className='bg-red-300 h-[100vh] absolute top-[64vh] xl:top-3/4 z-50 '>
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
    </div>
  )
}

export default SecondaryContainer
