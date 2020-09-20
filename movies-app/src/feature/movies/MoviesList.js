import React, {useState, useEffect} from 'react';
import Movie from './Movie';

export default function MoviesList () {
    
    const [movies, setMovies] = useState([]);

    useEffect(() => {

        (async function getMovies(){
            debugger;
            const data = await fetch('http://movies-app-siit.herokuapp.com/movies')
            .then(res => res.json())
            .then(
                (result) => {
                  setMovies(result.results);
                },           
              )
        })();

    }, [])
        
    if(!movies.length) {
            return 'Loading...';
        
    }
       
        return (
            <>
            <h1>Movies</h1>
            <dl>
            { movies.map(item => <Movie movie = {item }/> ) }
                           
            </dl>
            </>
       );
}
