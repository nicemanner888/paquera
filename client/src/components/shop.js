import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import PersistentDrawerRight from './navbarMain';
import Divider from '@material-ui/core/Divider';
import green from './images/p-green.jpg';
import purple from './images/p-purple.jpg';
import pink from './images/p-pink.jpg';
import { Image } from 'semantic-ui-react';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import Footer from './footer';

const useStyles = makeStyles(theme => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
    },
    li: {
      listStyle: 'none',
      paddingTop: 12,
    },
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 3),
  },
  shopContent: {
    padding: theme.spacing(12, 0, 12),
  },
  card: {
    maxWidth: '100%',
    paddingBottom: 24,
  },
}));

export default function Shop() {
  const classes = useStyles();

  return (
    <main style={{ backgroundColor: 'white', overflowX: 'hidden' }}>
      <PersistentDrawerRight />
      
      {/* Hero unit */}
      <div className={classes.heroContent}>
        <Divider className="mobile-divider" />
        <Container >
          <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom style={{ paddingTop: '39px' }}>
            Order Online
          </Typography>
        </Container>
      </div>

      <Divider />

      {/* End hero unit */}
      <div className={classes.shopContent}>
        <Container component="main">
          <Grid 
            container
            direction="row"
            justify="space-between"
            alignItems="center"
            spacing={6}
          >
            <Grid item xs={12} sm={12} md={4} style={{ scroll: 'none' }}>
              <ScrollAnimation animateIn='fadeIn' duration={2}>
                <Card className={classes.card}>
                  <CardMedia className={classes.media}>
                    <Image src={green} style={{ width: '100%' }}/>
                  </CardMedia>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h4" style={{ textAlign: 'center' }}>
                      100% ESPADÍN | JOVEN
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Grid
                      container
                      direction="row"
                      justify="center"
                      alignItems="center"
                    >
                      <Grid item>
                        <Button size="large" variant="contained" color="primary" id="button-custom3" style={{ backgroundColor: '#E0EED5' }}>
                          Order Online
                        </Button>
                      </Grid>
                    </Grid>
                  </CardActions>
                </Card>
              </ScrollAnimation>
            </Grid>


            <Grid item xs={12} sm={12} md={4}>
              <ScrollAnimation animateIn='fadeIn' duration={2} delay={200}>
                <Card className={classes.card}>
                  <CardMedia className={classes.media}>
                    <Image src={pink} style={{ width: '100%' }}/>
                  </CardMedia>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h4" style={{ textAlign: 'center' }}>
                      80% ESPADÍN / 20% BARRIL | BLEND
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Grid
                      container
                      direction="row"
                      justify="center"
                      alignItems="center"
                    >
                      <Grid item>
                        <Button size="large" variant="contained" color="primary" id="button-custom3" style={{ backgroundColor: '#FCD5C4' }}>
                          Order Online
                        </Button>
                      </Grid>
                    </Grid>
                  </CardActions>
                </Card>
              </ScrollAnimation>
            </Grid>

            <Grid item xs={12} sm={12} md={4}>
              <ScrollAnimation animateIn='fadeIn' duration={2} delay={400}>
                <Card className={classes.card}>
                  <CardMedia className={classes.media}>
                    <Image src={purple} style={{ width: '100%' }}/>
                  </CardMedia>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h4" style={{ textAlign: 'center' }}>
                      100% BARRIL | PREMIUM
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Grid
                      container
                      direction="row"
                      justify="center"
                      alignItems="center"
                    >
                      <Grid item>
                        <Button size="large" variant="contained" color="primary" id="button-custom3" style={{ backgroundColor: '#CFD1E8' }}>
                          Order Online
                        </Button>
                      </Grid>
                    </Grid>
                  </CardActions>
                </Card>
              </ScrollAnimation>
            </Grid>

          </Grid>
        </Container>
      </div>

      <Footer />
    </main>
  );
}