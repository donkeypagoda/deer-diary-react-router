import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import moment from 'moment'

class ShortPost extends Component{
  constructor(){
    super()
    this.shorten = this.shorten.bind(this)
  }
  shorten(fulltext){
    return fulltext.slice(0, 15)
  }


  render(){
    return(
      <div className="mb-1">
        {this.shorten(this.props.postContent)}
        <p>
          <Link to={`/singlePost/${this.props.postId}`}>Continue Reading here -></Link>
        </p>
      </div>
    )
  }
}

export default ShortPost
