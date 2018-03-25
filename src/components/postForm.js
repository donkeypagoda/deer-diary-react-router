import React, {Component} from 'react'

class PostForm extends Component {

  submitPost = (e, props) => {
    e.preventDefault()
    console.log(e.target[0].value)
    console.log(e.target[1].value)
    let newPost = {
      id: 0,
      timestamp: Math.floor(Date.now() / 1000),
      title: e.target[0].value,
      content: e.target[1].value
    }
    this.props.postFunc(newPost)
  }

  render(){
    return (
      <div className="container">
        <div className="row lift">
          <div className="col-md-12">
            <button className="btn btn-secondary" onClick={this.props.action}> Return to Posts</button>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <form name="newBlogPost" onSubmit={this.submitPost}>
              <div className="form-group">
                <label>Diary Entry Title</label>
                  <input type="text" className="form-control" name="newPostTitle" />
              </div>
              <div className="form-group">
                <label>Diary Entry Body</label>
                  <textarea className="form-control" name="newPostBody" />
              </div>
                <button type="submit" className="btn btn-secondary"> Create New Entry</button>
            </form>
          </div>
        </div>
        </div>
    )
  }
}


export default PostForm
