import * as axios from "axios";


const instance = axios.create(
    {
        withCredentials: true,
        baseURL: " https://jsonplaceholder.typicode.com/",
    }
)



export const usersAPI = {
    getUsers(){
        return instance.get(`users`).then(response => {
            return response.data
        });
    },
    getPosts(userId){
        return instance.get(`posts?userId=${userId}`).then(response =>{
            return response.data
        })
    },
    getComments(postId){

        return instance.get(`comments?postId=${postId}`).then(response =>{
            return response.data
        })
    },
    addPost(title, body){
        return instance.post(`posts`,{title, body}).then(response=>{
            return  response
        })
    }

}