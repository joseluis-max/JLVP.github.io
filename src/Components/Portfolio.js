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
            <a href={slide.link} target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
              </svg>
            </a>
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
