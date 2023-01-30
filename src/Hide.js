import React from "react";
class Hide extends React.Component{
  // constructor()
  // {
  //   // super();
  //   // this.state={count:0}
  // }
  componentWillUnmount(){
alert("element removed");
  }
  render()
  {
    return(
      <div className="App">
        <h1>child Component</h1>
      <br/>
     
      </div>
    )
  }
}
export default Hide;