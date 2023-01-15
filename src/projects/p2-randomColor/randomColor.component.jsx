import React from "react";
import TitleTwo from "../../components/title2.component";

const Random =()=>{

    const handleClick = (e) =>{
        let body = document.querySelector("body");
        // body.style.background = getRandomCol();
        document.body.style.background= getRandomCol();
     
    }
function getRandomCol(){
    let letters="0123456789ABCDEF";
    let color = "#";
    for(let i=0;i<6;i++){
        color+=letters[Math.floor(Math.random()*i)];
    }
return color;
}


    return(
        <div className="container m-auto text-center">
   <TitleTwo text={"Hy there"}/>
   <button onClick={handleClick}  >click me</button>
   <button onClick={handleClick} >click me</button>
   <button onClick={handleClick} >click me</button>
   <button  onClick={handleClick}>click me</button>

        </div>
    );
}

export default Random;