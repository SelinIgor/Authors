import React from 'react'
import s from './Post.module.css'
import {NavLink, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {getComments} from "../../../redux/usersReducer";




const Post = (props)=>{


const onClick = ()=>{


    debugger
        return (
    props.getComments(props.postId)
        )

}

    return(
        <div>
            <div className={s.postContainer}>
            <div className={s.post}>
                <p>Title: {props.person.title}</p>
                <p>Text: {props.person.body}</p>
                <NavLink onClick={onClick} className={s.details} to={`/post`}>Details</NavLink>
            </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state)=>{
    return{

    }
}

export default withRouter(connect(mapStateToProps,{getComments})(Post))