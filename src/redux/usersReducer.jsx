import {usersAPI} from "../components/api/api";

const SET_USERS = 'SET_USERS';
const SET_POSTS = 'SET_POSTS';
const SET_COMMENTS = 'SET_COMMENTS'
const ADD_POST = 'ADD_POST'


let InitialState ={
    users:[],
    posts:[],
    comments:[]
};


let usersReducer=(state
= InitialState,action)=> {

    switch (action.type) {

        case SET_USERS:
            {
         return {...state,
             users: [...action.persons]
         }
        }
        case SET_POSTS:
        {
            return {
                ...state,
                posts: [...action.posts]
            }

        }
        case SET_COMMENTS:
            {

            return{
                ...state,
                comments: [...action.comments]
            }

        }

        case ADD_POST:
        {
            return {
                ...state,
                posts: [...state.posts, action.payload]
            }
        }


        default:
            return state
    }}

export const setUsers =(persons)=>{

    return{type: SET_USERS, persons}
}
export const setPosts=(posts)=>{

    return{type: SET_POSTS, posts}
}

export const setComments=(comments)=>{
    return{type: SET_COMMENTS, comments}
}


export const getComments = (postId) =>{
    return (dispatch)=>{

        usersAPI.getComments(postId).then(response => {
            dispatch(setComments(response))

        });
    }
};

export const getPosts = (userId) =>{
    return (dispatch)=>{

        usersAPI.getPosts(userId).then(response => {
            dispatch(setPosts(response.data))

        });
    }
};



export const addPost = (post)=>{
    return{type: ADD_POST,payload: post}
}

export const addPostThunk = (title, body)=>{
    return(dispatch)=>{
        usersAPI.addPost(title, body).then(response =>{
            console.log(response.data)
          dispatch(addPost(response.data))

        })
    }
}



export default usersReducer;