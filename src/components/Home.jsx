import React from 'react';
import pdf from '../pdf/Marcelo Reyna Rangel.pdf';
import hero from './data/hero.json';

const Home = () => {
  return (
    <>
      <div className="container home">
        <div className="left">
          <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur deleniti neque distinctio molestias perferendis cum.</h2>
          <a href={pdf} download="Marcelo Reyna Rangel.pdf" className="btn btn-outline-warning">Download Resume</a>
          </div>
         <div className="right">
          <div className="img">
          <img src={`/assets/${hero.imgSrc}`} alt="hero" width="400px" height="400px" />                
          </div>
        
        </div>
      </div>
    </> 
  );
};

export default Home;