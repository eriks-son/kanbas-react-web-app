import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import * as client from "./client";
import * as coursesClient from "../client";
import { deleteQuiz, setQuizzes, updateQuiz } from "./reducer";
import { useEffect } from "react";
import PublishedControlButtons from "./PublishedControlButtons";
import QuizzesControls from "./QuizzesControls";
import { BsGripVertical } from "react-icons/bs";
import { FaTrash } from "react-icons/fa";
import { BiPencil } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function Quizzes() {
    const { cid } = useParams();
    const { quizzes } = useSelector((state: any) => state.quizzesReducer);
    const dispatch = useDispatch();
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const date = Date.now();
    const fetchQuizzes = async () => {
      const quizzes = await coursesClient.findQuizzesForCourse(cid as string);
      dispatch(setQuizzes(quizzes));
    };
    useEffect(() => {
      fetchQuizzes();
    }, []);
    return (
      <div id="wd-quizzes" className="m-4">
        <h1>Quizzes</h1>
        {currentUser.role === "FACULTY" && (<div><QuizzesControls /><br /><br /><br /><br /></div>)}
  
        <ul id="wd-assignment-list" className="list-group rounded">
          {quizzes.map((quiz: any) => (
            <li className="wd-assignment list-group-item pe-0 ps-0 row">
              <div className="wd-assignment-link row align-items-center">
                  <div className="text-black col-8 ms-2 mt-3">
                  <Link to={`/Kanbas/Courses/${cid}/Quizzes/${quiz._id}`}
              className="wd-quiz-link align-items-center text-reset text-decoration-none">
                    {quiz.name}
                    </Link>
                    <div className="text-secondary">
                      <p>
                        {quiz.availableStartDate > date ? `Not available until ${quiz.availableStartDate.toString().substring(0, 10)}` : (
                            quiz.availableEndDate < date ? "Closed" : `Available until ${quiz.availableEndDate.toString().substring(0, 10)}`
                        )} | 
                        Due {quiz.dueDate.toString().substring(0, 10)} at 11:59pm | 
                        {" " + quiz.questions.reduce((partialSum: number, question: any) => partialSum + question.points, 0)} pts | 
                        {" " + quiz.questions.length} questions 
                      </p>
                    </div>
                  </div>
                {currentUser.role === "FACULTY" && (<div className="col fs-5">
                  <PublishedControlButtons published={quiz.published} quizId={quiz._id} />
                </div>)}
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }