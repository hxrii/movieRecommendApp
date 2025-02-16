import '../css/MovieCard.css'
import React from "react";
import confetti from "canvas-confetti";

function MovieCard({movie}){



    return(
        <div className="movie-card">

            <div className="movie-poster">
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                <div className="movie-overlay">
                    <button className="favorite-btn" onClick={favourite}>
                    🤍
                    </button>
                </div>
            </div>

            <div className="movie-info">
                <h2>{movie.title}</h2>
                <p>{movie.release_date?.split("-")[0]}</p>
            </div>

        </div>
    )
}



function favourite(){
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    confetti({
        particleCount: 10,
        spread: 100,
        origin: {
            x: mouseX / window.innerWidth,
            y: mouseY / window.innerHeight
        },
        
        
      });
    console.log('Favourite movie added')
  }


export default MovieCard




