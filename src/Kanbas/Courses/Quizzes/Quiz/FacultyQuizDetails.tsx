import { Link } from "react-router-dom";

export default function FacultyQuizDetails({ quiz }: { quiz: any }) {
    const date = new Date().toISOString();
    return (
        <div id="wd-faculty-quiz-details" className="me-3">
        <div className="mb-3 me-5">
            <Link to="attempt">
                <button className="col-2 float-end btn btn-secondary me-1">
                    Preview
                </button>
            </Link>
            <Link to="edit">
                <button className="col-2 float-end btn btn-secondary me-1">
                    Edit
                </button>
            </Link>
        </div>
            <h1>{quiz.name}</h1>
            <div className="row mb-3">
                <b className="col">Quiz Description</b>
                <p className="col">{quiz.description}</p>
            </div>
            <div className="row mb-3">
                <b className="col">Quiz Type</b>
                <p className="col">{quiz.quizType}</p>
            </div>
            <div className="row mb-3">
                <b className="col">Points</b>
                <p className="col">{quiz.points}</p>
            </div>
            <div className="row mb-3">
                <b className="col">Assignment Group</b>
                <p className="col">{quiz.assignmentGroup}</p>
            </div>
            <div className="row mb-3">
                <b className="col">Shuffle Answers</b>
                <p className="col">{quiz.shuffleAnswers ? "Yes" : "No"}</p>
            </div>
            <div className="row mb-3">
                <b className="col">Time Limit</b>
                <p className="col">{quiz.timeLimit} Minutes</p>
            </div>
            <div className="row mb-3">
                <b className="col">Multiple Attempts</b>
                <p className="col">{quiz.allowedAttempts > 1 ? "Yes" : "No"}</p>
            </div>
            {quiz.multipleAttempts > 1 && (
                <div className="row mb-3">
                    <b className="col">Attempts Allowed</b>
                    <p className="col">{quiz.allowedAttempts}</p>
                </div>
            )}
            <div className="row mb-3">
                <b className="col">Show Correct Answers</b>
                <p className="col">{quiz.showCorrectAnswers ? (
                    quiz.showCorrectAnswersDate <= date ? "Immediately" : quiz.showCorrectAnswersDate?.substring(0, 10)
                ) : "Never"}</p>
            </div>
            <div className="row mb-3">
                <b className="col">Access Code</b>
                <p className="col">{quiz.accessCode === "" ? "None" : quiz.accessCode}</p>
            </div>
            <div className="row mb-3">
                <b className="col">One Question at a Time</b>
                <p className="col">{quiz.oneQuestionAtATime ? "Yes" : "No"}</p>
            </div>
            <div className="row mb-3">
                <b className="col">Webcam Required</b>
                <p className="col">{quiz.webcamRequired ? "Yes" : "No"}</p>
            </div>
            <div className="row mb-3">
                <b className="col">Lock Questions After Answering</b>
                <p className="col">{quiz.lockAfterAnswering ? "Yes" : "No"}</p>
            </div>
            <div className="row mb-3">
                <b className="col">Due Date</b>
                <p className="col">{quiz.dueDate?.substring(0, 10)}</p>
            </div>
            <div className="row mb-3">
                <b className="col">Available From Date</b>
                <p className="col">{quiz.availableStartDate?.substring(0, 10)}</p>
            </div>
            <div className="row mb-3">
                <b className="col">Available Until Date</b>
                <p className="col">{quiz.availableEndDate?.substring(0, 10)}</p>
            </div>
        </div>
    )
}