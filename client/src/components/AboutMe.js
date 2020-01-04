import React, { Component } from 'react';
import nova from '../images/nova.jpg';
import jabba from '../images/jabba.jpg'
import til from '../images/til.jpg'
import alvy from '../images/alvy.jpg'
import '../css/custom.css'; 
import { Grid, Image, Card, Icon } from 'semantic-ui-react';



class AboutMe extends Component {
  render () {
    return(
      <>
      <div class="about-header">
    <h1>Nova Blake</h1>
    <div class="img-overlay"></div>
</div>
      <div>
        <h1>
          About Me 
        </h1>

        <img src={nova} class="about-photo" alt="Me" ></img>

          <h3>
             I was born in CA transplanted to UT at a young age, getting more into painting, learning to code, nerd and proud of it, i am a fencer and are owned by 3 cats, and always working to better myself.
          </h3>
          <br>
          </br>
  <Grid container columns={3}>
    <Grid.Column>
    <Image src='https://upload.wikimedia.org/wikipedia/commons/a/a1/Quarter-finals_Limardo-Robeiri_Masters_epee_2012_n05.jpg' />
    </Grid.Column>
    <Grid.Column>
      <Image src='https://images.fineartamerica.com/images-small-large-5/diversity-paint-brushes-horizontal-don-mcgillis.jpg' />
    </Grid.Column>
    <Grid.Column>
      <Image src='https://spacequotations.com/wp-content/uploads/2018/09/darth-vader-810x473.jpg' />
    </Grid.Column>
  </Grid>
      <br>
      </br>
      <br>
      </br>
      
      <h1>
        My babies!!
      </h1>

  <Grid container columns={3}>
    <Grid.Column>

  <Card className='card-item'>
    <Image src={jabba} wrapped  fluid={false} size='large'/>
    <Card.Content>
      <Card.Header>Jabba the Fluff</Card.Header>
      <Card.Meta>
        <span className='date'>The little man</span>
      </Card.Meta>
      <Card.Description>
        Jabba the Fluff
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        3 friends
      </a>
    </Card.Content>
  </Card>
    </Grid.Column>


    <Grid.Column>
  <Card className='card-item'>
    <Image src={til} wrapped  fluid={false} size='large'/>
    <Card.Content>
      <Card.Header>Matilda</Card.Header>
      <Card.Meta>
        <span className='date'>Born 17 years ago</span>
      </Card.Meta>
      <Card.Description>
        The best girl in the world
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        1 million friends
      </a>
    </Card.Content>
  </Card>
    </Grid.Column>


    <Grid.Column>
  <Card className='card-item'>
    <Image src={alvy} wrapped fluid={false} size='large'/>
    <Card.Content>
      <Card.Header>Alvy</Card.Header>
      <Card.Meta>
        <span className='date'>The baby boy</span>
      </Card.Meta>
      <Card.Description>
        AKA mr. squish body
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        3 friends
      </a>
    </Card.Content>
  </Card>
    </Grid.Column>
  </Grid>


      <br>
      </br>
      <br>
      </br>

      </div>

      </>
    )
  }
}

export default AboutMe;
