import { useEffect, useState } from "react"
const useData = (url)=>{
    const [data , setData ] = useState(null)
    const [loading , setLoading ] = useState(true)
    const [err , setErr ] = useState(true)
    useEffect(()=>{
        fetch(url)
        .then((res)=>{
            if(!res.ok){
                throw Error("fuck")
            }else{
                return res.json();
            }
        })
        .then((data)=>{
            setLoading(false)
            setData(data)
            setErr(false)
            console.log(data);
            
        })
        .catch((err)=>{
            setLoading(false)
            setErr(true)
        })
    },[url])
    return {data , loading , err}
}
export default useData