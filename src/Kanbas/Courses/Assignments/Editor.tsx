import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateAssignment } from "./reducer";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const dispatch = useDispatch();
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  let assignment = assignments.find((a: any) => a.course === cid && a._id === aid) || { course: cid };
  const submit = () => {
    dispatch(updateAssignment(assignment));
  }
  return (
    <div id="wd-assignments-editor" className="p-3">
      <div className="row mb-3">
        <label className="col-form-label" htmlFor="wd-name">Assignment Name</label>
        <input id="wd-name" className="form-control"
        defaultValue={assignment?.title} onChange={(e) => assignment = {...assignment, title: e.target.value}} />
      </div>
      <div className="row mb-3">
        <textarea className="form-control" id="wd-description" onChange={(e) => assignment.description = e.target.value}>
          {assignment?.description}
        </textarea>
      </div>
      <div className="row mb-3">
        <label htmlFor="wd-points" className="col">Points</label>
        <input id="wd-points" className="form-control col" 
        defaultValue={assignment?.points} onChange={(e) => assignment.points = e.target.value} />
      </div>
      <div className="row mb-3">
        <label htmlFor="wd-group" className="col">Assignment Group</label>
        <select id="wd-group" className="form-select col">
          <option selected>ASSIGNMENTS</option>
          <option>Other</option>
        </select>
      </div>
      <div className="row mb-3">
        <label htmlFor="wd-display-grade-as" className="col">Display Grade As</label>
        <select id="wd-display-grade-as" className="form-select col">
          <option selected>PERCENTAGE</option>
          <option>LETTER</option>
        </select>
      </div>
      <div className="row mb-3">
        <label htmlFor="wd-submission-type" className="col">Submission Type</label>
        <div className="col border border-gray rounded p-3">
          <select id="wd-submission-type" className="form-select mb-3">
            <option selected>Online</option>
          </select>
          <h5 className="mb-3">Online Entry Options</h5>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="r1" />
            <label className="form-check-label" htmlFor="r1">
              Text Entry
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="r2" />
            <label className="form-check-label" htmlFor="r2">
              Website URL
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="r3" />
            <label className="form-check-label" htmlFor="r3">
              Media Recordings
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="r4" />
            <label className="form-check-label" htmlFor="r4">
              Student Annotation
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="r5" />
            <label className="form-check-label" htmlFor="r5">
              File Uploads
            </label>
          </div>
        </div>
      </div>
      <div className="row mb-3">
        <label className="col">Assign to</label>
        <div className="col border border-gray rounded p-3">
          <h5 className="mb-3">Assign to</h5>
          <input className="form-control mb-3" value="Everyone" />
          <h5 className="mb-3">Due</h5>
          <input className="form-control mb-3" defaultValue={assignment?.dueDate}
          onChange={(e) => assignment.dueDate = e.target.value} type="date" />
          <div className="row">
            <div className="col">
              <h5>Available from</h5>
              <input className="form-control" defaultValue={assignment?.availableDate}
              onChange={(e) => assignment.availableDate = e.target.value} type="date" />
            </div>
            <div className="col">
              <h5>Until</h5>
              <input className="form-control" type="date" />
            </div>
          </div>
        </div>
      </div>
      <div className="row mb-3 float-end">
        <button className="btn btn-lg btn-secondary me-1 col">
          <Link to={`/Kanbas/Courses/${cid}/Assignments`}
          className="text-decoration-none text-reset">
            Cancel
          </Link>
        </button>
        <button className="btn btn-lg btn-danger me-1 col">
          <Link to={`/Kanbas/Courses/${cid}/Assignments`}
          className="text-decoration-none text-reset">
            Save
          </Link>
        </button>
      </div>
    </div>
  );
}