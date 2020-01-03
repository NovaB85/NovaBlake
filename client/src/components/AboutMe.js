import React, { Component } from 'react';
import nova from '../images/nova.jpg';
import '../css/custom.css'; 
import { Grid, Image } from 'semantic-ui-react';



class AboutMe extends Component {
  render () {
    return(
      <>
      <div class="about-header">
    <h1>Nova Blake</h1>
    <div class="img-overlay"></div>
</div>
      <div>
        {/* <p>About me</p> */}
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
      <Image src='https://images.fineartamerica.com/images-medium-large-5/diversity-paint-brushes-horizontal-don-mcgillis.jpg' />
    </Grid.Column>
    <Grid.Column>
      <Image src='https://spacequotations.com/wp-content/uploads/2018/09/darth-vader-810x473.jpg' />
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
