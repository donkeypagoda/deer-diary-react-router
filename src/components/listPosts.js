import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import moment from 'moment'
import ShortPost from './shortPost.js'

class ListPosts extends Component{

  render(){
    let shortList= []
    this.props.postList.map( post => {
      shortList.push(<ShortPost key={post.id} postContent={post.content} postId={post.id} postDate={post.created_at} postTitle={post.postTitle}/>)
    })
    return (
      <div className='list-group'>
        <div className="list-group-item flex-column align-items-start">
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
