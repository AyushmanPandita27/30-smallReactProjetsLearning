import React from "react";
import TitleSix from "../../components/title6.component";
import {useState, useEffect} from 'react';

const Temp = ()=>{

const [count,setCount]=useState(0)

if(count>0){document.body.style.background= '#0000FF'}
else{  document.body.style.background= '#FF0000'}

// const handleClick=()=>{
//     let body = document.querySelector("body");
//     // body.style.background = getRandomCol();
//     document.body.style.background= ()=>'#FF0000';
// }
const handleClick=()=>{
   
//    document.body.style.background= '#FF0000';
   setCount(count-1);
}
const handleClickCold=()=>{
   
    // document.body.style.background= '#0000FF';
    setCount(count+1);
    
 }
 


    return(
        <div>
            <div className="container text-center"> <TitleSix text={count}/></div>
          <div className="d-flex">
           <button  className="btn-danger" onClick={handleClick}>HOT</button>
           <button className="btn-primary" onClick={handleClickCold}>COLD</button> 
           </div>
        </div>
    );

}

export default Temp;