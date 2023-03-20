function getProducts(searchQuery){ //미들웨어함수는 함수를 리턴한다.
    return async (dispatch, getState)=>{  //항상 2개의 매개변수가 있음!
        let url= `http://localhost:5000/products?q=${searchQuery}`;
        let response = await fetch(url); 
        let data = await response.json();
        dispatch({type:'GET_PRODUCT_SUCCESS', payload:{data}});
    }
}

export const productAction={getProducts}; //함수가 여러개 될 수 있어서 객체에 담아서 리턴한다.