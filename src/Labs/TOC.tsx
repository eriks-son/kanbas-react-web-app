import { Link } from "react-router-dom";
import { useLocation } from "react-router";

export default function TOC() {
  const { pathname } = useLocation();
  return (
    <ul className="nav nav-pills">
      <li className="nav-item">
        <Link id="wd-a" to="/Labs" className="nav-link">Labs</Link>
      </li>
      <li className="nav-item">
        <Link id="wd-a1" to="/Labs/Lab1"
              className={`nav-link ${pathname.includes("Lab1") ? "active" : ""}`}>
          Lab 1
        </Link>
      </li>
      <li className="nav-item">
        <Link id="wd-a2" to="/Labs/Lab2"
              className={`nav-link ${pathname.includes("Lab2") ? "active" : ""}`}>
          Lab 2
        </Link>
      </li>
      <li className="nav-item">
        <Link id="wd-a3" to="/Labs/Lab3"
              className={`nav-link ${pathname.includes("Lab3") ? "active" : ""}`}>
          Lab 3
        </Link>
      </li>
      <li className="nav-item">
        <Link id="wd-a4" to="/Labs/Lab4"
              className={`nav-link ${pathname.includes("Lab4") ? "active" : ""}`}>
          Lab 4
        </Link>
      </li>
      <li className="nav-item">
        <Link id="wd-a5" to="/Labs/Lab5"
              className={`nav-link ${pathname.includes("Lab5") ? "active" : ""}`}>
          Lab 5
        </Link>
      </li>
      <li className="nav-item">
        <Link id="wd-k" className="nav-link" to="/Kanbas/Account/Signin">Kanbas</Link>
      </li>
      <li className="nav-item">
        <Link id="wd-r" className="nav-link" to="https://github.com/eriks-son/kanbas-react-web-app" target="_blank">React Repo</Link>
      </li>
      <li className="nav-item">
        <Link id="wd-n" className="nav-link" to="https://github.com/eriks-son/kanbas-node-server-app" target="_blank">Node Repo</Link>
      </li>
      <li className="nav-item">
        <Link id="wd-s" className="nav-link" to={process.env.REACT_APP_REMOTE_SERVER as string} target="_blank">Node Server</Link>
      </li>
    </ul>
  )
}