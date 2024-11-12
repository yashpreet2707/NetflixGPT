import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {addTrailerVideo} from "../utils/movieSlice"
import {API_OPTIONS} from  "../utils/constants"

export const useTrailerID = (movieID) => {

    const dispatch = useDispatch() ;

    useEffect(()=>{
      getMovieVideos() ;
    }, [])
  
    const getMovieVideos = async () => {
      const data = await fetch('https://api.themoviedb.org/3/movie/'+movieID+'/videos?language=en-US', API_OPTIONS) ;
      const json = await data.json() ;
  
      const filteredVideo = (json.results).filter((video) => video.type === "Trailer")
      const trailer = filteredVideo.length ? filteredVideo[0] : json.results[0] ;
      dispatch(addTrailerVideo(trailer.key))
    }
}
