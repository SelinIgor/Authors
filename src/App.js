import './App.css';
import React from "react"
import Users from "./components/Users/Users";
import Header from "./components/Header/Header";
import {BrowserRouter} from "react-router-dom";
import {Route} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./redux/reduxStore";
import Posts from "./components/Posts/Posts";
import FullPost from "./components/Posts/FullPost/FullPost";
import MyPosts from "./components/Posts/MyPosts/MyPosts";

function App() {
  return (
    <div>
        <Provider store={store}>
            <BrowserRouter>
                <Header/>
                <Route exact path={"/"}  render={()=><Users/>}/>
                <Route path={"/posts/:id?"} render={()=><Posts/>}/>
                <Route path={"/post"} render={()=><FullPost/>}/>
                <Route path={"/myPosts"} render={()=><MyPosts/>}/>
            </BrowserRouter>
        </Provider>
    </div>
  );
}

export default App;
