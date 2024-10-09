import { BsGripVertical } from "react-icons/bs";
import AssignmentsControls from "./AssignmentsControls";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { BiPencil } from "react-icons/bi";

export default function Assignments() {
  return (
    <div id="wd-assignments">
      <AssignmentsControls /><br /><br /><br /><br />

      <h3 id="wd-assignments-title">
         40% of Total
        <button>+</button>
      </h3>
      <ul id="wd-assignment-list" className="list-group rounded-0">
        <li id="wd-assignements-title" className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            ASSIGNMENTS
            <AssignmentControlButtons />
          </div>
        </li>
        <li className="wd-assignment-list-item list-group-item p-3 ps-1">
          <a className="wd-assignment-link"
            href="#/Kanbas/Courses/1234/Assignments/123">
            <BiPencil className="me-2 fs-3" />
            A1 - ENV + HTML
          </a>
          <p>
            Multiple Modules | Not available until May 6 at 12:00am |
          </p>
          <p>
            Due May 13 at 11:59pm | 100 pts
          </p>
        </li>
        <li className="wd-assignment-list-item">
          <a className="wd-assignment-link"
            href="#/Kanbas/Courses/1234/Assignments/123">
            A2 - CSS + BOOTSTRAP
          </a>
          <p>
            Multiple Modules | Not available until May 13 at 12:00am |
          </p>
          <p>
            Due May 20 at 11:59pm | 100 pts
          </p>
        </li>
        <li className="wd-assignment-list-item">
          <a className="wd-assignment-link"
            href="#/Kanbas/Courses/1234/Assignments/123">
            A3 - JAVASCRIPT + REACT
          </a>
          <p>
            Multiple Modules | Not available until May 20 at 12:00am |
          </p>
          <p>
            Due May 27 at 11:59pm | 100 pts
          </p>
        </li>
      </ul>
    </div>
  );
}