import React from "react";
import { useState } from "react";

const PopUp =({type,text,title,triggerP})=>{
    const popUpContainer = {
        position:"absolute",
        top:"0",
        heighy:"100vh",
        width:"100vw",
        background:"rgba(0,0,0,0.1)",
        zIndex:"-1"
    }
const popupstyle={
    position:"relative",
    margin:"40vh auto",
    zIdex:"1"
}

const [trigger,setTrigger]= useState(false);
const handleClick=()=>{

     setTrigger(true);

}

    return(
        <div style={popUpContainer}>
               <div>
 <button className="btn-danger" text={"x"} onClick={handleClick}/>
 </div>
           <div className={`${type}`} style={popupstyle}>

           {trigger &&<div className="alert-close">

 <div className="d-flex flex-column">
           <h4 className="mb-1">{title?title:"popup"}</h4>
           <p>{text&&text}</p>
    </div>
    
 
 </div>}
           </div>
        </div>
    );
}


export default PopUp;