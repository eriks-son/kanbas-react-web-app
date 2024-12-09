import { useSelector } from "react-redux";

export default function MultiQuestionEditor({questionId, updateQuestionValue}: {
    questionId: number;
    updateQuestionValue: (questionId: number, updates: any) => void;
}) {
    const { quiz } = useSelector((state: any) => state.quizReducer);
    const question = quiz.questions.find((question: any) => question._id === questionId);
    const updateAnswerText = (answerIndex: number, answerText: any) => {
        const newAnswers = question.answers.map((answer: any, index: number) => index === answerIndex ? {...answer, text: answerText} : answer);
        updateQuestionValue(questionId, { answers: newAnswers });
    }
    const updateCorrectAnswer = (answerIndex: number) => {
        const newAnswers = question.answers.map((answer: any, index: number) => index === answerIndex ? {...answer, correct: true} : {...answer, correct: false})
        updateQuestionValue(questionId, { answers: newAnswers });
    }
    const removeAnswer = (answerIndex: number) => {
        const newAnswers = question.answers.filter((answer: any, index: number) => index != answerIndex);
        updateQuestionValue(questionId, { answers: newAnswers });
    }
    const addAnswer = () => {
        const newAnswers = [...question.answers, {
            text: "New Answer",
        }];
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
            <h5>Answers (Select one correct)</h5>
        </div>
        {question.answers.map((a: any, index: number) => {
            return (<div className="row m-2">
                <input className="col form-control"
                value={a.text} onChange={(e) => updateAnswerText(index, e.target.value)} />
                <input type="radio" className="col"
                checked={a.correct} onClick={(e) => updateCorrectAnswer(index)} />
                <button className="col-2 btn btn-danger" onClick={(e) => removeAnswer(index)}>Remove</button>
            </div>)
        })}
        <div className="row ms-1">
            <button className="col-2 btn btn-success" onClick={addAnswer}>Add Answer</button>
        </div>
    </div>)
}