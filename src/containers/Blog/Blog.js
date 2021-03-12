import React, { Component } from 'react';
// import axios from 'axios';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import './Blog.css';
import Posts from '../Blog/Posts/Posts';
import NewPost from './NewPost/NewPost';

class Blog extends Component {

    state = {
        auth:false
    }

    render () {
        return (
            <div className = "Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink 
                            exact
                             to="/posts/"
                             activeClassName="active" //just give the class name which we want to keep for active class  | below is the way to speciy inline styling as well
                             activeStyle = {{       
                                 color: '#fa923f',
                                 textDecoration: 'Underline'
                             }}>Posts</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post', 
                                hash: '#submit',
                                search:'?quick-submit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path="/" exact render= {() => <h1>Home</h1>}/>
                <Route path="/" render= {() => <h1>Home 2</h1>}/> */}
                <Switch>
                    {this.state.auth ? <Route path="/new-post" component={NewPost} /> : null }
                    <Route path="/posts" component={Posts} />
                    <Redirect from = "/" to="/posts" />
                    {/* <Route path="/" component={Posts} /> */}
                </Switch>
            </div>
        );
    }
}

export default Blog;