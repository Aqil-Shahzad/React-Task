//Form Validation
import React, { useState } from "react";
function Login() {
  const [user, setUser] = useState("");
  const [password, setPassowrd] = useState("");
  const [userErr, setUserErr] = useState(false);
  const [passwordErr, setPasswordErr] = useState(false);

  function loginHandle(e) {
    if (user.length < 4 || password.length < 8) {
      alert("Type correct values");
    } else {
      alert("Correct Data");
    }
    console.log("Aqil ie here");
    e.preventDefault();
  }
  function userHandler(e) {
    let item = e.target.value;
    if (item.length < 4) {
      setUserErr(true);
    } else {
      setUserErr(false);
    }
    setUser(item);
  }
  function passwordHandler(e) {
    let item = e.target.value;
    if (item.length < 8) {
      setPasswordErr(true);
    } else {
      setPasswordErr(false);
    }
    setPassowrd(item);
  }
  return (
    <div>
      <h1>Form </h1>
      <form onSubmit={loginHandle}>
        <input type="text" placeholder="Enter Name" onChange={userHandler} />
        {userErr ? <span>Not Valid</span> : ""}
        <br />
        <br />
        <input
          type="password"
          placeholder="Enter Password"
          onChange={passwordHandler}
        ></input>
        {passwordErr ? <span>Not Valid</span> : ""}
        <br />
        <br />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}
export default Login;
