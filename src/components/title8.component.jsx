import React from 'react';

const TitleEight =({text,inc})=>{
    return(
        <div>
       
            {!text?"range":text}
       <div>
       {inc}
       </div>
        </div>

    );
}

export default TitleEight;