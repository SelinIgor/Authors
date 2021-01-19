import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";


class Header extends React.Component {

    render() {
        return (<div>
            <div className={s.header}>
                <div className={s.container}>
                    <div className={s.headerInner}>
                        <div  className={s.navItem}>   <NavLink to={"/"}>Users</NavLink></div>
                       <div  className={s.navItem}> <NavLink to={"/MyPosts"}>My Posts</NavLink></div>
                    </div>
                </div>


            </div>
        </div>)
    }
}

export default Header