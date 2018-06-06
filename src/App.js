import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import './App.css';
import PostForm from './components/postForm'
import ListPosts from './components/listPosts'
import SinglePost from './components/singlePost'


class App extends Component {
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
            <Route path='/singlePost/:id' component={SinglePost} />
            <Route path='/' component={ListPosts} />
          </Switch>
        </BrowserRouter>

      </div>
    );
  }
}

export default App;
