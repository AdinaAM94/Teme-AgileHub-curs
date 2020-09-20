import React, {useEffect, useState} from 'react'
import { useParams, Link } from 'react-router-dom'

export default function MoviesDetails() {
    //ne trebuie id-ul, pentru asta vom folosi un nou hook si anume useParams
    const {movieId} = useParams(); // returneaza un obiect cu toti parametrii routei, si trebuie sa scoatem un sigur parametru
    const [movie, setMovie] = useState(null);
 
useEffect(() => {
    async function getMovie () {
        const data = await fetch(`http://movies-app-siit.herokuapp.com/movies/${movieId}`).then(res => res.json());
        setMovie(data);
    }
    
    getMovie();
}, [movieId]);

if(!movie) { 
    return <h1>Loading...</h1>
}

    return (
        <div>
            <h1>{movie.Title}</h1>
            <div>{movie.Year}</div>
            <div>{movie.Runtime}</div>
            <div>{movie.Genre}</div>
            <div>{movie.Language}</div>
            <div>{movie.Country}</div>
            <div>{movie.Poster}</div>
            <div>{movie.imdbRating}</div>
            <div>{movie.imdbVotes}</div>
            <div>{movie.imdbID}</div>
            <div>{movie.Type}</div>

        </div>
    )
}
