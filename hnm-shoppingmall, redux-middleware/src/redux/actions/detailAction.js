function getProductDetail(id){
    return async(dispatch)=>{
        let url=`http://localhost:5000/products/${id}`
        let response = await fetch(url)
        let data = await response.json()
        dispatch({type:'GET_DETAIL_SUCCESS', payload:{data}})
        
        console.log(data)
    }
}

export const detailAction={getProductDetail}