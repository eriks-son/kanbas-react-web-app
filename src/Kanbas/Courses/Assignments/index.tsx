import { BsGripVertical } from "react-icons/bs";
import AssignmentsControls from "./AssignmentsControls";
import AssignmentControlButtons from "./AssignmentControlButtons";
import LessonControlButtons from "./LessonControlButtons";
import { BiPencil } from "react-icons/bi";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as coursesClient from "../client";
import * as assignmentsClient from "./client";
import { deleteAssignment, setAssignments } from "./reducer";
import { useEffect } from "react";
import { FaTrash } from "react-icons/fa";

export default function Assignments() {
  const { cid } = useParams();
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const dispatch = useDispatch();
  const fetchAssignments = async () => {
    const modules = await coursesClient.findAssignmentsForCourse(cid as string);
    dispatch(setAssignments(modules));
  };
  const removeAssignment = async (assignmentId: string) => {
    await assignmentsClient.deleteAssignment(assignmentId);
    dispatch(deleteAssignment(assignmentId));
  };
  useEffect(() => {
    fetchAssignments();
  }, []);
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
            <div className="wd-assignment-link row align-items-center">
              <div className="col">
                <FaTrash className="text-danger me-2 mb-1" onClick={() => removeAssignment(assignment._id)} />
                <BsGripVertical className="me-2 fs-3" />
                <Link to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
            className="wd-assignment-link align-items-center text-reset text-decoration-none">
                  <BiPencil className="me-2 fs-3" />
                </Link>
              
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
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}