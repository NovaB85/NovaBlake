import React, { Component } from 'react';
import {Progress, Container} from 'semantic-ui-react'; 


class Skills extends Component {
  render () {
    return(
      <>
      <Container>

      <h1>Skills</h1>
      <Progress percent={20} label='ReactJS'progress />
      <Progress percent={25} label='Github'progress />
      <Progress percent={20} label='Ruby on Rails'progress />
      <Progress percent={24} label='HTML'progress />
      <Progress percent={23} label='CSS'progress />
      <Progress percent={20} label='Javascript'progress />
      <Progress percent={100} label='Being Awesome'progress />




      </Container>
      <br>
      </br>
      </>
    )
  }
}

export default Skills;
