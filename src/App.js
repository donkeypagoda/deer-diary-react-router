import React, { Component } from 'react';
import './App.css';
import NewPost from './components/newPost'

function ListPosts(props){
  return (
    <div className='border'>
      <h2> {props.title} </h2>
      <p> {props.content}</p>
    </div>
  )
}



class App extends Component {
  constructor() {
    super()
    this.state = {
      postList: [
        {
          timestamp: '2012-02-18 14:28:32',
          title: "I ate the berries",
          content: "berries are so good and yummy and I like them because I am a deer"
        },
        {
          timestamp: '2012-02-20 16:28:32',
          title: "There is a bear named Rodzher in the forest",
          content: "watch out cause if he catches you he will make you listen to all of his puns and also he likes venison"
        },
        {
          timestamp: '2014-02-25 12:28:32',
          title: "Do deer like tacos?",
          content: "of course they do, everyone loves tacos what a silly question, what are you a bear???"
        }
      ],
      postForm: false
    }
  }
  newPost(){
    this.setState({
      postForm: !this.state.postForm
    })
    console.log(this.state.postForm)
  }

  render() {
    let postList = []
    this.state.postList.forEach( post => {
      postList.push(<ListPosts title={post.title} content={post.content} />)
    })
    return (
      <div className="App">
        <div className="jumbotron">
          <h1>DeerDiary</h1>
          <h4> - a diary for deer</h4>
        </div>
          <NewPost />
          <button type="button" onClick={() => this.newPost()}>New Entry</button>
          <div className="border">
            {postList}
        </div>
      </div>
    );
  }
}

export default App;
