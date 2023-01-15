import React from "react";
import { useState, useEffect } from "react";


const TitleFive =({type, message})=>{
    const [showAlert,setShowAlert]=useState(true);

const closeAlert=(e)=>{
    e.target.parentElement.parentElement.classList.add("fadeAlert");
    setTimeout(()=>{setShowAlert(false)},400)
}



  
    return showAlert &&  <div classNane = {`alert alert-${type}`}>
<spam classNane="mr-1">{message}</spam>
<button btnClass={"bth-close"}  onClick={closeAlert}
style={{ justifyContent:"space-around",
position:"relative",
top:"5vh"}}
>press to close</button>

    </div>
      


}

export default TitleFive;