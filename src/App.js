import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import './App.css';
import PostForm from './components/postForm'
import ListPosts from './components/listPosts'
import SinglePost from './components/singlePost'


class App extends Component {
  constructor() {
    super()
    this.deletePost = this.deletePost.bind(this)
    this.getSingle = this.getSingle.bind(this)
    this.state = {
      postList: [],
    }
  }

  async componentDidMount() {
    const res = await fetch('http://localhost:5000/blog_posts');
    const {posts} = await res.json();

    this.setState({
      postList: posts
    })
  }

  async deletePost(id){
    await fetch('http://localhost:5000/blog_posts',
    {
      method: "DELETE",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({id})
    });
    const result = await fetch('http://localhost:5000/blog_posts');
    const {posts} = await result.json();
    this.setState({
      postList: posts
    })

  }
  async getSingle(id){
    const result = await fetch(`http://localhost:5000/blog_posts/${id}`);
    const {post} = await result.json()
    return {post}
  }

  render() {
    return (
      <div className="App">
        <div className="jumbotron">
          <div className="container">
            <div className="row">
              <div className="display-3">DeerDiary
                <span className="display-9 trailer"> - a diary for deer</span>
              </div>
            </div>
          </div>
        </div>
        <BrowserRouter>
          <Switch>
            <Route path='/blogPost/new' component={PostForm} />
            <Route path='/singlePost/:id' render={routeProps => <SinglePost getPost={this.getSingle} {...routeProps} />} />
            <Route path='/' render={() => <ListPosts postList={this.state.postList} />} />
          </Switch>
        </BrowserRouter>

      </div>
    );
  }
}

export default App;
