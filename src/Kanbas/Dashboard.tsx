import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import * as userClient from "./Account/client";

export default function Dashboard({
  courses, course, enrolling, setCourse, addNewCourse, deleteCourse, updateCourse, setEnrolling, setCourses,
}: {
  courses: any[]; course: any; enrolling: boolean; setCourse: (course: any) => void;
  addNewCourse: () => void; deleteCourse: (course: any) => void;
  updateCourse: () => void; setEnrolling: (enrolling: any) => void; setCourses: (courses: any[]) => void
}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const enrollUser = async (courseId: string) => {
    const newCourses = await userClient.enrollUserInCourse(courseId) as any;
    setCourses(newCourses);
  };
  const unenrollUser = async (courseId: string) => {
    const newCourses = await userClient.unenrollUserInCourse(courseId) as any;
    setCourses(newCourses);
  };
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      {currentUser.role === "FACULTY" ? (<div>
        <h5>
        New Course
        <button className="btn btn-primary float-end"
        id="wd-add-new-course-click" onClick={addNewCourse}>
          Add
        </button>
        <button className="btn btn-warning float-end me-2"
        onClick={updateCourse} id="wd-update-course-click">
          Update
        </button>
      </h5>
      <br />
      <input value={course.name} className="form-control mb-2"
      onChange={(e) => setCourse({ ...course, name: e.target.value })} />
      <textarea value={course.description} className="form-control mb-2"
      onChange={(e) => setCourse({ ...course, description: e.target.value })} />
      <input value={course.number} className="form-control mb-2"
      onChange={(e) => setCourse({ ...course, number: e.target.value })} />
      <input value={course.startDate} type="date" className="form-control mb-2"
      onChange={(e) => setCourse({ ...course, startDate: e.target.value })} />
      <input value={course.endDate} type="date" className="form-control mb-2"
      onChange={(e) => setCourse({ ...course, endDate: e.target.value })} />
      </div>) : (
        <button className="btn btn-primary float-end" onClick={() => setEnrolling(!enrolling)}>Enrollments</button>
      )
      
      }
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((course) => (
            <div className="wd-dashboard-course col" style={{ width: "300px" }}>
              <div className="card rounded-3 overflow-hidden">
                  <img src="/images/calc.jpg" width="100%" height={160} />
                  <div className="card-body">
                <Link to={`/Kanbas/Courses/${course._id}/Home`}
                className="wd-dashboard-course-link text-decoration-none text-dark">
                    <h5 className="wd-dashboard-course-title card-title">
                      {course.name}
                    </h5>
                    <p className="wd-dashboard-course-title card-text overflow-y-hidden" style={{ maxHeight: 100 }}>
                      {course.description}
                    </p>

                </Link>
                    <div className="row">
                      <button className="col-3 btn btn-primary">Go</button>
                      {enrolling ? (
                        course.enrolled ? (
                          <div className="col pe-0">
                            <button onClick={() => unenrollUser(course._id)} className="btn btn-danger float-end">
                              Unenroll
                            </button>
                          </div>
                        ) : (
                          <div className="col pe-0">
                            <button onClick={() => enrollUser(course._id)} className="btn btn-success float-end">
                              Enroll
                            </button>
                          </div>
                        )
                      ) : (<div className="col">
                        <button onClick={(event) => {
                          event.preventDefault();
                          deleteCourse(course._id);
                        }} className="btn btn-danger float-end row"
                        id="wd-delete-course-click">
                          Delete
                        </button>
                        <button onClick={(event) => {
                          event.preventDefault();
                          setCourse(course);
                        }} className="btn btn-warning float-end row me-3"
                        id="wd-edit-course-click">
                          Edit
                        </button>
                      </div>)}
                    </div>
                  </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}