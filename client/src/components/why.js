import React, { Component } from 'react'
import './main.css';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import why4 from './images/why-4.png';
import story4 from './images/story-4.jpg';
import story6 from './images/story-6.jpg';
import story7 from './images/story-7.jpg';
import story8 from './images/story-8.jpg';
import PersistentDrawerRight from './navbarMain';
import { makeStyles } from '@material-ui/core/styles';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import { Image } from 'semantic-ui-react';
import ScrollHorizontal from 'react-scroll-horizontal'
import { Parallax } from 'react-scroll-parallax';
import { ParallaxProvider } from 'react-scroll-parallax';


export default class Why extends React.Component {

  render() {
    return (
        <div style={{ height: `98vh` }} className="horizontal-scroll">
          <ScrollHorizontal reverseScroll={true}>
          	<div style={{ width: `97vw` }}>
			      		<Grid container>
			      			<Grid item xs={12} sm={6}>
					      		<Typography variant="h1" align="left" color="textPrimary" gutterBottom>
					           	Our Story: 'Friends With Benefits'
					          </Typography>
					        </Grid>
					        <Grid item xs={12} sm={6}>
					      		<Typography variant="h5" align="left" color="textSecondary" paragraph>
											At Paquera, we set out to create a premium spirit that both captures a feeling and empowers a coummunity. Paquera is ethically produced by a g roup of Mezcaleros who have dedicated their life's work to growing, harvesting, and bottling premium artisanal mezcal.
					          </Typography>
					      		<Typography variant="h5" align="left" color="textSecondary" paragraph>
											The inspiration behind paquera was the result of a chance encounter. In a world where technology provides an astonishing amount of power at our fingertips, there are still some things in life you can't control or plan for.
					          </Typography>
			      			</Grid>
			      		</Grid>
			      </div>

					<ParallaxProvider>
				    <Parallax className="custom-class" y={[-100, 100]} tagOuter="figure">
				      <Image src={story4} style={{ width: '400px' }}/>
				    </Parallax>
			    </ParallaxProvider>

			              	<div style={{ width: `97vw` }}>
			      		<Grid container>
			      			<Grid item xs={12} sm={6}>
					      		<Typography variant="h1" align="left" color="textPrimary" gutterBottom>
					           	Our Story: 'Friends With Benefits'
					          </Typography>
					        </Grid>
					        <Grid item xs={12} sm={6}>
					      		<Typography variant="h5" align="left" color="textSecondary" paragraph>
											At Paquera, we set out to create a premium spirit that both captures a feeling and empowers a coummunity. Paquera is ethically produced by a g roup of Mezcaleros who have dedicated their life's work to growing, harvesting, and bottling premium artisanal mezcal.
					          </Typography>
					      		<Typography variant="h5" align="left" color="textSecondary" paragraph>
											The inspiration behind paquera was the result of a chance encounter. In a world where technology provides an astonishing amount of power at our fingertips, there are still some things in life you can't control or plan for.
					          </Typography>
			      			</Grid>
			      		</Grid>
			      </div>

        </ScrollHorizontal>
      </div>
        
    );
  }
}