import { useState } from "react";
function Login() {
  const [userName, setUserName] = useState("");
  const [city, setCity] = useState("");
  return (
    <>
      <div className="container d-flex justify-content-center align-items-center">
        <span className="text-primary fs-2">Login</span>
      </div>
      <input
        type="text"
        name="userName"
        onChange={(e) => setUserName(e.target.value)}
      />

      <hr />
      <br />
      <br />
      <br />
      <hr />
      <div>my uSer Name is {userName}</div>
      <div>My City is {city}</div>

      <hr />
      <br />
      <br />
      <br />
      <hr />

      <input
        type="text"
        name="city"
        onChange={(e) => setCity(e.target.value)}
      />
    </>
  );
}
export default Login;
