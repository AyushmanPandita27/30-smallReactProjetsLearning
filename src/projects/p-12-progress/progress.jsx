const Progress = ({bgColor,completed}) =>{
    const first={
        height:25,
        width:"100%",
        backgroundColor:"#e0e0de",
        borderRadius:50,
        margin:50,
      
    };
    const sec={
        backgroundColor: bgColor,
        height:"100%",
        width: `${completed}%`,
        borderRadius:"inherit",
        textAlign:"right",
        transition:"width 1s ease-in-out"
    };
    const third={
        padding:15,
        margin:10,
        color:"#fff",
        fontWeight:"bold"
    };
    return(
        <div style={first}>
            <div style={sec}>
                <span style={third}>{`${completed}%`} </span>
                </div>
        </div>
    );
}


export default Progress;