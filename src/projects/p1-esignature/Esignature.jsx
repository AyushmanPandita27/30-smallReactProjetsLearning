import React, {useState} from "react";
import { useEffect } from "react";
import Title from "../../components/titile.component";


export default function Esignature(){
    const [title,setTitle] = useState("Your Signature");
    const [date,setDate] = useState("");
    const inputStyles={
        border:"none",
        borderBottom:"2x dotted",
        outline:"none",
        padding:".35rem 0",
    }
    document.body.style.background= "#eee";
//     const value = event.target.value;
// useEffect((e)=>{setVal(e)},[])

const onChangeHandler = (e) => {
setTitle(e.target.value);
}
const onChangeHandlerDate = (e) => {
    setDate(e.target.value);
    }
    

    return(
        <div className="container text-center">
             <Title classes={"title"} text={title}/>
             <Title classes={"main-title"} text={!date ? " DOB ": date}/>
             <p>
             Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
             </p>
             <footer className="d-flex" style={{
                justifyContent:"space-around",
                position:"relative",
                top:"40vh"
             }}>
             <input type = "date" value={date}  style={inputStyles} onChange={onChangeHandlerDate} />
             <input type = "name" value={title} style={inputStyles} onChange={onChangeHandler}  />
             </footer>
        </div>
    );
}






























































// import React from "react";
// import Title from "../../components/titile.component";
// export default function Esignature(){
// const inputStyles={
//   bordet:"none",
//   borderBotton:"2px, dotted",
//   outline:"none",
//   padding:".35 rem",
// };

// return(
//     <div className="container text-center">
//          <Title classes={"title"}  text={"Name"}/>
//          <Title classes={"smain-title"}  text={"Date"}/>
//          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
//       <footer className="d-flex" style={{justifyContent:"space-around", position:"relative", top:"40vh"}}>
//             <input type = "date" value={""} style={inputStyles}/>
         
//             <input type = "text" value={""} style={inputStyles}/>
//             </footer>
     
//     </div>
// );

// }