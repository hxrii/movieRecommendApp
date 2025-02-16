import { useState, useEffect } from "react"
import MovieCard from "../components/MovieCard"
import '../css/Home.css'
import { getPopular, search } from '../services/api'
function Home(){


    const [searchQuery, setQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        const loadPopularMovies = async () => {
        try{
            const PopularMovies = await getPopular();
            setMovies(PopularMovies);
            console.log(PopularMovies)
        }
        catch(error){
            setError(error)
            setLoading(false)
        }
        finally{
            setLoading(false)
        }
     }
     loadPopularMovies()
    }
    ,[]);

    const handleSearch = async (e) => {
        e.preventDefault()
        if(!searchQuery.trim()) return
        if(loading) return

        setLoading(true)

        try {
            const result = await search(searchQuery)
            setMovies(result)
        }
        catch(error){
            setError(error)
            setLoading(false)
        }
        finally{
            setLoading(false)
            setQuery("")
            setError(null)
        }


        console.log("Searched "+ searchQuery)

    }

    return (
        <div className="home">
            <h1>Movies</h1>
            <form onSubmit={handleSearch} className="search-form">
                <input type="text" 
                       placeholder="Search movies..." 
                       className="search-input"
                       value={searchQuery}
                       onChange={(e)=>(setQuery(e.target.value))}

                 />
                <button type="submit" className="search-button">Search</button>
            </form>

            {loading ? <div className="loading">Loading...</div> :
            <div className="movies-grid">
            {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
            </div>
            }
        </div>
    )
}

export default Home