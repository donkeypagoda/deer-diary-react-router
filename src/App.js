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
    this.getPosts = this.getPosts.bind(this)

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
            <Route path='singlePost/:id' component={SinglePost} />
            <Route path='/' render={()=><ListPosts postList={this.state.postList} />} />
          </Switch>
        </BrowserRouter>

      </div>
    );
  }
}

export default App;

// <div>
//   {
//     this.state.showForm ? <PostForm postFunc={this.addPost} action={this.toggleButt}/> : null
//   }
// </div>
// <div className="container">
//   <div className="row lift">
//     <div className="col-md-12">
//       <div className="float-right">
//         {
//           this.state.showButt ? <button type="button" className="btn btn-secondary" onClick={() => this.toggleButt()}>New Entry</button> : null
//         }
//       </div>
//     </div>
//   </div>
// </div>
// <div className="container">
//   <div className="row">
//     <div className="col-md-12">
//       {
//         this.state.showPosts ? postList : null
//       }
//     </div>
//   </div>
// </div>

// async componentDidMount() {
//   const res = await fetch('http://localhost:5000/blog_posts');
//   const {posts} = await res.json();
//
//   this.setState({
//     postList: posts
//   })
