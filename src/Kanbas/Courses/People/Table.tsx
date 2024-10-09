import { FaUserCircle } from "react-icons/fa";
export default function PeopleTable() {
  return (
    <div id="wd-people-table">
      <table className="table table-striped">
        <thead>
          <tr><th>Name</th><th>Login ID</th><th>Section</th><th>Role</th><th>Last Activity</th><th>Total Activity</th></tr>
        </thead>
        <tbody>
          <tr>
            <td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Tony</span>{" "}
              <span className="wd-last-name">Stark</span></td>
            <td className="wd-login-id">001234561S</td>
            <td className="wd-section">S101</td>
            <td className="wd-role">STUDENT</td>
            <td className="wd-last-activity">2020-10-01</td>
            <td className="wd-total-activity">10:21:32</td>
          </tr>
          <tr>
            <td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Paul</span>{" "}
              <span className="wd-last-name">Blart</span></td>
            <td className="wd-login-id">837265481I</td>
            <td className="wd-section">S102</td>
            <td className="wd-role">INSTRUCTOR</td>
            <td className="wd-last-activity">2021-11-02</td>
            <td className="wd-total-activity">00:41:02</td>
          </tr>
          <tr>
            <td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Michael</span>{" "}
              <span className="wd-last-name">Jackson</span></td>
            <td className="wd-login-id">957263718S</td>
            <td className="wd-section">S101</td>
            <td className="wd-role">STUDENT</td>
            <td className="wd-last-activity">2009-06-25</td>
            <td className="wd-total-activity">100:00:00</td>
          </tr>
          <tr>
            <td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">August</span>{" "}
              <span className="wd-last-name">Eriksson</span></td>
            <td className="wd-login-id">002189535S</td>
            <td className="wd-section">S105</td>
            <td className="wd-role">STUDENT</td>
            <td className="wd-last-activity">2024-10-08</td>
            <td className="wd-total-activity">00:00:00</td>
          </tr>
        </tbody>
      </table>
    </div> 
  );
}