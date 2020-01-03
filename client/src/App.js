import React, { Component } from 'react';
import axios from 'axios'
import BlogForm from './components/blogs/BlogForm';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Work from './components/Work';
import { Container } from 'semantic-ui-react';
import Navbar from './components/Navbar';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Footer from './components/Footer';

const App = () => (
  <>
    {/* <Container> */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route eaxct path="/aboutme" component={AboutMe} />
        <Route exact path="/work" component={Work}/>
    </Switch>
    {/* </Container> */}
  </>
)



export default App;
