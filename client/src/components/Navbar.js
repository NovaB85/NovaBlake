import axios from 'axios'
import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { HashLink } from 'react-router-hash-link';


export default class Navbar extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu fluid widths={4}>
        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        >
          <HashLink to="/#Home">
            Home
          </HashLink>
        </Menu.Item>

              <Menu.Item
          name='aboutme'
          active={activeItem === 'aboutme'}
          onClick={this.handleItemClick}
        >
          <HashLink to="/#AboutMe">
            About Me
          </HashLink>
        </Menu.Item>

        
        <Menu.Item
          name='work'
          active={activeItem === 'work'}
          onClick={this.handleItemClick}
        >
          <HashLink to="/#Work">
            Work
          </HashLink>
        </Menu.Item>

        
        <Menu.Item
          name='footer'
          active={activeItem === 'footer'}
          onClick={this.handleItemClick}
        >
          <HashLink to="/#Footer">
            Contact
          </HashLink>
        </Menu.Item>
        />
        

      </Menu>
    )
  }
}
