import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';
import PostForm from './components/postForm'
import ListPosts from './components/listPosts'


class App extends Component {
  constructor() {
    super()

    this.toggleButt = this.toggleButt.bind(this)
    this.addPost = this.addPost.bind(this)
    this.deletePost = this.deletePost.bind(this)

    this.state = {
      postList: [],
      showForm: false,
      showButt: true,
      showPosts: true
    }
  }

  async componentDidMount() {
    const res = await fetch('http://localhost:5000/blog_posts');
    const {posts} = await res.json();

    this.setState({
      postList: posts
    })
  }

  toggleButt(){
    this.setState({
      showForm: !this.state.showForm,
      showButt: !this.state.showButt,
      showPosts: !this.state.showPosts
    })
  }

  async addPost(newPost){
    await fetch('http://localhost:5000/blog_posts',
    {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newPost)
    });
    const result = await fetch('http://localhost:5000/blog_posts');
    const {posts} = await result.json();

    this.setState({
      postList: posts,
      showForm: !this.state.showForm,
      showButt: !this.state.showButt,
      showPosts: !this.state.showPosts
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

  render() {
    let postList = []
    this.state.postList.forEach( post => {
      postList.push(<ListPosts key={post.id} title={post.title} content={post.content} date={post.created_at} id={post.id} action={this.deletePost} />)
    })

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

          </Switch>
        </BrowserRouter>
          <div>
            {
              this.state.showForm ? <PostForm postFunc={this.addPost} action={this.toggleButt}/> : null
            }
          </div>
          <div className="container">
            <div className="row lift">
              <div className="col-md-12">
                <div className="float-right">
                  {
                    this.state.showButt ? <button type="button" className="btn btn-secondary" onClick={() => this.toggleButt()}>New Entry</button> : null
                  }
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                {
                  this.state.showPosts ? postList : null
                }
              </div>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
