import React, {useEffect} from 'react'
import s from './Posts.module.css'
import {addPostThunk, setPosts} from "../../redux/usersReducer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import Post from "./Post/Post";
import AddPostRedux from "./AddPost/AddPost";
import {usersAPI} from "../api/api";

class Posts extends React.Component {

    componentDidMount()
    {
        const userId = this.props.match.params.id
        usersAPI.getPosts(userId).then(response => {
            this.props.setPosts(response)
        })
    }



    render() {


        const onSubmit = (value) => {

            this.props.addPostThunk(value.title, value.body)

        }

        return (<div className={s.posts}>
            <div className={s.container}>
                <div className={s.postsInner}>
                    <AddPostRedux onSubmit={onSubmit}/>
                    {this.props.posts.map(person => <div><Post person={person} postId={person.id}/></div>)}
                </div>
            </div>
        </div>)


    }
}

const mapStateToProps = (state) => {
        return {
            posts: state.UsersPage.posts
        }
    }
export default withRouter(connect(mapStateToProps,{setPosts,addPostThunk})(Posts))