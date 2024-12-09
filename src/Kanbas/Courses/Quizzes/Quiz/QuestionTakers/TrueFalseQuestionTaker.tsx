import { useSelector } from "react-redux";

export default function TrueFalseQuestionTaker({questionId, updateQuestionValue}: {
    questionId: number;
    updateQuestionValue: (questionId: number, updates: any) => void;
}) {
    const { quiz } = useSelector((state: any) => state.quizReducer);
    const question = quiz.questions.find((question: any) => question._id === questionId);
    const updateSelectedAnswer = (answerIndex: number) => {
        const newAnswers = question.answers.map((answer: any, index: number) => index === answerIndex ? {...answer, selected: true} : {...answer, selected: false})
        updateQuestionValue(questionId, { answers: newAnswers });
    }
    return (
    <div className="mb-3">
        <div className="row mb-1">
            <h5>{question.question}</h5>
        </div>
        <div className="row mb-1">
            <p>Select one:</p>
        </div>
        {question.answers.map((a: any, index: number) => {
            return (<div className="row form-check m-2">
                <input type="radio" className="form-check-input"
                checked={a.selected} onClick={(e) => updateSelectedAnswer(index)} />
                <p className="col form-check-label">{a.text}</p>
            </div>)
        })}
    </div>)
}