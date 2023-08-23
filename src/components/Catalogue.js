// Catalogue.js
// API - useEffect, useState, axios

import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Catalogue = () => {

    const [movies, setMovies] = useState([]);

    useEffect( () => {
        console.log(process.env.REACT_APP_API_KEY);
        axios( {
            url: `https://api.themoviedb.org/3/discover/movie`,
            params: {
            api_key: process.env.REACT_APP_API_KEY,
            language: 'en-US',
            sort_by: 'popularity.desc',
            include_adult: 'false',
            include_video: 'false',
            page: 1,
            primary_release_year: 1999,
            },
        }).then( (results) => {
           const apiResults =  results.data.results
           setMovies(apiResults);
        })
    }, [] )

    return (

        <ul className="catalogue">
            {/* on each loop i will need to create a new li and within it a new img.  inside my img i will need to set my src an alt */}
            {movies.map( (movie) => {
                return (
                <li key={movie.id} data-movieid={movie.id}>
                    <Link to={`/movie/${movie.id}`}>
                        <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={`Poster for ${movie.original_title}`} />
                    </Link>
                    
                </li>
                )
            } )}
        </ul>
       
    );
}

export default Catalogue;