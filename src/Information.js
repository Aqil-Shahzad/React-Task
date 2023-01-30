import { useParams } from "react-router-dom";
function Information()
{
    // return(
    //     // <div>
    //     //     <h1>Information page</h1>
    //     // </div>
    // )
    const param=useParams();
    const {name}=param;
    return(
        <div>This is {name}'s information page.</div>
    )
}
export default Information;