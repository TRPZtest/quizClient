import axios from "axios";

export const API_URL = "http://localhost:8080/Quiz";

class QuizService {
    constructor(){
        this.getToken = () => localStorage.getItem("token");

        this.getAuthorizationHeader = () => `Bearer ${this.getToken()}`;
    
        this.axiosInstance = axios.create({
            headers: { Authorization: this.getAuthorizationHeader() },
            onError(error) {
                alert('Request has failed', error);
            }
        });

        this.axiosInstance.interceptors.response.use(function (response) {            
            return response;
          }, function (error) {
            alert(error);
            return Promise.reject(error);
          });
    }
   
  
    getQuizzes() {            
        return this.axiosInstance
            .get(API_URL + "/Quizzes");                          
    }

    getQuiz(quizId) {
        return this.axiosInstance
            .get(API_URL + "/Quiz",  { params: { Id: quizId } })   ;      
    }

    startTake(quizId) {
        return this.axiosInstance
            .post(API_URL + "/Take", { quizId : quizId });
    }

    getOptions(questionId) {
        return this.axiosInstance
            .get(API_URL + "/Options", { params: { questionId: questionId }});
    }

    sendResponses(takeId, optionIds) {
        return this.axiosInstance
            .post(API_URL + "/Responses", { takeId: takeId, optionIds: optionIds })
    }
}

export default new QuizService();