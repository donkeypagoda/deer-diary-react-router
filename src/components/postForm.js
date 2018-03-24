import React from 'react'
import App from '../App'

const PostForm = (state, props) => {
  const submitPost = (e) => {
    e.preventDefault()
    console.log(e.target[0].value)
    console.log(e.target[1].value)
  }
  return (
    <div className="container">
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


export default PostForm
