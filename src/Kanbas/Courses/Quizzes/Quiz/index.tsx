import { useDispatch, useSelector } from "react-redux";
import * as client from "../client";
import { useParams } from "react-router";
import { setQuiz } from "./reducer";
import { useEffect } from "react";
import FacultyQuizDetails from "./FacultyQuizDetails";
import StudentQuizDetails from "./StudentQuizDetails";

export default function Quiz() {
    const { qid } = useParams();
    const { quiz } = useSelector((state: any) => state.quizReducer);
    const dispatch = useDispatch();
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const fetchQuiz = async () => {
        const quiz = await client.findQuiz(qid as string);
        dispatch(setQuiz(quiz));
    };
    useEffect(() => {
        fetchQuiz();
    }, []);
    if (currentUser.role === "FACULTY") { 
        return <FacultyQuizDetails quiz={quiz} />
    } else {
        return (
            <StudentQuizDetails quiz={quiz} />
        )
    }
};