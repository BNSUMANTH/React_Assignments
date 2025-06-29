import React from "react";
function ButtonTwo({setCount}){
   
    return (
        <>
        <button onClick={()=>setCount.setCount(prev=>prev-1)} disabled={(setCount.count==0)?true:false}>Decrement</button>
        </>
    )
}
export default ButtonTwo;