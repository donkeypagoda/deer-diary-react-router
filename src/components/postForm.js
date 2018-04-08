import React, {Component} from 'react'

class PostForm extends Component {

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
        postList: posts
      })
    }
    submitPost = (e, props) => {
      e.preventDefault()
      let newPost = {
        title: e.target[0].value,
        content: e.target[1].value
      }
      this.addPost(newPost)
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
