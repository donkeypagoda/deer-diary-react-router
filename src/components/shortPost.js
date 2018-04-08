import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import moment from 'moment'

class ShortPost extends Component{
  constructor(){
    super()
    this.shorten = this.shorten.bind(this)
  }
  shorten(fulltext){
    return fulltext.slice(0, 30)
  }


  render(){
    return(
      <div className='list-group'>
        <div className="list-group-item flex-column align-items-start">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">
              {this.props.postTitle}
            </h5>
            <small>{moment(this.props.postDate).format("MMM Do YY")}</small>
          </div>
          <div className="mb-1">
            {this.shorten(this.props.postContent)}
            <p>
              <Link to={`/singlePost/${this.props.postId}`}>Continue Reading here -></Link>
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default ShortPost
