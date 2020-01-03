import React, { Component } from 'react';

class Blogs extends Component {
  state = { blogs: [] }

  componentDidMount() {
    axios.get('/api/blogs')
      .then( res => {
        this.setState({ blogs: res.data })
      })
      .catch( err => { console.log(err) })
  }

  addBlog = (blog) => {
    axios.post('/api/blogs', blog) 
      .then( res => {

      })
      .catch( err => {
        console.log(err)
      })
  }

  render () {
    return(
      { this.state.blogs.map( blog => (
        <div>
          <p>{blog.title}</p>
          <p>{blog.date}</p>
          <p>{blog.body}</p>
        </div>
      )) }
    )
  }
}

export default Blogs