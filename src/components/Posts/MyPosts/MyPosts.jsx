import React from 'react'
import s from "../Posts.module.css";
import AddPostRedux from "../AddPost/AddPost";
import {connect} from "react-redux";
import {addPostThunk, deletePostThunk} from "../../../redux/usersReducer";


const MyPosts = (props)=>{

    const onSubmitForm = (value) => {
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

const mapStateToProps = (state)=>{
    return{
        myPosts: state.UsersPage.myPosts
    }
}

export default connect(mapStateToProps,{addPostThunk,deletePostThunk})(MyPosts)