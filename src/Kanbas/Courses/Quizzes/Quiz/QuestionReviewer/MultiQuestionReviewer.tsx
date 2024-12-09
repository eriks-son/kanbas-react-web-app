import { FaCheckCircle } from "react-icons/fa";

export default function MultiQuestionReviewer({question, realAnswer, showCorrect}: {
    question: any;
    realAnswer: any;
    showCorrect: any;
}) {
    console.log(realAnswer)
    return (
    <div className="p-3 border rounded col-7">
        <div className="row mb-1">
            <h5 className="col">Question {question._id + 1}: {question.question}</h5>
            <div className="float-end col-3">
                <b>Points: {question.answers.some((a: any) => a.correct && a.text === realAnswer.text) ? question.points : 0}/{question.points}</b>
            </div>
        </div>
                <div className="row">
                <b className="col">Answers</b>
                    <b className="col-2">Chosen</b>
                    {showCorrect && <b className="col-2">Correct</b>}
                </div>
        {question.answers.map((a: any) => {
            return (<div className="row">
                <div className="col">
                    <p>{a.text}</p>
                </div>
            <div className="col-2">
                {realAnswer.text === a.text && <FaCheckCircle className="text-danger me-1 fs-5" />}
            </div>
            {showCorrect && <div className="col-2">
                {a.correct && <FaCheckCircle className="text-danger me-1 fs-5" />}
            </div>}
        </div>)
        })}
    </div>)
}