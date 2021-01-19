import React, {useState} from 'react'
import s from './Post.module.css'
import {NavLink, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {deletePostThunk, editPostThunk, getComments} from "../../../redux/usersReducer";
import {Field, reduxForm} from "redux-form";
const Post = (props)=>{
    debugger
    const onClick = () => {
        return (
            props.getComments(props.postId)
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
        props.editPostThunk(props.person.id,value)
    }
    return (
        <div>
            <div>
                <div className={s.post}>
                    {!editMode&& <div><p>Title: {props.person.title}</p>
                        <p>Text: {props.person.body}</p>
                        <div className={s.buttons}>
                        <NavLink onClick={onClick} className={s.details} to={`/post`}>Details</NavLink>
                        <div>
                        <button className={s.button} onClick={() => {(deletePost(props.person.id))}}>Delete</button>
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
            <div> <Field  type={"text"}  name={"title"} component={"input"} placeholder={"Your title..."}/></div>
            <div>  <Field  type={"text"}  name={"body"} component={"textarea"} placeholder={"Your body..."}/></div>
            <div><button  type={"submit"}>Add post</button></div>
        </div>
    </form>)
};
let EditPostRedux = reduxForm({form:"editPost"})(EditPost)


const mapStateToProps = (state)=>{
    return{

    }
}

export default withRouter(connect(mapStateToProps,{getComments,deletePostThunk,editPostThunk})(Post))