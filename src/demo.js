import React, { useState } from "react";
const Demo = () =>{
    const [name,setName] = useState({
        country:"France"

    })
     const change =()=>{
         setName( value, {country: India})
     }
    return(
        <div>
         <h1>{name.country}</h1>
           {/* <button onClick={()=>setName( value: {country: "America"})}> Change </button> */}
            <button onClick={change}> change </button>
        </div>
    );
};