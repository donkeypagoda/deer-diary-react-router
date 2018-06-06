import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import ShortPost from './shortPost.js'

class ListPosts extends Component{
  constructor(){
    super()
    this.state = {
      postList: []
    }
  }

  async componentDidMount() {
    const res = await fetch('http://localhost:5000/blog_posts');
    const {posts} = await res.json();

    this.setState({
      postList: posts
    })
  }

  render(){
    let shortList= []
    this.state.postList.map( post => {
      shortList.push(<ShortPost key={post.id} postContent={post.content} postId={post.id} postDate={post.created_at} postTitle={post.title}/>)
    })
    return (
      <div className='container'>
        <div className='row' style={{marginBottom: '32px'}}>
          <div className='col-md-12'>
            <div className='float-right'>
              <div className='btn btn-secondary'>
                <Link to='/blogPost/new'>New Post</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div>
              {shortList}
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default ListPosts
