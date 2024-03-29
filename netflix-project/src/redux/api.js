import axios from "axios";

const api = axios.create({
    baseURL:'https://api.themoviedb.org/3',
    headers:{'Content-Type':'application/json'}
})
//매번 api 호출할때 마다 consol.log 안해도 자동으로 나오게 하는 코드들
//axios는 항상 data라는 필드 안에 받은 응답을 넣어준다.
api.interceptors.request.use(function (config) {
    // Do something before request is sent
    console.log('requset start', config)
    return config;
  }, function (error) {
    // Do something with request error
    console.log('requset error', error)
    return Promise.reject(error);
  });

// Add a response interceptor
api.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    console.log('get response', response)
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    console.log('response error', error)
    return Promise.reject(error);
  });

  export default api;