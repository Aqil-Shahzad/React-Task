//Props in class component
import React from "react";
export default class Student extends React.Component {
  render() {
    return (
      <div>
        <h1>
          Hello
          {this.props.name}
        </h1>
        <h2>{this.props.email}</h2>
        <h3>{this.props.age}</h3>
      </div>
    );
  }
}
