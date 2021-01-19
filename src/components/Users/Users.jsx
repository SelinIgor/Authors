import React from 'react';
import s from './../Users/Users.module.css'
import {connect} from "react-redux";
import {setUsers} from "../../redux/usersReducer";
import User from "./User/User";
import {withRouter} from "react-router-dom";
import {usersAPI} from "../../api/api";

class Users extends React.Component {

    componentDidMount() {
        usersAPI.getUsers().then(response=>{
             this.props.setUsers(response)
         })
    }


    render() {
        return (<div>
            <div className={s.users}>
                <div className={s.container}>
                    <div>
                        <div className={s.usersInner}>
                            <div>
                                <div>
                                    <div>All users:</div>
                                    { this.props.users.map(person => <User person={person}/>)}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>)
    }
}

const mapStateToProps = (state)=>{
    return{
        users: state.UsersPage.users

    }
}



export default withRouter(connect(mapStateToProps,{setUsers})(Users))