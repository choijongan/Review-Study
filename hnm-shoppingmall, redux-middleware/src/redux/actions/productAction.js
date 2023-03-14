function getProducts(){ //미들웨어함수는 함수를 리턴한다.
    return async (dispatch, getState)=>{  //항상 2개의 매개변수가 있음!
        let url= `http://localhost:5000/products?q=${searchQuery}`;
        let response = await fetch(url); 
        let data = await response.json();
        setProductList(data)
    }
}