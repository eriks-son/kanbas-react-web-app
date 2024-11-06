import { FaPlus } from "react-icons/fa6";
import GreenCheckmark from "./GreenCheckmark";
import { IoSearch } from "react-icons/io5";
import { useNavigate, useParams } from "react-router";
export default function AssignmentsControls() {
  const { cid } = useParams();
  const navigate = useNavigate();
  const addAssignment = () => {
    navigate(`/Kanbas/Courses/${cid}/Assignments/new`);
  }
  return (
    <div id="wd-modules-controls" className="text-nowrap row">
      <div className="input-group me-1 col">
        <span className="input-group-text">
          <IoSearch />
        </span>
        <input type="text" className="form-control" placeholder="Search for Assignment"/>
      </div>
      <button id="wd-add-assignment-btn" className="btn btn-lg btn-danger me-1 float-end col-2"
      onClick={addAssignment}>
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Assignment</button>
      <button id="wd-add-group-btn" className="btn btn-lg btn-secondary me-1 float-end col-2">
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Group</button>
    </div>
);}
