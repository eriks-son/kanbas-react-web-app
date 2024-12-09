import axios from "axios";
const axiosWithCredentials = axios.create({ withCredentials: true });
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const QUIZZES_API = `${REMOTE_SERVER}/api/quizzes`;
export const findQuiz = async (quizId: string) => {
    const response = await axiosWithCredentials.get(`${QUIZZES_API}/${quizId}`);
    return response.data;
};
export const deleteQuiz = async (quizId: string) => {
    const response = await axiosWithCredentials.delete(`${QUIZZES_API}/${quizId}`);
    return response.data;
}
export const updateQuiz = async (quizId: string, quizUpdates: any) => {
    const response = await axiosWithCredentials.put(`${QUIZZES_API}/${quizId}`, quizUpdates);
    return response.data;
}
export const finalizeQuizAttempt = async (quizId: string, userId: string, score: number, selectedAnswers: any[]) => {
    const response = await axiosWithCredentials.post(`${QUIZZES_API}/${quizId}/attempts/${userId}`, { score: score, answers: selectedAnswers });
    return response.data;
}
export const getQuizAttempts = async (quizId: string, userId: string) => {
    const response = await axiosWithCredentials.get(`${QUIZZES_API}/${quizId}/attempts/${userId}`);
    return response.data;
}