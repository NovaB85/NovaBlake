import React from 'react';
import { Header, Icon } from 'semantic-ui-react';
import Work from './Work';



const Footer = () => (
  <>
  <div class="footer">
      <div class="footer-wrapper">
        <div class="contact">
          <h1>Get In Touch and Stay Connected</h1>
          <p><a href="novablake@gmail.com">novablake@gmail.com</a></p>
          <p><a href="801-347-0886">801-347-0886</a></p>
        </div>
        <div class="social">
          
          <br>
          </br>
          <a href="https://www.linkedin.com/in/nova-blake-224a23133/" target="_blank">
          <Header as='h2'>
            <Icon.Group size='large'>
              <Icon name='linkedin' />
              <Icon corner name='add' />
            </Icon.Group>
            Add on linkedin
          </Header>
          </a>

          <a href="https://https://github.com/NovaB85" target="_blank">
          <Header as='h2'>
            <Icon.Group size='large'>
              <Icon name='Github' />
              <Icon corner name='add' />
            </Icon.Group>
           Github
          </Header>
          </a>
        </div>
      </div>
    </div>

  </>
)




export default Footer;
