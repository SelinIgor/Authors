import {usersAPI} from "../api/api";

const SET_USERS = 'SET_USERS';
const SET_POSTS = 'SET_POSTS';
const SET_COMMENTS = 'SET_COMMENTS'
const ADD_POST = 'ADD_POST'
const DELETE_POST = 'DELETE_POST'
const EDIT_POST = 'EDIT_POST'

let InitialState:InitialStateType ={
    users:[],
    posts:[],
    comments:[],
    myPosts:[]
}
type InitialStateType ={
    users: Array<Object>
    posts: Array<Posts>
    comments: Array<Object>
    myPosts: Array<Object>
}
type Posts ={
    userId: number
    id:number
    title: string
    body: string
}
let usersReducer=(state = InitialState,action: any):InitialStateType=> {
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

export const setUsers:setUsers =(persons)=>{

    return{type: SET_USERS, persons}
}
type setUsers = (persons:Array<Object>)=>{
     type: typeof SET_USERS, persons: Array<Object>
}
export const setPosts:setPosts=(posts)=>{

    return{type: SET_POSTS, posts}
}
type setPosts = (posts:Array<Object>)=>{
    type: typeof SET_POSTS, posts: Array<Object>
}

export const setComments:setComments=(comments)=>{
    return{type: SET_COMMENTS, comments}
}
type setComments = (comments:Array<Object>)=>{
    type: typeof SET_COMMENTS, comments: Array<Object>
}

export const getComments = (postId:number) =>{
    return (dispatch:any)=>{

        // @ts-ignore
        usersAPI.getComments(postId).then(response => {
            dispatch(setComments(response))

        });
    }
};

export const getPosts = (userId:number) =>{
    return (dispatch:any)=>{

        // @ts-ignore
        usersAPI.getPosts(userId).then(response => {
            dispatch(setPosts(response.data))

        });
    }
};



export const addPost:addPost = (post)=>{
    return{type: ADD_POST,payload: post}
}


type addPost = (post:Object)=>{
    type: typeof ADD_POST, // @ts-ignore
    payload: post
}
export const addPostThunk = (title:string, body:string)=>{

    return(dispatch:any)=>{
        // @ts-ignore
        usersAPI.addPost(title, body).then(response =>{
            console.log(response.data)
          dispatch(addPost(response.data))

        })
    }
}

const deletePost:deletePost = (postId)=>{
    return{type: DELETE_POST, postId}
}
type deletePost = (postId: number)=>{
    type: typeof DELETE_POST, postId:number
}

export const deletePostThunk = (id:number)=>{
    return(dispatch:any)=>{
        // @ts-ignore
        usersAPI.deletePost(id).then(response=> {
          console.log(response)
            dispatch(deletePost(id))

        }
    )
    }
}

const editPost:editPost = (postId, post)=>{
    return{type: EDIT_POST, postId, post}
}
type editPost = (postId: number,post:Object)=>{
    type: typeof EDIT_POST, postId:number,post:Object
}

export const editPostThunk = (id:number,post:Object)=>{
    return(dispatch:any)=>{
        debugger
        // @ts-ignore
        usersAPI.editPost(id,post).then(response=> {
                console.log(response)
                dispatch(editPost(id, response.post))
            }
        )
    }
}


export default usersReducer;