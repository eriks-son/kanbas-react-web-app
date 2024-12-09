import { useSelector } from "react-redux";

export default function TrueFalseQuestionEditor({questionId, updateQuestionValue}: {
    questionId: number;
    updateQuestionValue: (questionId: number, updates: any) => void;
}) {
    const { quiz } = useSelector((state: any) => state.quizReducer);
    const question = quiz.questions.find((question: any) => question._id === questionId);
    const updateCorrectAnswer = (answerIndex: number) => {
        const newAnswers = question.answers.map((answer: any, index: number) => index === answerIndex ? {...answer, correct: true} : {...answer, correct: false})
        updateQuestionValue(questionId, { answers: newAnswers });
    }
    return (
    <div className="mb-3 justify-content-center">
        <div className="row mb-1">
            <b className="col">Question</b>
            <input className="form-control col" 
            value={question.question} onChange={(e) => updateQuestionValue(questionId, { question: e.target.value })} />
        </div>
        <div className="row mb-1">
            <b className="col">Points</b>
            <input className="form-control col" type="number"
            value={question.points} onChange={(e) => updateQuestionValue(questionId, { points: parseInt(e.target.value) || 0 })} />
        </div>
        <div className="row mb-1">
            <h5>Answer (Select True or False)</h5>
        </div>
        {question.answers.map((a: any, index: number) => {
            return (<div className="row m-2">
                <p className="col">{a.text}</p>
                <input type="radio" className="col"
                checked={a.correct} onClick={(e) => updateCorrectAnswer(index)} />
            </div>)
        })}
    </div>)
}