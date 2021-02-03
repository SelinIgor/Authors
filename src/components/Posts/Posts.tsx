import React from 'react'
import s from './Posts.module.css'
import {addPostThunk, setPosts} from "../../redux/usersReducer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import Post from "./Post/Post";
import {usersAPI} from "../../api/api";
import {AppStateType} from "../../redux/reduxStore";

type PropsType = {
    posts: Array<Post>
    setPosts: (response: any)=> void
    match: any

}
type Post = {
    title: string
    body: string
    id: number
}
class Posts extends React.Component<PropsType> {


    componentDidMount()
    {

        const userId = this.props.match.params.id

        usersAPI.getPosts(userId).then((response: any) => {
            this.props.setPosts(response)
        })
    }



    render() {


        return (<div className={s.posts}>
            <div className={s.container}>
                <div className={s.postsInner}>
                    <div>

                    {this.props.posts.map(post =>
                        // @ts-ignore
                        <div><Post post={post}/></div>)}
                    </div>
                </div>
            </div>
        </div>)


    }
}

const mapStateToProps = (state:AppStateType) => {
        return {
            posts: state.UsersPage.posts,

        }
    }
export default withRouter(connect(mapStateToProps,{setPosts})(Posts))