const API_KEY = "f3e09cfddb2a34610f22d61e7becc005"
const BASE_URL = "https://api.themoviedb.org/3"



export const getPopular = async ()=>{
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`)
    const data = await response.json()
    return data.results;
}

export const search = async(query)=>{
    const response = await fetch
    (`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`)

    const data = await response.json()
    return data.results;
}