import {useEffect, useState} from "react"

function UseCurrencyInfo(currency){
    const [data,setData]=useState({})
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res)=> res.json())
        .then((res)=>setData(res[currency]))
        console.log("from js: ",data)
    },[currency]) 
    //currency is dependency here as useEffects triggers whenever currency changes

    // "data" is an object mapping "currency" to all the other currencies
    return data
}

export default UseCurrencyInfo;


/*

SUMMARY: 

The UseCurrencyInfo function is a custom React hook designed to fetch and return live currency exchange rates for a given base currency.

useEffect() is triggered whenever the user changes the currency option.

First the response of the API is converted to Object then the "data" is set the value of the key "currency" (res[currenct])

finally the data is returned.

*/