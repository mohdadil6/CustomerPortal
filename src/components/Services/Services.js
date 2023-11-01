import React from 'react';
import './Services.css';

function Services() {
  return (
    <div>
      <h1>Welcome to the Services Page</h1>
      <article className="postcard dark blue">
          <a className="postcard__img_link" href="#">
            <img className="postcard__img" src="https://source.unsplash.com/random/300x351/?Services" alt="Image Title" />
          </a>
          <div className="postcard__text">
            <h1 className="postcard__title blue">Aliquip occaecat ea sint eiusmod labore tempor dolore voluptate in excepteur cupidatat nisi laborum.</h1>
            <div className="postcard__bar"></div>
            <div className="postcard__preview-txt">
              Lorem ea irure ullamco excepteur sint.
            </div>
          </div>
        </article>
        <article className="postcard dark yellow">
          <a className="postcard__img_link" href="#">
            <img className="postcard__img" src="https://source.unsplash.com/random/300x351/?Planner" alt="Image Title" />
          </a>
          <div className="postcard__text">
            <h1 className="postcard__title yellow">Incididunt quis magna fugiat nulla cupidatat ut.</h1>
            <div className="postcard__bar"></div>
            <div className="postcard__preview-txt">
Cupidatat ad nisi anim deserunt quis nulla sint id officia amet aliqua ipsum sint dolor.            </div>
          </div>
        </article>
                
        <article className="postcard dark green">
          <a className="postcard__img_link" href="#">
            <img className="postcard__img" src="https://source.unsplash.com/random/300x351/?Management" alt="Image Title" />
          </a>
          <div className="postcard__text">
            <h1 className="postcard__title green">Consectetur aliqua sunt ex ex commodo.</h1>
            <div className="postcard__bar"></div>
            <div className="postcard__preview-txt">
Non magna officia voluptate quis fugiat excepteur magna.            </div>
          </div>
        </article>
              
        <article className="postcard dark red">
          <a className="postcard__img_link" href="#">
            <img className="postcard__img" src="https://source.unsplash.com/random/300x351/?Designers" alt="Image Title" />	
          </a>
          <div className="postcard__text">
            <h1 className="postcard__title red">Commodo nostrud nostrud in minim id nostrud voluptate.</h1>
            <div className="postcard__bar"></div>
            <div className="postcard__preview-txt">
Eu mollit incididunt cupidatat est.            </div>
          </div>
        </article>
                
    </div>
  );
}

export default Services;
