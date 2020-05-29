import React, { Component } from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

class Portfolio extends Component {
  render() {
    if(this.props.data){
  
      var slides = this.props.data.check.map(function(slide, index) { 
        var examples = slide.images.map(function(image, index) {
          return (
            <img key={index} src={'images/portfolio/' + image} alt={slide.title + " example #" + index} height={slide.size} width={slide.size}/> 
          )
        })

        return (
          <div key={index} className="projectcontainer">
            <h2>{slide.title}</h2>
            <div>{slide.description}</div>
            <div className="projectexamples">{examples}</div>
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
            <Slider>{slides}</Slider>
          </div>
        </div>
      </div>
   </section>
    );
  }
}

export default Portfolio;
