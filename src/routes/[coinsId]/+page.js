export const load = ({ fetch, params})=>{
    //console.log(params);
    const fetchProduct = async (id) =>{
        const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`);
        const data = await res.json();
        return data;
    }
    return {
        coinDetail: fetchProduct(params.coinsId)
    }

}




