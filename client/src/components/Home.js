import React, { Component } from 'react';
import axios from 'axios'
import BlogForm from './blogs/BlogForm';
import AboutMe from './AboutMe';
import Skills from './Skills';
import Portfolio from './Portfolio';
import Work from './Work';
import { Container } from 'semantic-ui-react';
import Navbar from './Navbar';
import { Route, Switch } from 'react-router-dom';
import '../css/custom.css'; 
import Footer from './Footer';
import { HashLink } from 'react-router-hash-link';


class Home extends Component {
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
        const { blogs } = this.state
        this.setState({ blogs: [...blogs, res.data]})
      })
      .catch( err => { console.log(err) })
  }


  // addBlog = (blog) => {

  // }
  updateBlog = () => { 

  }

  deleteBlog = () => {

  }

  render() {
    return(
      <>


      <Navbar/>

      <AboutMe />

      <Skills />

      <Portfolio />

      <Work />

        <h3>
          Add A Blog
        </h3>
{/* 
      { this.state.blogs.map( blog => (
        <div>
          <div>{blog.title}</div>
          <div>{blog.date}</div>
          <p>{blog.body}</p>
        </div>
      )) } */}
     

       <BlogForm addBlog={this.addBlog}/>
      <Footer/> 
      </>
      
    )
  }
}

export default Home; 
