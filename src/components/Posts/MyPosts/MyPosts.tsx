import React from 'react'
import s from "../Posts.module.css";
import AddPostRedux from "../AddPost/AddPost";
import {connect} from "react-redux";
import {addPostThunk, Posts} from "../../../redux/usersReducer";
import {AppStateType} from "../../../redux/reduxStore";

type PropsType = {
    addPostThunk: (title: string, body: string, postId: number)=>void
    myPosts: Array<Posts>
}

const MyPosts = (props: PropsType)=>{



    const onSubmitForm = (value: any) => {
        debugger
        props.addPostThunk(value.title, value.body,value.postId)
    }
    return(
        <div className={s.myPosts}>
            <div className={s.container}>
            <AddPostRedux onSubmit={onSubmitForm}/>
            <p>Your post:
                {props.myPosts.map(post =><div className={s.PostsItem}>
                    <p>Title: {post.title}</p>
                    <p>Text: {post.body}</p>
                </div>)}
            </p>
            </div>
        </div>
    )
}

const mapStateToProps = (state: AppStateType)=>{
    return{
        myPosts: state.UsersPage.myPosts
    }
}

export default connect(mapStateToProps,{addPostThunk})(MyPosts)