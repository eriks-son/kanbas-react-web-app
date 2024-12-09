import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    quizzes: [],
};
const quizzesSlice = createSlice({
    name: "quizzes",
    initialState,
    reducers: {
        setQuizzes: (state, action) => {
            state.quizzes = action.payload;
        },
        addQuiz: (state, { payload: quiz }) => {
            const newQuiz: any = {
                ...quiz,
            };
            state.quizzes = [...state.quizzes, quiz] as any;
        },
        deleteQuiz: (state, { payload: quizId }) => {
            state.quizzes = state.quizzes.filter(
                (q: any) => q._id !== quizId
            );
        },
        updateQuiz: (state, { payload: quiz }) => {
            console.log(quiz);
            state.quizzes = state.quizzes.map((q: any) =>
                q._id === quiz._id ? {...q, quiz} : q
            ) as any;
        },
        updateQuizPublished: (state, { payload: quizId }) => {
            state.quizzes = state.quizzes.map((q: any) => 
                q._id === quizId ? {...q, published: !q.published} : q
            ) as any;
        }
    },
});
export const { setQuizzes, addQuiz, deleteQuiz, updateQuiz, updateQuizPublished } = quizzesSlice.actions;
export default quizzesSlice.reducer;