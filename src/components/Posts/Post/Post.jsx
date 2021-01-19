import React from 'react'
import s from './Post.module.css'
import {NavLink, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {deletePostThunk, getComments} from "../../../redux/usersReducer";




const Post = (props)=>{
const onClick = ()=>{
        return (
    props.getComments(props.postId)
        )
}
    const deletePost = (id)=>{
        debugger
        props.deletePostThunk(id)
    }

    return(
        <div>
            <div className={s.postContainer}>
            <div className={s.post}>
                <p>Title: {props.person.title}</p>
                <p>Text: {props.person.body}</p>
                <div className={s.buttons}>
                <NavLink onClick={onClick} className={s.details} to={`/post`}>Details</NavLink>
                <div>
                    <button className={s.deleteButton}  onClick={()=>{(deletePost(props.person.id))}}>Delete</button>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state)=>{
    return{

    }
}

export default withRouter(connect(mapStateToProps,{getComments,deletePostThunk})(Post))