import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setCurrentUser } from "./reducer";
import * as client from "./client";
import { useState } from "react";

export default function Signin() {
  const [credentials, setCredentials] = useState<any>({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const signin = async () => {
    const user = await client.signin(credentials);
    if (!user) return;
    dispatch(setCurrentUser(user));
    navigate("/Kanbas/Dashboard");
  }
  return (
    <div id="wd-signin-screen">
      <h3>Sign in</h3>
      <input id="wd-username" className="form-control mb-2" placeholder="username"
      defaultValue={credentials.username} onChange={(e) => setCredentials({...credentials, username: e.target.value })} />
      <input id="wd-password" className="form-control mb-2" placeholder="password" type="password"
      defaultValue={credentials.password} onChange={(e) => setCredentials({...credentials, password: e.target.value })} />
      <button id="wd-signin-btn" onClick={signin} className="btn btn-primary w-100 mb-2">
        Sign in
      </button>
      <Link id="wd-signup-link" to="/Kanbas/Account/Signup">Sign up</Link>
    </div>
  )
}