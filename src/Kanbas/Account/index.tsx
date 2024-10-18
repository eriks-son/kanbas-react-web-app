import { Navigate, Route, Routes } from "react-router";
import Signin from "./Signin";
import Profile from "./Profile";
import Signup from "./Signup";
import AccountNavigation from "./Navigation";

export default function Account() {
  return (
    <div id="wd-account-screen">
      <div className="row">
        <div className="col-2">
          <AccountNavigation />
        </div>
        <div className="col">
          <Routes>
            <Route path="/" element={<Navigate to="/Kanbas/Account/Signin" />} />
            <Route path="/Signin" element={<Signin />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/Signup" element={<Signup />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}