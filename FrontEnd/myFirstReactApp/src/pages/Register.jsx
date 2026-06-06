import { useState } from "react";
import { Link } from "react-router-dom";
function Register() {
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("fullName :", fullName);
    console.log("password :", password);    
    console.log("email :", email);
    

  };
  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="border p-3 w-50 mt-5 bg-light shadow rounded">
          <h1 className="text-center">REGISTER NOW</h1>
          <br />
          <form onSubmit={handleSubmit}>
            <label htmlFor="fullName">Fullname</label>
            <input
              type="text"
              name="fullName"
              className="form-control"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
            <br />
            <label htmlFor="password">Password</label>
            <input
              type="text"
              name="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              value={email}
              onChange={(e) => seEmail(e.target.value)}
            />
            <br />
            <div className="float-end">
              <button type="submit" className="btn btn-primary">
                Register
              </button>
            </div>
          </form>
           <hr />
          <p>
            Already Have an account? <Link to="/login">Login Here</Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Register;