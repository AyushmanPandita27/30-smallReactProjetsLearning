import React from "react";
import TitleEight from "../../components/title8.component";
import { useState } from "react";


const Unlock =()=>{
const [open,setOpen]=useState(false);
const[show,setShow]=useState();
const[showTit,setShowTit]=useState();

const onClockHandler=()=>{
   if(!open){
    setOpen(true);
    setShow("unlock");
    setShowTit("LOCKED");
   
    //unnlock
   }else {
    setOpen(false);
    setShow("lock");
    setShowTit("UNLOCKED");
   
   }
}

return(
        <div className="container text-center">
<TitleEight text={showTit}/>
{/* <button className="btn-primary">Unlock</button> */}
<button className="btn-danger" onClick={onClockHandler}>{<TitleEight textBtn={show}/>}</button>
        </div>
    );
}

export default Unlock;