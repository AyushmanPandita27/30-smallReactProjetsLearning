import React from "react";
import PopUp from "./components/popup.comp";
import Title from "../../components/titile.component";

const PopUpApp =()=>{
 
    return(
        <div className="text-center">
            <Title text={"click for popup or w 3 sec"}/>
 <PopUp type={"alert-info"} />

        </div>
    );
}


export default PopUpApp;