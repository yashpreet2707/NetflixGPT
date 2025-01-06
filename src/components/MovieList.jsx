import MovieCard from './MovieCard'

const MovieList = ({title, movies}) => {

  return (
    <div>
        <div className='flex overflow-x-scroll'>
            <h1>{title}</h1>
            <div className=''>
                {movies.map((movie) => {
                    return <MovieCard key={movie.id} posterID={movie.poster_path} />
                })}
            </div>
        </div>
    </div>
  )
}

export default MovieList