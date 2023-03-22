function getProductDetail({id}){
    return async(dispatch,getState)=>{
        let url=`http://localhost:5000/products/${id}`
        let response = await fetch(url)
        let data = await response.json()
        
        setProduct(data)
        console.log(data)
    }
}

export const detailAction={getProductDetail}