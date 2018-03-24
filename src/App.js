import React, { Component } from 'react';
import './App.css';
import NewPost from './components/newPost'

function ListPosts(props){
  return (
    <div className='border'>
    <div>
      <h2> {props.title} </h2>
      <h4> {props.date} </h4>
    </div>
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
          id: 1,
          timestamp: '2012-02-18 14:28:32',
          title: "I ate the berries",
          content: "berries are so good and yummy and I like them because I am a deer"
        },
        {
          id: 2,
          timestamp: '2012-02-20 16:28:32',
          title: "There is a bear named Rodzher in the forest",
          content: "watch out cause if he catches you he will make you listen to all of his puns and also he likes venison"
        },
        {
          id: 3,
          timestamp: '2014-02-25 12:28:32',
          title: "Do deer like tacos?",
          content: "of course they do, everyone loves tacos what a silly question, what are you a bear???"
        }
      ],
      showForm: false,
      showButt: true,
    }
  }
  postButt(){
    this.setState({
      showForm: !this.state.showForm,
      showButt: !this.state.showButt
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
              this.state.showForm ? <NewPost /> : null
            }
          </div>
            {
              this.state.showButt ? <button type="button" onClick={() => this.postButt()}>New Entry</button> : null
            }
          <div className="border">
            {postList}
        </div>
      </div>
    );
  }
}

export default App;
