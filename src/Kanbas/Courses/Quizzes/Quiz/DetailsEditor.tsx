import { useDispatch, useSelector } from "react-redux";
import { setQuiz } from "./reducer";

export default function DetailsEditor() {
    const { quiz } = useSelector((state: any) => state.quizReducer);
    const dispatch = useDispatch();
    const updateQuizField = (updates: any) => {
        const newQuiz = {...quiz, ...updates};
        dispatch(setQuiz(newQuiz));
    };
    return (
        <div className="justify-content-center">
        <div className="row mb-3">
            <b className="col">Quiz Name</b>
            <input className="col form-control" 
            value={quiz.name} onChange={(e) => updateQuizField({ name: e.target.value })}/>
        </div>
            <div className="row mb-3">
                <b className="col">Quiz Type</b>
                <select className="col form-select" value={quiz.quizType} 
                onChange={(e) => updateQuizField({ quizType: e.target.value })}>
                    <option value="GRADED_QUIZ">Graded Quiz</option>
                    <option value="PRACTICE_QUIZ">Practice Quiz</option>
                    <option value="GRADED_SURVEY">Graded Survey</option>
                    <option value="UNGRADED_SURVEY">Ungraded Survey</option>
                </select>
            </div>
            <div className="row mb-3">
                <b className="col">Quiz Description</b>
                <textarea className="col form-control" 
                value={quiz.description} onChange={(e) => updateQuizField({ description: e.target.value })}/>
            </div>
            <div className="row mb-3">
                <b className="col">Assignment Group</b>
                <select className="col form-select" value={quiz.assignmentGroup} 
                onChange={(e) => updateQuizField({ assignmentGroup: e.target.value })}>
                    <option value="QUIZZES">Quizzes</option>
                    <option value="ASSIGNMENTS">Assignments</option>
                    <option value="EXAMS">Exams</option>
                    <option value="PROJECT">Project</option>
                </select>
            </div>
            <div className="row mb-3">
                <b className="col">Shuffle Answers</b>
                <input type="checkbox" className="col form-radio" 
                value={quiz.shuffleAnswers} onClick={(e) => updateQuizField({ shuffleAnswers: !quiz.shuffleAnswers })} />
            </div>
            <div className="row mb-3">
                <b className="col">Time Limit (Minutes)</b>
                <input className="col form-control" type="number"
                value={quiz.timeLimit} onChange={(e) => updateQuizField({ timeLimit: e.target.value })} />
            </div>
            <div className="row mb-3">
                <b className="col">Multiple Attempts</b>
                <input type="checkbox" className="col form-radio" 
                checked={quiz.allowedAttempts > 1} onClick={(e) => {
                    let allowedAttempts = 0;
                    if (quiz.allowedAttempts > 1) allowedAttempts = 1
                    else allowedAttempts = 2;
                    updateQuizField({ allowedAttempts: allowedAttempts });
                }} />
            </div>
            {(quiz.allowedAttempts > 1 || quiz.allowedAttempts === "") && (
                <div className="row mb-3">
                    <b className="col">Attempts Allowed</b>
                    <input type="number" className="col form-control"
                    value={quiz.allowedAttempts} onChange={(e) => updateQuizField({ allowedAttempts: e.target.value })} />
                </div>
            )}
            <div className="row mb-3">
                <b className="col">Show Correct Answers</b>
                <input type="checkbox" className="col form-radio" 
                checked={quiz.showCorrectAnswers} onClick={(e) => updateQuizField({ showCorrectAnswers: !quiz.showCorrectAnswers })} />
            </div>
            {quiz.showCorrectAnswers && (
                <div className="row mb-3">
                    <b className="col">Show Correct Answers Date</b>
                    <input type="date" className="col form-control"
                    value={quiz.showCorrectAnswersDate.substring(0, 10)} onChange={(e) => updateQuizField({ showCorrectAnswersDate: e.target.value })} />
                </div>
            )}
            <div className="row mb-3">
                <b className="col">One Question at a Time</b>
                <input type="checkbox" className="col form-radio" 
                value={quiz.oneQuestionAtATime} onClick={(e) => updateQuizField({ oneQuestionAtATime: !quiz.shuffleAnswers })} />
            </div>
            <div className="row mb-3">
                <b className="col">Webcam Required</b>
                <input type="checkbox" className="col form-radio" 
                value={quiz.webcamRequired} onClick={(e) => updateQuizField({ webcamRequired: !quiz.shuffleAnswers })} />
            </div>
            <div className="row mb-3">
                <b className="col">Lock Questions After Answering</b>
                <input type="checkbox" className="col form-radio" 
                value={quiz.lockAfterAnswering} onClick={(e) => updateQuizField({ lockAfterAnswering: !quiz.shuffleAnswers })} />
            </div>
            <div className="row mb-3">
                <b className="col">Due Date</b>
                <input type="date" className="col form-control"
                value={quiz.dueDate.substring(0, 10)} onChange={(e) => updateQuizField({ dueDate: e.target.value })} />
            </div>
            <div className="row mb-3">
                <b className="col">Available Start Date</b>
                <input type="date" className="col form-control"
                value={quiz.availableStartDate.substring(0, 10)} onChange={(e) => updateQuizField({ availableStartDate: e.target.value })} />
            </div>
            <div className="row mb-3">
                <b className="col">Available Until Date</b>
                <input type="date" className="col form-control"
                value={quiz.availableEndDate.substring(0, 10)} onChange={(e) => updateQuizField({ availableEndDate: e.target.value })} />
            </div>
        </div>
    );
};