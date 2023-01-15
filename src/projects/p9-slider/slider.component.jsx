import React from "react";
import TitleEight from "../../components/title8.component";
import { useState } from "react";


const Slider =()=>{

const[showTit,setShowTit]=useState(0);

const[showTits,setShowTits]=useState();

const onClockHandler=()=>{
   
   if(showTit<=25){
    setShowTit(showTit+5);
    setShowTits("less than 26");
  
    //unnlock
   }else {
    setShowTit(showTit-5);
    setShowTits("greater than 25");
   
   }
}

return(
        <div className="container text-center">
<TitleEight text={showTits}/>
{/* <button className="btn-primary">Slider</button> */}
<input type="range" min={0} max={100} handeInput={onClockHandler}/>
<div>
    <TitleEight inc={showTits}/>
</div>
        </div>
    );
}

export default Slider;