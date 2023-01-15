import React from "react";
import TitleFour from "../../components/title4.component";
import { useState,useEffect } from "react";
import axios from  'axios';
const Test =() =>{
const [change,setChange]=useState("posts");
const [fch,setFch]=useState();
const fetchData=(change)=>{
  fetch(`https://jsonplaceholder.typicode.com/${change}`)
      .then(response => response.json())
      .then(json => setFch(json));
}
useEffect(()=>{
fetchData(change);
},[]
);
const changeVal=(change)=>{
setChange(change);
fetchData(change);
}
    return(
        <div container m-auto>
            <TitleFour text={"testimoniaaaaals App"}/>
        
          <button text={"Posts"} onClick={()=> changeVal("posts") } >posts</button>
          <button  text={"Users"}  onClick={()=> changeVal("users") }>users</button>
          <button  text={"Comments"} onClick={()=> changeVal("comments") }>comments</button>
          <TitleFour
        text={!change ? "Select form above!" : change}
/>
      {!fch?null:fch.map((item)=>{return (
      <div key={item.id}>
      {item.name && <h2 className="card-header">{item.name}</h2>}
      <div className="card-body">
                  <h4>{item.title}</h4>
                  <p>{item.body}</p>
                </div>
                {item.email && (
                  <small className="card-footer">{item.email}</small>
                )}
        </div>
      );
    })}
                  </div>
    );
}

export default Test;