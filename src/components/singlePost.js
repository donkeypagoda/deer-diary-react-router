import React, {Component} from 'react'
import moment from 'moment'
import {Link} from 'react-router-dom'

class SinglePost extends Component {
  constructor(){
    super()
    this.post = {}
  }

  componentDidMount(){
    this.post = this.props.getSingle(this.props.match.params.id).then(post => this.post = post)

  }

  render(){
    console.log(this.post)
    return(
      <div className='list-group'>
        <div className="list-group-item flex-column align-items-start">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">
              {this.post.title}
            </h5>
            <small>{moment(this.post.created_at).format("MMM Do YY")}</small>
          </div>
          <div className="mb-1">
            {this.post.content}
          </div>
          <button type="button" className="btn btn-secondary" onClick={() => this.props.action(this.props.id)}>Delete Post</button>
        </div>
      </div>
    )
  }
}


export default SinglePost
