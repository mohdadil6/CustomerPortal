import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';
import './Contact.css';
import calling from '../../assets/calling.jpg';
import email from '../../assets/email.jpg';
import insta from '../../assets/insta.jpg';

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


          <div className="contact-container">
        <div className="contact-card">
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={calling}
                alt="Phone"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Phone
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Call us at <a href="tel:+918359900835">+91 835 9900 835</a>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>

        <div className="contact-card">
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={email}
                alt="Email"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Email
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Send us an email at <a href="mailto:mo.adil611@gmail.com">mo.adil611@gmail.com</a>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>

        <div className="contact-card">
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={insta}
                alt="Instagram"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Instagram
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Follow us on Instagram: <a href="https://instagram.com/">@SeamEx</a>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
      </div>
    </>
  );
}

export default Contact;

