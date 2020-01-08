import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import logo from '../components/images/story-2.jpg';
import './main.css';
import clsx from 'clsx';
import { loadCSS } from 'fg-loadcss';
import Icon from '@material-ui/core/Icon';
import vid_pc from './images/video.mp4';
import vid_mob from './images/video.mp4';
import PersistentDrawerRight from './navbarMain';
import InstagramEmbed from 'react-instagram-embed';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import one from './images/green-bottle.png';
import two from './images/blend-bottle.png';
import three from './images/blue-bottle.png';
import { Image } from 'semantic-ui-react';
import Footer from './footer';
import mission from './images/mission.jpg';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';


class Home extends Component {

  async componentDidMount() {
      this.tryPlayVideo();
    }

    tryPlayVideo() {
      setTimeout(() => {
        if (this.player)
          this.player.play()
        else
          this.tryPlayVideo();
      }, 5000);
    }

    render() {

    return (
      <main className="main-story" style={{ backgroundColor: 'white' }}>

        <PersistentDrawerRight />
        
        {/* Hero unit */}
        <div id="home-page">

          <Container style={{ marginLeft: '10px' }}>
            <video className='hero-image' width="100%" ref={ref => this.player = ref} preload={'none'} src={window.innerWidth >= 720 ? vid_pc : vid_mob} type="video/mp4" playsinline muted loop/>
          </Container>

        </div>

        <Container>
          <div style={{ height: '100vh' }} />
        </Container>

        <Container>
        <Container style={{ border: '1px solid #e9e9e9', marginTop: '120px', marginBottom: '75px' }} >
          <p id="p-home" style={{ textAlign: 'center' }}> Shop Now </p>
          <Grid 
            container
            direction="row"
            justify="space-between"
            alignItems="center"
            spacing={6}
          >
            <Grid item xs={12} sm={4}>
              <Image src={one} style={{ width: '100%' }} className="img-to-zoom2" />
              <p id="p-blog2" style={{ textAlign: 'center' }}> 100% ESPADÍN | JOVEN </p>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
              >
                <Grid item>
                  <Button size="large" variant="contained" color="primary" id="button-custom2" style={{ backgroundColor: 'black' }}>
                    Order Online
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Image src={two} style={{ width: '100%' }} className="img-to-zoom2" />
              <p id="p-blog2" style={{ textAlign: 'center' }}> 80% ESPADÍN / 20% BARRIL | BLEND </p>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
              >
                <Grid item>
                  <Button size="large" variant="contained" color="primary" id="button-custom2" style={{ backgroundColor: 'black' }}>
                    Order Online
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Image src={three} style={{ width: '100%' }} className="img-to-zoom2" />
              <p id="p-blog2" style={{ textAlign: 'center' }}> 100% BARRIL | PREMIUM </p>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
              >
                <Grid item>
                  <Button size="large" variant="contained" color="primary" id="button-custom2" style={{ backgroundColor: 'black' }}>
                    Order Online
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Container>

      <Divider />

        <div style={{ paddingTop: '60px', paddingBottom: '75px' }} >
          <Container>
            <Grid 
              container
              direction="row"
              spacing={9}
            >
              <Grid item xs={12} sm={12} md={6} style={{ scroll: 'none' }}>
                <ScrollAnimation animateIn='fadeIn' duration={2}>
                  <Typography variant="h2" align="left" color="textPrimary" gutterBottom>
                    Our Mission
                  </Typography>
                  <Typography variant="h5" align="left" color="textSecondary" paragraph>
                    Paquera is ethically produced by a group of Mezcaleros who have dedicated their life’s work to growing, harvesting, and bottling premium artisanal mezcal. By investing in the future of these young agave plants, we are investing in the future of these men.
                  </Typography>
                  <Button
                    id="button-custom"
                    variant="outlined"
                    style={{ color: 'black', borderColor: 'black' }}
                    color="primary"
                    endIcon={<ArrowForwardIcon />}
                  >
                    Find out more
                  </Button>
                </ScrollAnimation>
              </Grid>
              <Grid item xs={12} sm={12} md={6} style={{ scroll: 'none' }}>
                <ScrollAnimation animateIn='fadeIn' duration={2} delay={300}>
                  <Image src={mission} className="story-image" />
                </ScrollAnimation>
              </Grid>
            </Grid>
          </Container>
        </div>

        <Footer />
      </main>
    );
  }
}

export default Home;