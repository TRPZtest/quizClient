import { axiosInstance } from "./axiosInstance.js";

export const API_URL = "http://localhost:5207/Quiz";

class QuizService {
    getQuizzes() {            
        return axiosInstance
            .get(API_URL + "/Quizzes")                          
    }

    getQuiz(quizId) {
        return axiosInstance
            .get(API_URL + "/Quiz",  { params: { quizId: quizId } })         
    }

    startTake(quizId) {
        return axiosInstance
            .post(API_URL + "/Take", { quizId : quizId })
    }
}

export default new QuizService();