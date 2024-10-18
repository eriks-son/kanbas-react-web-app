import { BsGripVertical } from "react-icons/bs";
import AssignmentsControls from "./AssignmentsControls";
import AssignmentControlButtons from "./AssignmentControlButtons";
import LessonControlButtons from "./LessonControlButtons";
import { BiPencil } from "react-icons/bi";

export default function Assignments() {
  return (
    <div id="wd-assignments">
      <AssignmentsControls /><br /><br /><br /><br />

      <ul id="wd-assignment-list" className="list-group rounded-0">
        <li id="wd-assignements-title" className="wd-module list-group-item p-0 fs-5 border-gray row">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            ASSIGNMENTS
            <AssignmentControlButtons />
          </div>
        </li>
        <li className="wd-assignment-list-item list-group-item ps-0 pe-0 row">
          <a className="wd-assignment-link row align-items-center text-reset text-decoration-none"
            href="#/Kanbas/Courses/1234/Assignments/123">
            <div className="col">
              <BsGripVertical className="me-2 fs-3" />
              <BiPencil className="me-2 fs-3" />
            </div>
            <div className="text-black col-8">
              A1 - ENV + HTML
              <div className="text-secondary">
                <p>
                  Multiple Modules | Not available until May 6 at 12:00am | Due May 13 at 11:59pm | 100 pts
                </p>
              </div>
            </div>
            <div className="col fs-5">
              <LessonControlButtons />
            </div>
          </a>
        </li>
        <li className="wd-assignment-list-item list-group-item ps-0 pe-0 row">
          <a className="wd-assignment-link row align-items-center text-reset text-decoration-none"
            href="#/Kanbas/Courses/1234/Assignments/123">
            <div className="col">
              <BsGripVertical className="me-2 fs-3" />
              <BiPencil className="me-2 fs-3" />
            </div>
            <div className="text-black col-8">
              A2 - CSS + BOOTSTRAP
              <div className="text-secondary">
                <p>
                  Multiple Modules | Not available until May 13 at 12:00am | Due May 20 at 11:59pm | 100 pts
                </p>
              </div>
            </div>
            <div className="col fs-5">
              <LessonControlButtons />
            </div>
          </a>
        </li>
        <li className="wd-assignment-list-item list-group-item ps-0 pe-0 row">
          <a className="wd-assignment-link row align-items-center text-reset text-decoration-none"
            href="#/Kanbas/Courses/1234/Assignments/123">
            <div className="col">
              <BsGripVertical className="me-2 fs-3" />
              <BiPencil className="me-2 fs-3" />
            </div>
            <div className="text-black col-8">
              A3 - JAVASCRIPT + REACT
              <div className="text-secondary">
                <p>
                  Multiple Modules | Not available until May 20 at 12:00am | Due May 27 at 11:59pm | 100 pts
                </p>
              </div>
            </div>
            <div className="col fs-5">
              <LessonControlButtons />
            </div>
          </a>
        </li>
      </ul>
    </div>
  );
}