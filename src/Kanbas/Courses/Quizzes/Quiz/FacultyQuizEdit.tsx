import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { setQuiz } from "./reducer";
import * as client from "../client";
import { useEffect, useState } from "react";
import DetailsEditor from "./DetailsEditor";
import { Link } from "react-router-dom";
import QuestionsEditor from "./QuestionsEditor";

export default function FacultyQuizEdit() {
    const { quiz } = useSelector((state: any) => state.quizReducer);
    const [selectedTab, setSelectedTab] = useState("DETAILS");
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const { cid, qid } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const fetchQuiz = async () => {
        const quiz = await client.findQuiz(qid as string);
        dispatch(setQuiz(quiz));
    };
    const navigateBack = () => {
        navigate(-1);
        return (<div></div>)
    }
    const onSave = async () => {
        await client.updateQuiz(qid as string, quiz);
        navigate(`/Kanbas/Courses/${cid}/Quizzes/${qid}`);
    }
    const onSaveAndPublish = async () => {
        const updatedQuiz = {...quiz, published: true};
        await client.updateQuiz(qid as string, updatedQuiz);
        navigate(`/Kanbas/Courses/${cid}/Quizzes/`)
    }
    useEffect(() => {
        fetchQuiz();
    }, []);
    return currentUser.role === "FACULTY" ? (
        <div className="ms-5 me-5">
            <h1>Edit Quiz</h1>
            <h5 className="float-end">Points: {quiz.points}</h5>
            <ul className="nav nav-pills justify-content-center mb-3">
                <li className={`nav-item ${selectedTab === "DETAILS" ? "active" : ""} nav-link`}
                onClick={() => setSelectedTab("DETAILS")}>
                    Details
                </li>
                <li className={`nav-item ${selectedTab === "QUESTIONS" ? "active" : ""} nav-link`}
                onClick={() => setSelectedTab("QUESTIONS")}>
                    Questions
                </li>
            </ul>
            <div className="row justify-content-center mb-3">
                <Link className="col float-start" to={`/Kanbas/Courses/${cid}/Quizzes`}>
                    <button className="btn btn-secondary">Cancel</button>
                </Link>
                <button className="col-3 me-2 float-end btn btn-danger" onClick={onSave}>
                    Save
                </button>
                <button className="col-3 me-2 float-end btn btn-success" onClick={onSaveAndPublish}>
                    Save and Publish
                </button>
            </div>
            <div className="border rounded p-3 mb-3">
                {selectedTab === "DETAILS" && (<DetailsEditor />)}
                {selectedTab === "QUESTIONS" && (<QuestionsEditor />)}
            </div>
            <div className="row justify-content-center">
                <Link className="col float-start" to={`/Kanbas/Courses/${cid}/Quizzes`}>
                    <button className="btn btn-secondary">Cancel</button>
                </Link>
                <button className="col-3 me-2 float-end btn btn-danger" onClick={onSave}>
                    Save
                </button>
                <button className="col-3 me-2 float-end btn btn-success" onClick={onSaveAndPublish}>
                    Save and Publish
                </button>
            </div>
        </div>
    ) : navigateBack();
}