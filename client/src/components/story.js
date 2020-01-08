import React from 'react';
import './main.css';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import storyHero from './images/story-hero.png';
import story1 from './images/story-1.jpg';
import story2 from './images/story-2.jpg';
import story3 from './images/why-4.png';
import story4 from './images/story-4.jpg';
import story5 from './images/story-5.png';
import story8 from './images/story-8.jpg';
import PersistentDrawerRight from './navbarMain';
import { makeStyles } from '@material-ui/core/styles';
import { Image } from 'semantic-ui-react';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import { Parallax, Background } from 'react-parallax';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Footer from './footer';


const useStyles = makeStyles(theme => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 3),
  },
  storyContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(0, 0, 6),
  },
  storyContent2: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6, 0, 6),
  },
  storyHeader: {
  	fontSize: 80,
	},
  storyText1: {
  	fontSize: 20,
  },
  storyText2: {
  	fontSize: 36,
  	fontWeight: 800,
  	color: '#262626',
  },
}));

export default function Story() {
 	const classes = useStyles();

	return (
		<main className="main-story">
			<PersistentDrawerRight />

				<div className={classes.storyContent} style={{ paddingTop: '64px' }}>

					<Divider style={{ marginBottom: '64px' }} className="mobile-divider"/>

					<ScrollAnimation animateIn='fadeIn' duration={2} delay={400} offset={0} animateOnce="true">
			      <Container>
		      		<Grid container spacing={6}>
		      			<Grid item xs={12} sm={12} md={6}>
				      		<Typography variant="h1" align="left" color="textPrimary" gutterBottom className={classes.storyHeader}>
				           	Our Story: 'Friends With Benefits'
				          </Typography>
				      		<Typography variant="h5" align="left" color="textSecondary" paragraph className={classes.storyText1}>
										At Paquera, we set out to create a premium spirit that both captures a feeling and empowers a community. Paquera is ethically produced by a group of Mezcaleros who have dedicated their life's work to growing, harvesting, and bottling premium artisanal mezcal.
				          </Typography>
				      		<Typography variant="h5" align="left" color="textSecondary" paragraph className={classes.storyText1}>
										The inspiration behind paquera was the result of a chance encounter. In a world where technology provides an astonishing amount of power at our fingertips, there are still some things in life you can't control or plan for.
				          </Typography>
		      			</Grid>
		      			<Grid item xs={12} sm={12} md={6}>
		      				<Image src={story2} className="story-image2" />
		      			</Grid>
		      		</Grid>
		      	</Container>
		      </ScrollAnimation>
	      </div>

	      <div className={classes.storyContent2}>
	    		<ScrollAnimation animateIn='fadeInUp' offset={1000} duration={2} animateOnce="true">
		      	<Container>
	  				  <Typography variant="h5" align="left" color="textSecondary" paragraph className={classes.storyText2}>
								Nothing can replace the thrill of meeting someone out unexpectedly - the electricy of an instant and unspoken connection, the mystery and uncertainty of not knowing what's in the other's mind, or all that may lie ahead. There is an adrenaline-fueled moment that seals the connection, confirming what both people have felt all night - that first kiss. Sometimes, one kiss can change our entire life. Our mezcal seeks to bottle this very feeling.
		          </Typography>
		        </Container>
		      </ScrollAnimation>
		    </div>

	    	<div className={classes.storyContent2}>
	      	<Container>
	      		<Grid container spacing={10}>
		      		<Grid item xs={12} sm={12} md={6}>
	      				<Image src={story1} className="story-image" />
	      			</Grid>
		      		<Grid item xs={12} sm={12} md={6}>
	      				<ScrollAnimation animateIn='fadeIn' duration={2} animateOnce="true">
	      					<Typography variant="h1" align="left" color="textPrimary" gutterBottom className={classes.storyHeader}>
				           	Not every relationship is meant to last forever
				          </Typography>
				      		<Typography variant="h5" align="left" color="textSecondary" paragraph className={classes.storyText1}>
									  Some come into your life to change you, and then leave you. The fear of being hurt far too often gets in the way of meaningful connection.
				          </Typography>
				      		<Typography variant="h5" align="left" color="textSecondary" paragraph className={classes.storyText1}>
										Our founder, Ben, was inspired to create Paquera after a fling with an elusive Brazilian woman. She often introduced him fondly to friends as her ‘paquera’ - the rough translation being ‘friends with benefits’.
				          </Typography>
				         	<Typography variant="h5" align="left" color="textSecondary" paragraph className={classes.storyText1}>
				         		She has inspired us to loosen our grip on life - to embrace the here and now, whatever it may bring.
				          </Typography>
				        </ScrollAnimation>
	      			</Grid>
	      		</Grid>
	      	</Container>
	      </div>

	      <div className={classes.storyContent2}>
	      	<Container>
	      		<Image src={story5} width="100%"/>
	      	</Container>
	      </div>

	      <div className={classes.storyContent2}>
	      	<Container>
	      		<Grid container spacing={10}>
		      		<Grid item xs={12} sm={12} md={6}>
	      				<ScrollAnimation animateIn='fadeIn' duration={2} animateOnce="true">
		      				<Typography variant="h1" align="left" color="textPrimary" gutterBottom className={classes.storyHeader}>
				            Our Product
				          </Typography>
				      		<Typography variant="h5" align="left" color="textSecondary" paragraph className={classes.storyText1}>
										Upon first being introduced to this artisanal spirit, we immediately fell in love with the way Mezcal made us feel. Our love was only deepened upon learning more about its unique production process and the rich culture that surrounds it.
				          </Typography>
				      		<Typography variant="h5" align="left" color="textSecondary" paragraph className={classes.storyText1}>
										Our gold and double-gold rated mezcal received some of the highest scores for mezcal by Anthony Dias Blue, Editor in Chief of Tasting Panel Magazine. The care that goes into making our mezcal is one you can taste.
				          </Typography>
				        </ScrollAnimation>
		      		</Grid>
		      		<Grid item xs={12} sm={12} md={6}>
	      				<Image src={story4} className="story-image" />
	      			</Grid>
	      		</Grid>
	      	</Container>
	      </div>

	      <div className={classes.storyContent2}>
	    		<ScrollAnimation animateIn='fadeInUp' offset={1000} duration={2} animateOnce="true">
		      	<Container>
	  				  <Typography variant="h5" align="left" color="textSecondary" paragraph className={classes.storyText2}>
								Mezcal has quickly become the go-to drink among the health conscious and wellness-obsessed. It is derived from an intricate process that utilizes the mature agave plant (a minimum of 7 years). Unlike most other alcohol, Mezcal contains no additives, such as sugar and other chemicals. This, combined with the fact that it’s meant to be sipped slowly and appreciated, is likely the reason that many consider it to be relatively low-risk for a bad hangover.
		          </Typography>
		        </Container>
		      </ScrollAnimation>
		    </div>

				<div className={classes.storyContent2}>
	      	<Container>
	      		<Grid container spacing={10}>
		      		<Grid item xs={12} sm={12} md={6}>
	      				<Image src={story8} className="story-image" />
	      			</Grid>
		      		<Grid item xs={12} sm={12} md={6}>
	      				<ScrollAnimation animateIn='fadeIn' duration={2} animateOnce="true">
		      				<Typography variant="h1" align="left" color="textPrimary" gutterBottom className={classes.storyHeader}>
				            Meet our Mezcaleros
				          </Typography>
				         	<Typography variant="h5" align="left" color="textSecondary" paragraph className={classes.storyText1}>
				         		Some people consider Mezcal to have magical properties - it has been incorporated into the spirituality and medical practices in the Oaxaca region of Mexico, where it originates. Mezcal is produced in very small batches by local families - this is what keeps it so pure. At Paquera, we are dedicated to preserving mezcal’s rich history and premium quality.
				          </Typography>
				        </ScrollAnimation>
	      			</Grid>
	      		</Grid>
	      	</Container>
	      </div>

	      <Footer />

		</main>
	)
}