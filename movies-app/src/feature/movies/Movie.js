import React, { Children } from 'react'
import { Link } from 'react-router-dom'

export default function Movie({movie}) {
    return (
        <React.Fragment key = {movie._id}>
                    <dt>
                        <h2>
                            <Link to={`movies/${movie._id}`} > {movie.Title}</Link>
                        </h2></dt>
                    <dd>
                        <img src = {movie.Poster} alt = "cover"/>
                        {movie.description}
                    </dd>
        </React.Fragment>
    )
}
