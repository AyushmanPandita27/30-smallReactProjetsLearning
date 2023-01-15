import Title from "../../components/titile.component";
import { useEffect, useRef, useState } from "react";
import Progress from "./progress.jsx";
const ProgressBar = () =>{
    const inputStyle={
        width :50,
        border:"none",
        outline:"none",
        textAlign:"center",
        borderBottom:"1px solid lightgray"
    }
    const uiInput = useRef(null);
const [comp, setComp]= useState(0);
const [status,setStatus]=useState({
  
    ui: 20,
    ux:80,
    data:90,
});
const projectDate=[
    {id:"1", bgColor:"#7633f9", completed:status.ui},
    {id:"2", bgColor:"#7933f9", completed:status.ux},
    {id:"3", bgColor:"#9063a9", completed:status.data}


]
    useEffect(()=>{
        uiInput.current.focus();
    },[]);
const handleChange = (e) =>{
if(e.target.value<=100){
    setStatus({...status, ui: e.target.value})
}else{
    alert("value too high Select till 100");
}
}

const handleChangee = (e) =>{
    if(e.target.value<=100){
        setStatus({...status, ux: e.target.value})
    }else{
        alert("value too high Select till 100");
    }
    }

    const handleChangeee = (e) =>{
        if(e.target.value<=100){
            setStatus({...status, data: e.target.value})
        }else{
            alert("value too high Select till 100");
        }
        }
    return(
        <div className="container container-sm mx-auto text-center">

    < Title text={"progress Bars"}/>
    <h2>Project status:</h2>

    <ul>
        <li>
            UI Status :{" "} <input type="number" style={inputStyle} value={status.ui}  onChange={handleChange } />;
        </li>
        <li>
            UI Status :{" "} <input type="number" style={inputStyle} value={status.ux} ref={uiInput} onChange={handleChangee} />;
        </li>
        <li>
            UI Status :{" "} <input type="number" style={inputStyle} value={status.data} onChange={handleChangeee} />;
        </li>
    </ul>

{projectDate.map(( itr, idx)=>
   (
        <Progress key={idx}
bgColor={itr.bgColor}
completed={itr.completed}
/>
        
    ) )
}



        </div>
    );
}

export default ProgressBar;