import { Navigate, Route, Routes, useParams, useLocation } from "react-router";
import CoursesNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import PeopleTable from "./People/Table";
import * as client from "./client";
import { FaAlignJustify } from "react-icons/fa";
import { useEffect, useState } from "react";
import Quizzes from "./Quizzes";
import Quiz from "./Quizzes/Quiz";
import FacultyQuizEdit from "./Quizzes/Quiz/FacultyQuizEdit";
import TakeQuiz from "./Quizzes/Quiz/TakeQuiz";

export default function Courses({ courses }: { courses: any[]; }) {
  const { cid } = useParams();
  const [users, setUsers] = useState<any[]>([]);
  const fetchUsers = async () => {
    const users = await client.findUsersForCourse(cid as string);
    setUsers(users);
  };
  const course = courses.find((course) => course._id === cid);
  const { pathname } = useLocation();
  useEffect(() => {
    fetchUsers();
  }, [cid]);
  return (
    <div id="wd-courses">
      <h2 className="text-danger">
        <FaAlignJustify className="me-4 fs-4 mb-1" />
        {course && course.name} &gt; {pathname.split("/")[4]}
      </h2>
      <hr />
      <div className="row">
        <div className="col-2">
          <CoursesNavigation />
        </div>
        <div className="col">
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route path="Assignments/:aid" element={<AssignmentEditor />} />
            <Route path="People" element={<PeopleTable users={users} />} />
            <Route path="Quizzes" element={<Quizzes />} />
            <Route path="Quizzes/:qid" element={<Quiz />} />
            <Route path="Quizzes/:qid/edit" element={<FacultyQuizEdit />} />
            <Route path="Quizzes/:qid/attempt" element={<TakeQuiz />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}