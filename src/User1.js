import React from "react";
function User1(props)
{
    return(
        <div><h1>User Component</h1>
        <button onClick={props.data}>Call Me</button>
        </div>
    )
}
export default User1;