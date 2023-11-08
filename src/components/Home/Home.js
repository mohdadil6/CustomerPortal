import React,{useState} from 'react';
import { Link } from 'react-router-dom';

import './Home.css';
import banner1 from '../../assets/banner (1).avif';
import banner2 from '../../assets/banner (2).avif';
import banner3 from '../../assets/banner (3).avif';
import banner4 from '../../assets/banner (4).jpg';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';
import Newsletter from '../Newsletter/Newsletter.js';
function Home() {
  const [showLoginForm, setShowLoginForm] = useState(false);

  const toggleLoginForm = () => {
    setShowLoginForm(!showLoginForm);
  };
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
    {/* <div className="section full-height over-hide px-4 px-sm-0">
     
        <div className="row full-height justify-content-center">
          <div className="col-lg-10 col-xl-8 align-self-center padding-tb">
            <div className="section mx-auto text-center slider-height-padding">
              <input
                className="checkbox frst"
                type="radio"
                id="slide-1"
                name="slider"
                defaultChecked="checked"
              />
              <label htmlFor="slide-1" />
              <input
                className="checkbox scnd"
                type="radio"
                name="slider"
                id="slider-2"
              />
              <label htmlFor="slider-2" />
              <input
                className="checkbox thrd"
                type="radio"
                name="slider"
                id="slider-3"
              />
              <label htmlFor="slider-3" />
              <input
                className="checkbox foth"
                type="radio"
                name="slider"
                id="slider-4"
              />
              <label htmlFor="slider-4" />
              <ul>
                <li>
                  <span>MALE GOOFY FACE</span>
                </li>
                <li>
                  <span>TOY PIG</span>
                </li>
                <li>
                  <span>SHY PORTRAIT</span>
                </li>
                <li>
                  <span>SKATEBOARD FACE</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div> */}
    
    <div className="banner-slider-container">
        <Carousel
          showArrows={true}
          emulateTouch={true}
          infiniteLoop={true}
          autoPlay={true}
          interval={5000}
        >
          <div>
            <img src={banner1} alt="Banner Slide 1" />
          </div>
          <div>
            <img src={banner2} alt="Banner Slide 2" />
          </div>
          <div>
            <img src={banner3} alt="Banner Slide 3" />
          </div>
          <div>
            <img src={banner4} alt="Banner Slide 4" />
          </div>
        </Carousel>
      </div>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://source.unsplash.com/random/300x351/?media"
                alt="Media"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Media
                </Typography>
                <Typography variant="body2" color="text.secondary">
                 Upcoming events, Webinars and Our Media presence.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://source.unsplash.com/random/300x351/?projects"
                alt="Projects"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Projects
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Our ongoing and Upcoming Projects list.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://source.unsplash.com/random/300x351/?testimonials"
                alt="Testimonials"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Testimonials
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Hear from our happy customers.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://source.unsplash.com/random/300x351/?working,staff,group"
                alt="Working & Staff"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Working & Staff
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Meet our dedicated staff and workforce.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>

        {/* Login Form */}<br/><br/>
       
        <div className="login-button-container">
        <Link to="/contact">
        <button>Raise a request</button>
       
      </Link>
       {!showLoginForm && (
        <button style={{backgroundColor:showLoginForm ? '#007bff' : '#0056b3'}} onClick={toggleLoginForm}>Login</button>)}
      <div className={`login-card ${showLoginForm ? 'show' : 'hide'}`}>
        <h2>Login</h2>
        <form>
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input type="text" id="username" name="username" placeholder="Enter your username" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" name="password" placeholder="Enter your password" />
            </div>
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Home;