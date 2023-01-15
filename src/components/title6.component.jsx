import React from "react";

const TitleSix = ({text})=>{
    return(
        <div>
            {!text ?"Temp in degrees":text +"degrees"}
        </div>
    );

}

export default TitleSix;