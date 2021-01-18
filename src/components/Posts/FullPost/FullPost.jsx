import React from 'react'
import {connect} from "react-redux";
import s from './FullPost.module.css'

const FullPost = (props)=>{

    return(
        <div> {props.comments.map(post=><div className={s.posts}>
            <div className={s.container}>
                <div className={s.postsInner}>
            <p>Name: {post.name}</p>
            <p>Body: {post.body}</p>
            <p>Email: {post.email}</p>
                </div>

            </div>
        </div>)}
        </div>
    )
}

const mapStateToProps =(state)=> {
    return {
        posts:state.UsersPage.posts,
        comments:state.UsersPage.comments
    }
}


export default connect(mapStateToProps)(FullPost)