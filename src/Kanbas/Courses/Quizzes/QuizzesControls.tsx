import { FaPlus } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { useParams } from "react-router";
import * as client from "../client";
import { addQuiz } from "./reducer";
import { useDispatch } from "react-redux";

export default function QuizzesControls() {
  const { cid } = useParams();
  const dispatch = useDispatch();
  const addNewQuiz = async () => {
    const newQuiz = await client.createQuizForCourse(cid as string);
    dispatch(addQuiz(newQuiz));
  }
  return (
    <div id="wd-quizzes-controls" className="text-nowrap row me-1">
      <div className="input-group me-1 col">
        <span className="input-group-text">
          <IoSearch />
        </span>
        <input type="text" className="form-control" placeholder="Search for Quiz"/>
      </div>
      <button id="wd-add-quiz-btn" className="btn btn-lg btn-danger me-1 float-end col-2"
      onClick={addNewQuiz}>
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Quiz</button>
    </div>
);}
