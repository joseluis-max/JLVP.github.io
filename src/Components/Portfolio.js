import React, { Component } from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

class Portfolio extends Component {
  render() {
    if(this.props.data){
      var projects = this.props.data.projects.map(function(projects){
        var projectImage = 'images/portfolio/'+projects.image;
        return <div key={projects.title} className="columns portfolio-item">
           <div className="item-wrap">
            <a href={projects.url} title={projects.title}>
               <img alt={projects.title} src={projectImage} />
               <div className="overlay">
                  <div className="portfolio-item-meta">
                 <h5>{projects.title}</h5>
                     <p>{projects.category}</p>
                  </div>
                </div>
              <div className="link-icon"><i className="fa fa-link"></i></div>
            </a>
          </div>
        </div>
      })

      var test = this.props.data.check.map(function(slide, index) { 
      return (
        <div key={index} className="projectcontainer">
          <h2>{slide.title}</h2>
          <div>{slide.description}</div>
        </div>
        )
      })
    }

    return (
      <section id="portfolio">
      <div>
        <div>
          <h1><span>Projects</span></h1>
          <div>
            <Slider>{test}</Slider>
          </div>
        </div>
      </div>
   </section>
    );
  }
}

export default Portfolio;
