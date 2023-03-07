import React, { useState, useEffect } from 'react'
import axios from './axios'
import requests from './requests'
import './Banner.css'
function Banner() {
    const [movie, setMovie] = useState([]);

    // this code below is responsible for randomizing the banner image that shows on top
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            console.log(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length -1)
                ]
            );
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length -1)
                ]
            )
            return request;
        }
        fetchData();
    }, []);
    console.log(movie);
    // for some banners , the description is too long. So truncating it to 150 words only
    function truncate(str, n){
        return str?.length > n ? str.substr(0, n-1) + "..." : str;
    }
    // end of truncate function
    return (
        <header className='banner'
            style={{
                backgroundSize:"cover",
                backgroundImage: `url(
                    "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
                )`,
                backgroundPosition: "center center",
            }}
        
        > {/* <<< this header gets a background image that changes on load */}
            
            <div className='banner_contents'> {/* Contents inside the banner image */}
                {/* title */}
                <h1 className='banner_title'>
                    {movie?.title || movie?.name || movie?.original_name} {/* Show either of title/name/original_name */}
                </h1>

                <div className='banner_buttons'> {/* div > 2 buttons:  Play & My List */}
                    <button className='banner_button'> Play</button>
                    <button className='banner_button'> My List</button>
                </div>

                <h1 className='banner_description'> {/* description */}
                    {/* {movie?.overview} */}
                    {truncate(movie?.overview,150)}
                </h1>

            </div>
            
            <div className='banner-fadeBottom' /> {/* Put a little fading on the banner background */}
            
        </header>
    )
}

export default Banner
