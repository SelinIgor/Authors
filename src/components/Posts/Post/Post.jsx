import React, {useState} from 'react'
import s from './Post.module.css'
import style from './../AddPost/AddPost.module.css'
import {NavLink, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {deletePostThunk, editPostThunk, getComments} from "../../../redux/usersReducer";
import {Field, reduxForm} from "redux-form";

const Post = (props) => {
    const onClick = () => {
        return (
            props.getComments(props.post.id)

        )
    }
    const deletePost = (id) => {
        setEditMode(false);
        props.deletePostThunk(id)
    }
    const [editMode, setEditMode] = useState(false);
    const ActivateEditMode = ()=>{
        setEditMode(true)
    }
    const DeactivateEditMode = (value) =>{
        setEditMode(false);
        props.editPostThunk(props.post.id,value)
    }
    return (
        <div>
            <div>
                <div className={s.post}>
                    {!editMode&& <div><p>Title: {props.post.title}</p>
                        <p>Text: {props.post.body}</p>
                        <div className={s.buttons}>
                        <NavLink onClick={onClick} className={s.details} to={`/post`}>Details</NavLink>
                        <div>
                        <button className={s.button} onClick={() => {(deletePost(props.post.id))}}>Delete</button>
                        <button className={s.button} onClick={ActivateEditMode}>Edit</button>
                        </div>
                        </div></div>}
                    {editMode&&<EditPostRedux onSubmit={DeactivateEditMode}/>}
                </div>
            </div>
        </div>
    )
}
let EditPost = (props)=>{
    return(<form onSubmit={props.handleSubmit}>
        <div >
            <div> <Field className={style.myTitle}  type={"text"}  name={"title"} component={"input"} placeholder={"Your title..."}/></div>
            <div>  <Field className={style.myText}  type={"text"}  name={"body"} component={"textarea"} placeholder={"Your body..."}/></div>
            <div><button className={style.btn}  type={"submit"}>Add post</button></div>
        </div>
    </form>)
};
let EditPostRedux = reduxForm({form:"editPost"})(EditPost)

export default withRouter(connect(null,{getComments,deletePostThunk,editPostThunk})(Post))