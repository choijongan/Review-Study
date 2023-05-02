import api from "../api"

const api_key=process.env.REACT_APP_API_KEY
function getMovies(){
    return async(dispatch)=>{ //try catch 하는이유 에러핸들링해야됨. 에러 생기면 catch로 보냄.
        try {
            dispatch({type: 'GET_MOVIES_REQUEST'})
            const popularMovieApi = api.get( //(await api.get)await은 순서대로 작동되서 기다려야댐. 맨위부터 작동. 서로 연관되있으면 await 쓴다.
            `/movie/popular?api_key=${api_key}&language=en-US&page=1`
        )
        
        const topRatedApi = api.get(
            `/movie/top_rated?api_key=${api_key}&language=en-US&page=1`
        )    

        const upComingApi = api.get(
            `/movie/upcoming?api_key=${api_key}&language=en-US&page=1`
        )

        let [popularMovies, topRatedMovies, upcomingMovies] = await Promise.all([
            popularMovieApi,
            topRatedApi,
            upComingApi
        ]);

        dispatch({
            type: "GET_MOVIES_SUCCESS",
            payload: { 
                popularMovies: popularMovies.data, 
                topRatedMovies: topRatedMovies.data, 
                upcomingMovies: upcomingMovies.data, 
            },
        }) 
 
        //부르고 싶은 api다 넣으면 됨(다 올때까지만 한번만 기다리고 동시에 불러달라.)
        //호출하는 api가 1개면 await, 다수면 promise.all
        //let [popularMovies, topRatedMovies, upcomingMovies] 배열형태로 넣어두면 Array 형태 말고 따로따로 받아서 볼 수 있다.       

        // let url = `https://api.themoviedb.org/3`
        // let response = await fetch(url)
        // let data = await response.json()

        // let url2 = `https://api.themoviedb.org/3`
        
        // let url3 = `https://api.themoviedb.org/3`
        } catch (error) {
            //에러 핸들링 하는곳
            dispatch({type: 'GET_MOVIES_FAILURE'})
        }
        

    }
}

export const movieaction = {
    getMovies,
}