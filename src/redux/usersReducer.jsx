import {usersAPI} from "../api/api";

const SET_USERS = 'SET_USERS';
const SET_POSTS = 'SET_POSTS';
const SET_COMMENTS = 'SET_COMMENTS'
const ADD_POST = 'ADD_POST'
const DELETE_POST = 'DELETE_POST'
const EDIT_POST = 'EDIT_POST'

let InitialState ={
    users:[],
    posts:[],
    comments:[],
    myPosts:[]
};
let usersReducer=(state = InitialState,action)=> {
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
                myPosts: [...state.myPosts, action.payload]
            }
        }
        case DELETE_POST:{
            let posts = state.posts.filter(item => item.id !== action.postId)
            return {
                ...state,
                posts:[...posts]
            }
        }
        case EDIT_POST:{
         debugger
            return {
                ...state,
                posts: state.posts.map(post=>{
                    if(post.id===action.postId ){
                        post={...action.post}
                        post.id= action.postId
                    }
                    return post;
                })
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

export const addPostThunk = (title, body,postId)=>{

    return(dispatch)=>{
        usersAPI.addPost(title, body,postId).then(response =>{
            console.log(response.data)
          dispatch(addPost(response.data))

        })
    }
}

const deletePost = (postId)=>{
debugger
    return{type: DELETE_POST, postId}
}

export const deletePostThunk = (id)=>{
    return(dispatch)=>{
        usersAPI.deletePost(id).then(response=> {
          console.log(response)
            dispatch(deletePost(id))

        }
    )
    }
}

const editPost = (postId, post)=>{
    debugger
    return{type: EDIT_POST, postId, post}
}

export const editPostThunk = (id,post)=>{
    return(dispatch)=>{
        debugger
        usersAPI.editPost(id,post).then(response=> {
                console.log(response)
                dispatch(editPost(id, response.post))
            }
        )
    }
}


export default usersReducer;