import React, { Component } from 'react';
import axios from 'axios'

class BlogForm extends Component {
  state = { title: '', date: new Date(), body: ''}

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addBlog(this.state)
    this.setState({ title: '', date: '', body: ''})
  }

  render () {
    return( 
      <form onSubmit={this.handleSubmit}>
        <input
        name='title'
        value={this.state.title}
        onChange={this.handleChange}
        required
        placeholder='title'
        />
        <input
        name='body'
        value={this.state.body}
        onChange={this.handleChange}
        required
        placeholder='body'
        />

        <input
        type='submit'
        />
      </form>
    )
  }
}

export default BlogForm 