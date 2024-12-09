import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setCurrentUser } from "./reducer";
import * as client from "./client";

export default function Profile() {
  const [profile, setProfile] = useState<any>({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const fetchProfile = () => {
    if (!currentUser) return navigate("/Kanbas/Account/Signin");
    setProfile(currentUser);
  };
  const updateProfile = async () => {
    const updatedProfile = await client.updateUser(profile);
    dispatch(setCurrentUser(updatedProfile));
  };
  const signout = async () => {
    await client.signout();
    dispatch(setCurrentUser(null));
    navigate("/Kanbas/Account/Signin");
  };
  useEffect(() => { fetchProfile(); }, []);
  return (
    <div id="wd-profile-screen">
      <h3>Profile</h3>
      {profile && (
        <div>
          <input defaultValue={profile.username} placeholder="username" id="wd-username" className="form-control mb-2"
          onChange={(e) => setProfile({ ...profile, username: e.target.value })} />
          <input defaultValue={profile.password} placeholder="password" type="password" id="wd-password" className="form-control mb-2"
          onChange={(e) => setProfile({ ...profile, password: e.target.value })} />
          <input defaultValue={profile.firstName} placeholder="First Name" id="wd-firstname" className="form-control mb-2"
          onChange={(e) => setProfile({ ...profile, firstName: e.target.value })} />
          <input defaultValue={profile.lastName} placeholder="Last Name" id="wd-lastname" className="form-control mb-2"
          onChange={(e) => setProfile({ ...profile, lastName: e.target.value })} />
          <input defaultValue={profile.dob} type="date" id="wd-dob" className="form-control mb-2"
          onChange={(e) => setProfile({ ...profile, dob: e.target.value })} />
          <input defaultValue={profile.email} type="email" id="wd-email" className="form-control mb-2"
          onChange={(e) => setProfile({ ...profile, email: e.target.value })} />
          <select onChange={(e) => setProfile({ ...profile, role: e.target.value })} value={profile.role} id="wd-role" className="form-select mb-2">
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>
            <option value="STUDENT">Student</option>
          </select>
          <button onClick={updateProfile} className="btn btn-primary w-100 mb-2"> Update </button>
          <button onClick={signout} className="btn btn-danger w-100 mb-2" id="wd-signout-btn">
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};