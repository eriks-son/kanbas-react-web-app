import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import * as client from "../client";
import { useSelector } from "react-redux";
import MultiQuestionReviewer from "./QuestionReviewer/MultiQuestionReviewer";
import FillInTheBlankQuestionReview from "./QuestionReviewer/FillInTheBlankQuestionReview";

export default function StudentQuizDetails({ quiz }: { quiz: any }) {
    const [attempts, setAttempts] = useState([]);
    const { qid } = useParams();
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const date = new Date().toISOString().substring(0, 10);
    const isAvailable = () => {
        if (date < quiz.availableStartDate?.substring(0, 10) || date > quiz.availableEndDate?.substring(0, 10)) return false;
        if (attempts.length >= quiz.allowedAttempts) return false;
        return true;
    };
    const showCorrect = () => {
        return quiz.showCorrectAnswers && quiz.showCorrectAnswersDate.substring(0, 10) <= date;
    }
    const fetchAttempts = async () => {
        const response = await client.getQuizAttempts(qid as string, currentUser._id);
        setAttempts(response);
    };
    const latestAttempt: any = attempts.reduce((prev: any, cur: any) => !prev || prev.timestamp < cur.timestamp ? cur : prev, null);
    useEffect(() => {
        fetchAttempts();
        console.log(latestAttempt)
    }, []);
    return (
        <div id="wd-student-quiz-details" className="me-3">
            <h1>{quiz.name}</h1>
            <p className="p-3 bg-secondary rounded">{quiz.description}</p>
            <div className="row mb-3">
                <b className="col">Questions</b>
                <b className="col">Points</b>
                <b className="col">Attempts</b>
                <b className="col">Availability</b>
                <b className="col">Due</b>
            </div>
            <div className="row mb-3">
                <p className="col">{quiz.questions.length}</p>
                <p className="col">{quiz.points}</p>
                <p className="col">{attempts.length}/{quiz.allowedAttempts}</p>
                <p className="col">
                    {date < quiz.availableStartDate?.substring(0, 10) ? 
                    `Opens on ${quiz.availableStartDate?.substring(0, 10)}`: 
                    (date < quiz.availableEndDate?.substring(0, 10) ? "Open" : "Closed")}
                </p>
                <p className="col">{quiz.dueDate?.substring(0, 10)}</p>
            </div>
            {isAvailable() && <div className="row mb-3">
                <Link to="attempt">
                    <button className="btn btn-danger">
                        Start Quiz
                    </button>
                </Link>
            </div>}
            {attempts.length ? (<div>
                <div className="row mb-3">
                    <h4>Latest Attempt ({latestAttempt.timestamp.substring(0, 10)}) [Score: {latestAttempt?.score}/{quiz.points}]:</h4>
                </div>
                {quiz.questions.map((question: any) => {
                    if (question.questionType === "MULTIPLE_CHOICE" || question.questionType === "TRUE_FALSE") {
                        return <MultiQuestionReviewer question={question} 
                        showCorrect={showCorrect()}
                        realAnswer={latestAttempt.answers.find((a: any) => a.questionId === question._id)} />
                    };
                    if (question.questionType === "FILL_IN_THE_BLANK") {
                        return <FillInTheBlankQuestionReview question={question}
                        showCorrect={showCorrect()}
                        realAnswer={latestAttempt.answers.find((a: any) => a.questionId === question._id)} />
                    };
                })}
            </div>) : ""}
        </div>
    )
}