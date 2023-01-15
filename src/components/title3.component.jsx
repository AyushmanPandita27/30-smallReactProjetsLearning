import React from "react";

const TitleThree =({classes, text}) =>{
    return(
        <div className={!classes?"title text-center": classes}> 
     {text}
        </div>
    );
}

export default TitleThree;