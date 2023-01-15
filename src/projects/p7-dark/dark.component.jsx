import React from "react";
import TitleSeven from "../../components/title7.component";
import { useState } from "react";
const Dark = () =>{
const [color,setColor]= useState(0);
const [textc,setTextc]=useState("light");


    const clickHandler=()=>{
    
        
        if(color%2===0 ){
            setColor(color+1);
            document.body.style.background="#000000";  
            var element = document.getElementById("myElement");
            element.style.color = "#FFFFFF";
            setTextc("dark");

    }
    else {
    
        document.body.style.background="#FFFFFF"; 
        var element = document.getElementById("myElement");
        element.style.color = "#000000";
        setColor(color+1);
        setTextc("light");
    }
   
   
        } 
    return(
        <div id="myElement">
 <TitleSeven  text={"Write title"} />

 <p >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
 
< button  className="btn-primary" onClick={clickHandler}>{<TitleSeven textCol={textc}/>}</button>  

        </div>
    );
}

export default Dark;