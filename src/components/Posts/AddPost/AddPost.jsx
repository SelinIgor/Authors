import React from "react";
import {Field, reduxForm} from "redux-form";
import s from './AddPost.module.css'
let AddPost = (props)=>{
    return(<form onSubmit={props.handleSubmit}>
        <div className={s.formContainer}>
       <div> <Field className={s.myTitle} type={"text"}  name={"title"} component={"input"} placeholder={"Your title..."}/></div>
      <div>  <Field className={s.myText} type={"text"}  name={"body"} component={"textarea"} placeholder={"Your body..."}/></div>
        <div><button className={s.btn} type={"submit"}>Add post</button></div>
        </div>
    </form>)
};
let AddPostRedux = reduxForm({form:"addPost"})(AddPost)
export default AddPostRedux
