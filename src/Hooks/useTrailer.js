import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNowTrailer } from '../utils/movieSlice'
import { TMDB_OPTIONS } from '../utils/constants'

const useTrailer=(movieid)=>{
    const dispatch=useDispatch();
    const playingTrailer=useSelector((store)=>store.movies.nowTrailer);
    const AllVideos=async ()=>{
     const data=await fetch('https://api.themoviedb.org/3/movie/'+movieid+'/videos?language=en-US', TMDB_OPTIONS);
       const json=await data.json();
       const filtervideos=json?.results.filter(item=>item.type==="Trailer"); // filter out all videos consists of trailer type
       const trailer=filtervideos.length ? filtervideos[0]:json[0]; // if we have trailer videos take first trailer video if not take first video
       console.log(filtervideos);
       dispatch(addNowTrailer(trailer));
     }
     useEffect(()=>{
       !playingTrailer && AllVideos();
     },[])
}
export default useTrailer;