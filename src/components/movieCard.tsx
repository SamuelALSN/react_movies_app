import React from 'react';
import {Movie} from "../movie";

type Movies = Array<Movie> // defining a custom type for array of movies which we expected

type MovieProps = {
    list: Movies
}

const MovieCard = ({list}: MovieProps) => {
    return (
        <div className="displayZone">
            {list.map(item =>
                <div className="card" key={item.id}>
                    <img src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${item.poster_path}`} alt=""
                         className="card__image"/>
                    <div className="card__content">
                        <h3 className="card__title">{item.title}</h3>
                        {/*<p><small> RELEASE DATE : </small> {movie.release_date}</p>*/}
                        <p className="card__desc">{item.overview}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MovieCard;