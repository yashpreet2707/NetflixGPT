import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS, Now_Playing } from "../utils/constants";
import {addNowPlayingMovies} from "../utils/movieSlice"

export const useNowPlayingMovies = () => {
    const dispatch = useDispatch() ;

  useEffect(()=>{
    getNowPlayingMovies() ;
  }, [])

  const getNowPlayingMovies = async () => {
    const data = await fetch(Now_Playing, API_OPTIONS) ;
    const json = await data.json() ;

    dispatch(addNowPlayingMovies(json.results))
  }
}
