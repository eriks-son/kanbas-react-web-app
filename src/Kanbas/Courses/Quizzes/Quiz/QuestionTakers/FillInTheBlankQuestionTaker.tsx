import { useState } from "react";
import { useSelector } from "react-redux";

export default function FillInTheBlankQuestionTaker({questionId, updateQuestionValue}: {
    questionId: number;
    updateQuestionValue: (questionId: number, updates: any) => void;
}) {
    const { quiz } = useSelector((state: any) => state.quizReducer);
    const question = quiz.questions.find((question: any) => question._id === questionId);
    const currentAnswer = question.answers.find((answer: any) => answer.selected);
    const updateCurrentAnswer = (value: string) => {
        const newAnswers = question.answers.map((a: any) => a.selected ? {...a, text: value} : a);
        updateQuestionValue(questionId, { answers: newAnswers });
    };
    return (
    <div className="mb-3">
        <div className="row mb-1">
            <h5>{question.question}</h5>
        </div>
        <div className="row mb-1">
            <p>Fill in the blank:</p>
        </div>
        {<div className="row m-2">
                <input className="form-control" value={currentAnswer.text}
                onChange={(e) => updateCurrentAnswer(e.target.value)} />
        </div>
        }
    </div>)
}