import { Navigate, Route, Routes } from "react-router";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import Courses from "./Courses";
import "./styles.css";
import * as db from "./Database";
import { useEffect, useState } from "react";
import ProtectedRoute from "./Account/ProtectedRoute";
import Session from "./Account/Session";
import * as userClient from "./Account/client";
import * as courseClient from "./Courses/client";
import { useSelector } from "react-redux";

export default function Kanbas() {
  const [courses, setCourses] = useState<any[]>(db.courses);
  const [course, setCourse] = useState<any>({
    _id: "1234", name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15", description: "New Description",
  });
  const [enrolling, setEnrolling] = useState(false);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const fetchCourses = async () => {
    try {
      const courses = enrolling ? await userClient.fetchCoursesWithEnrollments() : await userClient.findMyCourses();
      setCourses(courses);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchCourses();
  }, [currentUser, enrolling]);

  const addNewCourse = async () => {
    const newCourse = await userClient.createCourse(course);
    setCourses([ ...courses, newCourse ]);
  };
  const deleteCourse = async (courseId: string) => {
    const status = await courseClient.deleteCourse(courseId);
    setCourses(courses.filter((course) => course._id !== courseId));
  };
  const updateCourse = async () => {
    await courseClient.updateCourse(course);
    setCourses(courses.map((c) => {
        if (c._id === course._id) { return course; }
        else { return c; }
    })
  );};
  return (
    <Session>
    <div id="wd-kanbas" className="row">
      <div className="">
        <KanbasNavigation />
      </div>
      <div className="wd-main-content-offset p-3">
        <Routes>
          <Route path="/" element={<Navigate to="Account" />} />
          <Route path="/Account/*" element={<Account />} />
          <Route path="/Dashboard" element={
            <ProtectedRoute>
              <Dashboard
                courses={courses}
                course={course}
                enrolling={enrolling}
                setCourse={setCourse}
                addNewCourse={addNewCourse}
                deleteCourse={deleteCourse}
                updateCourse={updateCourse}
                setEnrolling={setEnrolling}
                setCourses={setCourses}
              />
            </ProtectedRoute>
          } />
          <Route path="/Courses/:cid/*" element={<ProtectedRoute><Courses courses={courses} /></ProtectedRoute>} />
          <Route path="/Calendar" element={<h1>Calendar</h1>} />
          <Route path="/Index" element={<h1>Inbox</h1>} />
        </Routes>
      </div>
    </div>
    </Session>
  )
}