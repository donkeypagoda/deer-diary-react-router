import React, {Component} from 'react'

const submitPost = (e) => {
  e.preventDefault()
  console.log(e.target[0].value)
  console.log(e.target[1].value)
}

class PostForm extends Component {
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
            <form name="newBlogPost" onSubmit={submitPost}>
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
