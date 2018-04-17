import React, {Component} from 'react'
import moment from 'moment'
import {Link} from 'react-router-dom'

class SinglePost extends Component {
  constructor(){
    super()
    this.state = {
      post: {}
    }
  }

  async componentDidMount(){
    const res = await fetch(`http://localhost:5000/blog_posts/${this.props.match.params.id}`)
    const {post} = await res.json()

    this.setState({
      post: post[0]
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
    this.props.history.push('/')

  }

  render(){
    if (this.state.post === undefined) return <div>Loading...</div>
    return(
      <div className='list-group'>
        <div className="list-group-item flex-column align-items-start">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">
              {this.state.post.title}
            </h5>
            <small>{moment(this.state.post.created_at).format("MMM Do YY")}</small>
          </div>
          <div className="mb-1">
            {this.state.post.content}
          </div>
          <button type="button" className="btn btn-secondary" onClick={() => this.deletePost(this.state.post.id)}>Delete Post</button>
        </div>
      </div>
    )
  }
}


export default SinglePost
