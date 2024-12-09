import { createSlice } from "@reduxjs/toolkit";
const addPoints = (quiz: any) => {
    return {...quiz, points: quiz.questions.reduce((sum: number, question: any) => sum + question.points, 0)};
}
const initialState = {
    quiz: { questions: [] as any[], },
};
const quizSlice = createSlice({
    name: "quiz",
    initialState,
    reducers: {
        setQuiz: (state, action) => {
            state.quiz = addPoints(action.payload);
        },
        deleteQuizQuestion: (state, action) => {
            const id = action.payload;
            state.quiz.questions = state.quiz.questions.filter((q) => q._id != id);
            state.quiz.questions = state.quiz.questions.map((q, index) => {
                return {...q, _id: index};
            });
            state.quiz = addPoints(state.quiz);
        },
        addQuizQuestion: (state, action) => {
            const id = state.quiz.questions.length;
            state.quiz.questions = [...state.quiz.questions, {
                _id: id,
                title: "New Question",
                questionType: "MULTIPLE_CHOICE",
                points: 0,
                question: "Insert question here",
                answers: [
                    { text: "Sample answer 1", correct: true },
                    { text: "Sample answer 2", },
                    { text: "Sample answer 3", },
                    { text: "Sample answer 4", },
                ],
            }];
        },
        updateQuestion: (state, action) => {
            const questionId = action.payload.questionId;
            const updates = action.payload.updates;
            state.quiz.questions = state.quiz.questions.map((q) => q._id === questionId ? {...q, ...updates} : q);
            state.quiz = addPoints(state.quiz);
        },
        changeQuestionType: (state, action) => {
            const questionType = action.payload.questionType;
            const id = action.payload.id;
            let newQuestion = {};
            if (questionType === "TRUE_FALSE") {
                newQuestion = {
                    _id: id,
                    questionType: questionType,
                    title: "New Question",
                    points: 0,
                    question: "Insert question here",
                    answers: [
                        { text: "True", correct: true },
                        { text: "False", },
                    ],
                };
            } else if (questionType === "FILL_IN_THE_BLANK") {
                newQuestion = {
                    _id: id,
                    questionType: questionType,
                    title: "New Question",
                    points: 0,
                    question: "Insert question here",
                    answers: [
                        { text: "Sample Answer", correct: true },
                        { text: "", selected: true },
                    ],
                };
            } else {
                newQuestion = {
                    _id: id,
                    questionType: "MULTIPLE_CHOICE",
                    title: "New Question",
                    points: 0,
                    question: "Insert question here",
                    answers: [
                        { text: "Sample answer 1", correct: true },
                        { text: "Sample answer 2", },
                        { text: "Sample answer 3", },
                        { text: "Sample answer 4", },
                    ],
                }
            }
            state.quiz.questions = state.quiz.questions.map((question) => 
                question._id === id ? newQuestion : question
            );
            state.quiz = addPoints(state.quiz);
        },
    },
});
export const { setQuiz, updateQuestion, deleteQuizQuestion, addQuizQuestion, changeQuestionType } = quizSlice.actions;
export default quizSlice.reducer;