import api from "../api"

function getMovies(){
    return async(dispatch)=>{
        const popularMovieApi =await api.get(`/movie/top_rated?api_key=<<api_key>>&language=en-US&page=1`)

        let url = `https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1`
        let response = await fetch(url)
        let data = await response.json()

        let url2 = `https://api.themoviedb.org/3`
        
        let url3 = `https://api.themoviedb.org/3/movie/upcoming?api_key=<<api_key>>&language=en-US&page=1`

    }
}

export const movieaction = {
    getMovies,
}