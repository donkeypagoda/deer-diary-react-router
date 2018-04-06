import React, {Component} from 'react'
import{Link} from 'react-router-dom'



function ListPosts(props){
  return (
    <div className='list-group'>
      <div className="list-group-item flex-column align-items-start">
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">
            {props.title}
          </h5>
          <small>{moment(props.date).format("MMM Do YY")}</small>
        </div>
        <div className="mb-1">
          {props.content}
        </div>
        <button type="button" className="btn btn-secondary" onClick={() => props.action(props.id)}>Delete Post</button>
      </div>
    </div>
  )
}
