import React from 'react'
import s from "./User.module.css"
import {NavLink} from "react-router-dom";
const User = (props)=>{


    return(<div className={s.user}>
        <div className={s.container}>
            <div className={s.userInner}>
            <p>Name: {props.person.name}</p>
                <div className={s.btnContainer}>
                   <NavLink to={`/posts/${props.person.id}`}>Posts</NavLink>
                </div>
            </div>


        </div>
    </div>)
}

export default User