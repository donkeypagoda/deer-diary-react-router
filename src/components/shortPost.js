import React, {Component} from 'react'
import Link from 'react-router-dom'
import moment from 'moment'

class ShortPost extends Component{
  render(){
    return(
      <div className="mb-1">
        {this.props.postContent}
      </div>
    )
  }
}

export default ShortPost
