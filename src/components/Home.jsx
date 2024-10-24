import React,  {useEffect,useRef} from 'react';
import pdf from '../pdf/Marcelo Reyna Rangel.pdf';
import hero from './data/hero.json';
import Typed from 'typed.js';

const Home = () => {
  const typedRef = useRef(null);
  useEffect(() => {
    const options = {
      strings: [
        "I am Marcelo Reyna Rangel - I'm Frontend Developer."    
      ],

      typeSpeed: 50,
      backSpeed: 50,
      loop: true,  
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);
   return ( 
    
    <>
      <div className="container home" id="home">
        <div className="left" data-aos="fade-down" data-aos-duration="1000">
          <h2 style={{color:'azure'}} ref={typedRef}></h2>
          <a href={pdf} download="Marcelo Reyna Rangel.pdf" className="btn btn-outline-warning my-3">Download Resume</a>
          </div>
         <div className="right">
          <div className="img" data-aos="fade-up-left" data-aos-duration="1000">
          <img src={`/assets/${hero.imgSrc}`} alt="Hero" />                
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
   

