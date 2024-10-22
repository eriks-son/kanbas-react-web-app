import { BsGripVertical } from "react-icons/bs";
import AssignmentsControls from "./AssignmentsControls";
import AssignmentControlButtons from "./AssignmentControlButtons";
import LessonControlButtons from "./LessonControlButtons";
import { BiPencil } from "react-icons/bi";
import { useParams } from "react-router";
import * as db from "../../Database";
import { Link } from "react-router-dom";

export default function Assignments() {
  const { cid } = useParams();
  const assignments = db.assignments;
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
        {assignments.filter((assignment: any) => assignment.course === cid)
        .map((assignment: any) => (
          <li className="wd-assignment list-group-item pe-0 ps-0 row">
            <Link to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
            className="wd-assignment-link row align-items-center text-reset text-decoration-none">
              <div className="col">
                <BsGripVertical className="me-2 fs-3" />
                <BiPencil className="me-2 fs-3" />
              
              </div>
                <div className="text-black col-8">
                  {assignment.title}
                  <div className="text-secondary">
                    <p>
                      Multiple Modules | Not available until {assignment.availableDate} at 12:00am | Due {assignment.dueDate} at 11:59pm | {assignment.points} pts
                    </p>
                  </div>
                </div>
              <div className="col fs-5">
                <LessonControlButtons />
              </div>
            </Link>
            
          </li>
        ))}
      </ul>
    </div>
  );
}