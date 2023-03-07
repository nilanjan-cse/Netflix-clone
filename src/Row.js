import React, { useState, useEffect } from 'react'
import axios from './axios'
import './Row.css'
// import {
//     BrowserRouter as Router,
//     Routes,
//     Route,
//     useRoutes,
//   } from "react-router-dom";
// import VideoPlayer from './VideoPlayer'
// import ReactPlayer from 'react-player';
import VideoDB from './VideoDB';
import VideoPlayer from './VideoPlayer';
// import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// import NewWindow from 'react-new-window'
const base_url = "https://image.tmdb.org/t/p/original/";
function Row({ title, fetchUrl, isLargeRow}) {
    
    const[movies, setMovies] = useState([]);  // initially movies[] is empty

    const [movieUrl,  setMovieUrl] = useState("");
    // const [videopath, setPath] = useState("");
    // const [moviename, setMovieName] = useState("");
    // const [movieposter, setMoviePoster] = useState("");
     useEffect(()=>{
        // when row loads make request to tmdb and fetch information for specified category
        // if [] , run once when row loads and then don't run again .
        // if [<some data>], run once and row loads and then reload the row every time <some data> changes/updates.
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            console.log(request.data.results);
            setMovies(request.data.results);
            return request ;
        }
        fetchData();
     },[fetchUrl]);

    //  console.log(movies);
    const loadMovie = (moviename) => {
        setMovieUrl(VideoDB.VideoDB(moviename));
        console.log("movie url = "+ movieUrl);
        ReactDOM.render(
            <React.StrictMode>
              <VideoPlayer URL={movieUrl} />
            </React.StrictMode>,
            document.getElementById('root')
          );
    }
    console.log(loadMovie)
    //  useEffect(() => {
    //     async function handleClick() {
    //         //var moviename = getMovie()
    //         //console.log(moviename);
    //         //console.log(VideoDB(moviename));
    //         setPath(VideoDB(moviename));
    //     //    <Route path="/VideoPlayer" element={<VideoPlayer videoname={moviename} />}></Route>
    //     }
    //     handleClick()    
    //  },[moviename])

    // const VideoPlayer = () => {
 
    //     return (
                
    //             <ReactPlayer controls url="https://www.youtube.com/watch?v=ueMwVGBwqRo" />
                
    //     )
    // }
    ////////////////////////////////

    // const PlayerRoute = (e) => {
    //     e.preventDefault();
    //     let routes = useRoutes([
    //       { path: "/VideoPlayer", element: <VideoPlayer /> },
    //     //   { path: "component2", element: <Component2 /> },
    //       // ...
    //     ]);
    //     return routes;
    //   };
      ////////////////////////////////
    // function handleClick(e){
    //     console.log("Inside Click Event Handler...")
    //     e.preventDefault();
    //     <Router>
    //         <PlayerRoute/>
    //     </Router>
    // }

    
    //  function LoadPlayer(moviename){
    //      console.log("Entering LoadPlayer function with value: ",moviename);
    //      //var PATH = VideoDB(moviename);
    //      //console.log("PATH received from VideoDB.js",PATH);
            
    //             // <BrowserRouter>
    //             //                 <Routes>
    //             //                     {console.log("Now Going to render the VidePlayer.js")}
    //             //                     <Route path="/video" element={<VideoPlayer/>} />
    //             //                 </Routes>
    //             // </BrowserRouter>
    //             <Router>
    //                 <PlayerRoute/>
    //             </Router>
           
    //  }
  

    return (
        <div className='row'>
            {/* title */}
            <h2>{title}</h2>

            <div className='row_posters'> 
                {/* container to hold the movie list of a row. */}
                {movies.map(movie => (
                    <img 
                        key={movie.id} 
                        className={`row_poster ${isLargeRow && "row_posterLarge"}`} 
                        src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                        alt={movie.name}
                        // onClick={loadMovie(movie.name)}
                    />
                ))}
            </div>
            {/* <YouTube videoId={trailerUrl} opts={opts} /> */}
            {/* {videopath} ? <VideoPlayer videoname={videopath} videoposter={movieposter} /> :  */}
        </div>
    )
}

export default Row
