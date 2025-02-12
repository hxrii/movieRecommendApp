import MovieCard from "../components/MovieCard"
function Home(){
    const movies = [
        {id:1, title:"WildCraft", image:"www.google.com",description:"WildCraft"},
        {id:2, title:"The Last Dance", image:"www.google.com",description:"The Last Dance"},
        {id:3, title:"The Great Wall", image:"www.google.com",description:"The Great Wall"},
        {id:4, title:"The Matrix", image:"www.google.com",description:"The Matrix"},
        {id:5, title:"The Shawshank Redemption", image:"www.google.com",description:"The Shawshank Redemption"},
        {id:6, title:"Inception", image:"www.google.com",description:"Inception"},
        {id:7, title:"Pulp Fiction", image:"www.google.com",description:"Pulp Fiction"},
    ]

    const handleSearch = () => {

    }

    return (
        <div className="home">
            <h1>Movies</h1>
            <form onSubmit={handleSearch} className="search-form">
                <input type="text" placeholder="Search movies..." className="search-input" />
                <button type="submit" className="search-button">Search</button>
            </form>
            <div className="movie-grid">
            {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
            </div>
        </div>
    )
}

export default Home