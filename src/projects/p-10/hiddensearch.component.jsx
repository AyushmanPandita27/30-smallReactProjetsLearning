import React from "react";
import {BsSearch} from 'react-icons/bs';
import { useState } from "react";



const Hidden =()=>{
const [sclick,setSclick]=useState(true);
const [click,setclick]=useState(false);




document.body.style.background = "purple";
let clickHandler = () =>{
   setSclick(false);
   setclick(true);
}

let chk=(e)=>{
if(e.target.value===""){
    setSclick(true);
}
}

    let inputStyles={
        margin:"10vh 25vw",
        width: "20vh",
        height: "30px",
        padding:"1rem .3rem",
        border:"none",
        outline:"none",
        background:"transparent",
        borderBottom:`1px solid #333`,
        fontSize:"1.3rem",
        color:"#eee",
        transitions:"all .3s ease"
    }

    let bsSearchStyle={
        fontSize:50,
        cursor:"pointer",
        position:"absolute",
    top:20,
    right:20,
    }


    return(
        <div className="container" >
           {!click?null:<input style={inputStyles} onChange={chk}  type = "text" placeholder="search"/>}
           {sclick ? <BsSearch onClick={clickHandler} style={bsSearchStyle} /> : null}

        </div>
    );
}

export default Hidden;