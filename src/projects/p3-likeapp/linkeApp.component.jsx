import React from 'react';
import TitleThree from '../../components/title3.component';
import { useState } from 'react';

const LikeApp =() =>{
    const [like, setLike]= useState(false);
    const [count,setCount]= useState(0)
    const handleClickD = ()=>{
    if(!like){
      setLike(true);
        setCount(count+1);
    } 
    }
    const handleClick = ()=>{
      
     if (like) {setLike(false);
            setCount(count-1);
        }  
        }

        // const handleClick = useEffect(()=>{if(like) setCount(count-1)},[count]);

        
    return(
<div className='container text-center'>
    <TitleThree 
     text={"LIKE APP"}/>
   <TitleThree classes={"subtitle"} text ={`likes ${count}`}/>
  
   <button onClick={handleClickD}>Like</button>
   <button onClick={handleClick}>Dislike</button>
</div>
    );
}

export default LikeApp;