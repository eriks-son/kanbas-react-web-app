import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import * as client from "../client";
import { setQuiz, updateQuestion } from "./reducer";
import { useEffect, useState } from "react";
import MultiQuestionTaker from "./QuestionTakers/MultiQuestionTaker";
import FillInTheBlankQuestionTaker from "./QuestionTakers/FillInTheBlankQuestionTaker";
import TrueFalseQuestionTaker from "./QuestionTakers/TrueFalseQuestionTaker";

export default function TakeQuiz() {
    const { cid, qid } = useParams();
    const [questionId, setQuestionId] = useState(0);
    const { quiz } = useSelector((state: any) => state.quizReducer);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const fetchQuiz = async () => {
        const quiz = await client.findQuiz(qid as string);
        dispatch(setQuiz(quiz));
    };
    const updateQuestionValue = (questionId: number, updates: any) => {
        dispatch(updateQuestion({questionId: questionId, updates: updates}));
    };
    const onSubmit = async () => {
        if (currentUser.role === "FACULTY") {
            navigate(`/Kanbas/courses/${cid}/quizzes/${qid}`);
            return;
        }
        let score = 0;
        const selectedAnswers = quiz.questions.map((question: any) => {
            return {...question.answers.find((answer: any) => answer.selected), questionId: question._id}
        });
        for (let i = 0; i < quiz.questions.length; i++) {
            const question = quiz.questions[i];
            const selectedAnswer = selectedAnswers[i];
            if (!selectedAnswer) continue;
            if (question.answers.find((answer: any) => answer.text === selectedAnswer.text && answer.correct)) score += question.points;
        }
        await client.finalizeQuizAttempt(qid as string, currentUser._id, score, selectedAnswers);
        navigate(`/Kanbas/courses/${cid}/quizzes/${qid}`);
    }
    useEffect(() => {
        fetchQuiz();
    }, []);
    const question = quiz.questions.find((q: any) => q._id === questionId);
    return (
        <div>
            <h1>{quiz.name}</h1>
            {currentUser.role === "FACULTY" && <div className="row bg-secondary p-3 rounded mb-2">
                THIS IS A PREVIEW
            </div>}
            <h3>Question {question._id + 1}</h3>
            {question.questionType === "MULTIPLE_CHOICE" && 
            <MultiQuestionTaker questionId={questionId} updateQuestionValue={updateQuestionValue} />}
            {question.questionType === "FILL_IN_THE_BLANK" && 
            <FillInTheBlankQuestionTaker questionId={questionId} updateQuestionValue={updateQuestionValue} />}
            {question.questionType === "TRUE_FALSE" && 
            <TrueFalseQuestionTaker questionId={questionId} updateQuestionValue={updateQuestionValue} />}
            <div className="row">
                <div className="col">
                    <button disabled={!questionId} className="btn btn-secondary"
                    onClick={() => setQuestionId(questionId - 1)}>Previous Question</button>
                </div>
                {currentUser.role === "FACULTY" && 
                <div className="col">
                    <button className="btn btn-secondary"
                    onClick={onSubmit}>Leave Preview</button>
                </div>
                }
                <div className="col">
                    <button className="btn btn-danger"
                    onClick={onSubmit}>Submit</button>
                </div>
                <div className="col">
                    <button disabled={questionId === quiz.questions.length - 1} 
                    className="btn btn-secondary"
                    onClick={() => setQuestionId(questionId + 1)}>Next Question</button>
                </div>
            </div>
        </div>
    )
}