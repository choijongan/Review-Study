import api from "../api"

const api_key=process.env.REACT_APP_API_KEY
function getMovies(){
    return async(dispatch)=>{
        const popularMovieApi = await api.get( //await은 순서대로 작동되서 기다려야댐. 맨위부터 작동. 서로 연관되있으면 await 쓴다.
            `/movie/popular?api_key=${api_key}&language=en-US&page=1`
        )
        
        const topRatedApi = await api.get(
            `/movie/top_rated?api_key=${api_key}&language=en-US&page=1`
        )    

        const upComingApi = await api.get(
            `/movie/upcoming?api_key=${api_key}&language=en-US&page=1`
        )

        Promise.all()    


        // let url = `https://api.themoviedb.org/3`
        // let response = await fetch(url)
        // let data = await response.json()

        // let url2 = `https://api.themoviedb.org/3`
        
        // let url3 = `https://api.themoviedb.org/3`

    }
}

export const movieaction = {
    getMovies,
}