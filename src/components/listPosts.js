import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import moment from 'moment'
import ShortPost from './shortPost.js'

class ListPosts extends Component{
  async componentDidMount() {
    const res = await fetch('http://localhost:5000/blog_posts');
    const {posts} = await res.json();

    this.setState({
      postList: posts
    })

  render(){
    let postList = []
    this.state.postList.forEach( post => {
      postList.push(<ListPosts key={post.id} title={post.title} content={post.content} date={post.created_at} id={post.id} action={this.deletePost} />)
    })
    return (
      <div className='list-group'>
        <div className="list-group-item flex-column align-items-start">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">
              {this.props.title}
            </h5>
            <small>{moment(this.props.date).format("MMM Do YY")}</small>
          </div>
          <div>
            <ShortPost postContent={this.props.content} postId={this.props.id}/>
          </div>
          <button type="button" className="btn btn-secondary" onClick={() => this.props.action(this.props.id)}>Delete Post</button>
        </div>
      </div>
    )
  }
}


export default ListPosts
