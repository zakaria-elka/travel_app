import React, {useEffect, useState} from "react";

const Data=()=>{

const [results,setResults]=useState({
    Tresults:[],
})
   
useEffect(()=>{
    
   
    
    fetch("http://localhost:5000/api/hotels/all")
    .then(res=>res.json())
    .then((json)=>{
        setResults(results=>{
 
            return {...results, Tresults: json}
           })
           
        })
    
   



},[])

return(
<div>
{results.Tresults.map(data=>(

    <h2>{data.name}</h2>
))}
</div>

)


}

export default Data