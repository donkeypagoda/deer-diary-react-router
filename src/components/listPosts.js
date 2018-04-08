import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import moment from 'moment'
import ShortPost from './shortPost.js'

class ListPosts extends Component{

  render(){
    let shortList= []
    props.postList.map( post => {
      shortList.push(<ShortPost key={post.id} postContent={post.content} postId={post.id} postDate={post.created_at} postTitle={post.postTitle}/>)
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
            {shortList}
          </div>
        </div>
      </div>
    )
  }
}


export default ListPosts

// <button type="button" className="btn btn-secondary" onClick={() => this.props.action(this.props.id)}>Delete Post</button>
