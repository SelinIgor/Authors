import React from 'react'
import s from "../Post/Post.module.css";
import {connect} from "react-redux";


const MyPosts = (props)=>{
    return(
    <div>
        <div className={s.postContainer}>
            <div className={s.post}>
                <p>Title: {props.myPosts.title}</p>
            </div>
        </div>
    </div>)
}

const mapStateToProps = (state)=>{
    return {
        myPosts: state.UsersPage.myPosts
    }
}
export default connect(mapStateToProps,{})(MyPosts)