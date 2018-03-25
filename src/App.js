import React, { Component } from 'react';
import './App.css';
import PostForm from './components/postForm'
import moment from 'moment'

function ListPosts(props){
  return (
    <div className='list-group'>
      <div className="list-group-item flex-column align-items-start">
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">
            {props.title}
          </h5>
          <small>{moment(props.timestamp).format("MMM Do YY")}</small>
        </div>
        <div className="mb-1">
          {props.content}
        </div>

      </div>
    </div>
  )
}



class App extends Component {
  constructor() {
    super()

    this.toggleButt = this.toggleButt.bind(this)
    this.addPost = this.addPost.bind(this)
    this.getPosts = this.getPosts.bind(this)
    this.currentBlogList = this.getPosts()
    console.log(this.currentBlogList)
    this.state = {
      postList: [
        {
          id: 0,
          timestamp: '2012-02-18 14:28:32',
          title: "I ate the berries",
          content: "berries are so good and yummy and I like them because I am a deer"
        },
        {
          id: 1,
          timestamp: '2012-02-20 16:28:32',
          title: "There is a bear named Rodzher in the forest",
          content: "watch out cause if he catches you he will make you listen to all of his puns and also he likes venison"
        },
        {
          id: 2,
          timestamp: '2014-02-25 12:28:32',
          title: "Do deer like tacos?",
          content: "of course they do, everyone loves tacos what a silly question, what are you a bear???"
        }
      ],
      showForm: false,
      showButt: true,
      showPosts: true
    }
  }

  getPosts = async () => {
    const response = await fetch('http://localhost:5000/blog_posts');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);
    
    return body
  };

  toggleButt(){
    this.setState({
      showForm: !this.state.showForm,
      showButt: !this.state.showButt,
      showPosts: !this.state.showPosts
    })
  }

  addPost(newPost){
    let current = this.state.postList
    newPost.id = this.state.postList.length
    current.push(newPost)
    this.setState({
      postList: current,
      showForm: !this.state.showForm,
      showButt: !this.state.showButt,
      showPosts: !this.state.showPosts
    })
  }

  render() {
    let postList = []
    this.state.postList.forEach( post => {
      postList.push(<ListPosts key={post.id} title={post.title} content={post.content} date={post.timestamp}/>)
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
