import { useDispatch, useSelector } from "react-redux";
import { addQuizQuestion, changeQuestionType, deleteQuizQuestion, updateQuestion } from "./reducer";
import MultiQuestionEditor from "./QuestionEditors/MultiQuestionEditor";
import TrueFalseQuestionEditor from "./QuestionEditors/TrueFalseQuestionEditor";
import FillInTheBlankQuestionEditor from "./QuestionEditors/FillInTheBlankQuestionEditor";

export default function QuestionsEditor() {
    const { quiz } = useSelector((state: any) => state.quizReducer);
    const dispatch = useDispatch();
    const addNewQuestion = () => {
        dispatch(addQuizQuestion(null));
    };
    const updateQuestionType = (questionId: any, questionType: any) => {
        dispatch(changeQuestionType({
            questionType: questionType,
            id: questionId,
        }));
    };
    const updateQuestionValue = (questionId: number, updates: any) => {
        dispatch(updateQuestion({questionId: questionId, updates: updates}));
    }
    const deleteQuestion = (questionId: number) => {
        dispatch(deleteQuizQuestion(questionId));
    }
    return (
        <div className="justify-content-center">
            {quiz.questions.map((q: any) => {
                return (<div>
                    <h2>Question {q._id + 1}</h2>
                    <select value={q.questionType} className="form-select"
                    onChange={(e) => updateQuestionType(q._id, e.target.value)}>
                        <option value="MULTIPLE_CHOICE">Multiple Choice</option>
                        <option value="TRUE_FALSE">True or False</option>
                        <option value="FILL_IN_THE_BLANK">Fill in the Blank</option>
                    </select>
                    {q.questionType === "MULTIPLE_CHOICE" && <MultiQuestionEditor questionId={q._id} updateQuestionValue={updateQuestionValue} />}
                    {q.questionType === "TRUE_FALSE" && <TrueFalseQuestionEditor questionId={q._id} updateQuestionValue={updateQuestionValue} />}
                    {q.questionType === "FILL_IN_THE_BLANK" && <FillInTheBlankQuestionEditor questionId={q._id} updateQuestionValue={updateQuestionValue} /> }
                    <button className="btn btn-danger col mb-3" onClick={() => deleteQuestion(q._id)}>Delete Question</button>
                </div>);
            })}
            <button className="justify-content-center col-3 btn btn-secondary" onClick={addNewQuestion}>
                Add New Question
            </button>
        </div>
    );
};