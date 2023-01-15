import React from "react";


export default function TitleTwo({classes,text}){
return(
    <div className={!classes?"title text-center": classes}>
        {!text ? "Title: " : text}
  
    </div>
);
}


















































// import React from "react";


// export default function Title({classes,text}){
// return(
//     <div className={!classes ? "title text-center": classes}>
//           {!text ? "Title" : text }
//     </div>
// );

// }