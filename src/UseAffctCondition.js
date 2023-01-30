import React,{useEffect} from "react";
function UseAffctCondition(props)
{
  useEffect( ()=>{
    alert("UseEffect is called")
  })
return(
  <div>
<h1>Count={props.count}</h1>
<h1>Data={props.data}</h1>
  </div>
)
}

export default UseAffctCondition;
