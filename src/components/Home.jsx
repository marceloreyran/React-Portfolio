import React,  {useEffect,useRef} from 'react';
import pdf from '../pdf/Marcelo Reyna Rangel.pdf';
import hero from './data/hero.json';
import Typed from 'typed.js';

const Home = () => {
  const typedRef = useRef(null);
  useEffect(() => {
    const options = {
      strings: [
        "Welcome to mi Portfolio, My name is Marcelo Reyna Rangel , I'm Front End Developer"
        
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
      <div className="container home">
        <div className="left">
          <h1 ref={typedRef}></h1>
          <a href={pdf} download="Marcelo Reyna Rangel.pdf" className="btn btn-outline-warning my-3">Download CV</a>
          </div>
         <div className="right">
          <div className="img">
          <img src={`/assets/${hero.imgSrc}`} alt="hero" />                
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
   

