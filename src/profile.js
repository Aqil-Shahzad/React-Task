//Conditional Rendring
import React, { useState } from "react";
function Profile()
{
    const [logIn, setlogIn]=useState(6);
    return(
                <div>
                    {logIn===1?<h1>Profile Rashid</h1>:logIn===2?<h1>Profile AQil</h1>:logIn===3?<h1>Profile Yasir</h1>:<h1> Profile Asif </h1>}
                </div>
            )



    // Not a recommended method
    // if(logIn)
    // {
    //     return(
    //         <div>
    //             <h1>Profile Component</h1>
    //         </div>
    //     )
    // }
    // else
    // {
    //     return(
    //         <div>
    //             <h1>Not a profile Component</h1>
    //         </div>
    //     )
    // }
    
}
export default Profile;