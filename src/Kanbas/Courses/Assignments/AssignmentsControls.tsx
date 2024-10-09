import { FaPlus } from "react-icons/fa6";
import GreenCheckmark from "./GreenCheckmark";
import { IoSearch } from "react-icons/io5";
export default function AssignmentsControls() {
  return (
    <div id="wd-modules-controls" className="text-nowrap">
      <div className="input-group mb-3">
        <span className="input-group-text">
          <IoSearch />
        </span>
        <input type="text" className="form-control" placeholder="Search for Assignment"/>
      </div>
      <button id="wd-add-assignment-btn" className="btn btn-lg btn-danger me-1 float-end">
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Assignment</button>
      <button id="wd-add-group-btn" className="btn btn-lg btn-secondary float-end">
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Group</button>
    </div>
);}
