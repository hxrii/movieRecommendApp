import React from "react";
import confetti from "canvas-confetti";

function MovieCard({movie}){



    return(
        <div className="movie-card">

            <div className="movie-poster">
                <img src={movie.image} alt={movie.title} />
                <div className="movie-overlay">
                    <button className="favourite" onClick={favourite}>
                    🤍
                    </button>
                </div>
            </div>

            <div className="movie-info">
                <h2>{movie.title}</h2>
                <p>{movie.description}</p>
            </div>

        </div>
    )
}



function favourite(){
    confetti({
        particleCount: 100,
        spread: 100,
        
      });
    console.log('Favourite movie added')
  }


export default MovieCard




