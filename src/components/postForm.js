import React from 'react'

const PostForm = (state, props) => {
  const submitPost = (e) => {
    e.preventDefault()
    console.log(e.target)
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <form name="newBlogPost" onSubmit={submitPost}>
            <div className="form-group">
              <label>Entry Title</label>
                <input
                  type="text"
                  className="form-control"
                  name="newPostTitle"
                />
            </div>
          </form>
        </div>
      </div>
      </div>
  )
}


export default PostForm
