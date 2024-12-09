export default function FillInTheBlankQuestionReview({question, realAnswer, showCorrect}: {
    question: any;
    realAnswer: any;
    showCorrect: any;
}) {
    return (
    <div className="p-3 border rounded col-7">
        <div className="row mb-1">
            <h5 className="col">Question {question._id + 1}: {question.question}</h5>
            <div className="float-end col-3">
                <b>Points: {question.answers.some((a: any) => a.correct && a.text === realAnswer.text) ? question.points : 0}/{question.points}</b>
            </div>
        </div><div className="row">
                    <b className="col">Answer Given</b>
                    {showCorrect && <b className="col">Correct</b>}
                </div>
                <div className="row">
                    <p className="col">{realAnswer.text}</p>
                    {showCorrect && <p className="col">{question.answers.find((a: any) => a.correct).text}</p>}
                </div>
    </div>)
}