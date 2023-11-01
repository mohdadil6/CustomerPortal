import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';
import './Contact.css';

function Contact() {
  return (<>
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={3}>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://source.unsplash.com/random/300x351/?artist,entertainmentMusician,Bands,StandupComedian,ScratchArtist,MakeupArtist,Anchors,DJ's,HairArtist,FolkArtist,MehndiArtist,Coreographers"
              alt="Artist & Entertainment"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lorem ipsum
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Ut eiusmod consectetur quis excepteur pariatur labore duis commodo. Velit et qui culpa deserunt.
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
                image="https://source.unsplash.com/random/300x351/?scenery,view"
                alt="Artist & Entertainment"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lorem ipsum
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Ut eiusmod consectetur quis excepteur pariatur labore duis commodo. Velit et qui culpa deserunt.
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
                  image="https://source.unsplash.com/random/300x351/?plants,office,books"
                  alt="Artist & Entertainment"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lorem ipsum
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Ut eiusmod consectetur quis excepteur pariatur labore duis commodo. Velit et qui culpa deserunt.
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
                    alt="Artist & Entertainment"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Lorem ipsum
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Ut eiusmod consectetur quis excepteur pariatur labore duis commodo. Velit et qui culpa deserunt.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>



          <div className="container">

            <div className="contact-card">
              <i className="fa fa-phone contact-icon"></i>
              <div className="contact-title">Phone</div>
              <div className="contact-text">
                <a href="tel:+918821088288">+91 8821 088 288</a>
              </div>
            </div>

            <div className="contact-card">
              <i className="fa fa-envelope contact-icon"></i>
              <div className="contact-title">Email</div>
              <div className="contact-text">
                <a href="mailto:themandap2023@gmail.com">Send Mail</a>
              </div>
            </div>

            <div className="contact-card">
              <i className="fa fa-instagram contact-icon"></i>
              <div className="contact-title">Instagram</div>
              <div className="contact-text">
                <a href="https://instagram.com/themandap2023">@themandap2023</a>
              </div>
            </div>
          </div><br /><br />
</>

          );
};

          export default Contact;
