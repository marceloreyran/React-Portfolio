import React from 'react'
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";




const Contact = () => {
    return(
        <>
        <div className="container contact" id="contact">
            <h4>CONTACT ME </h4>
            <div className="contact-icon" data-aos="fade-up"
     data-aos-anchor-placement="top-center">
                <a href='https://www.instagram.com/' target='_blank'  className="items" >
                <FaInstagramSquare className='icons'/>
                </a>
                <a href='https://www.linkedin.com/in/marcelo-reyna-rangel-83b813216/' target='_blank' className="items">
                <FaLinkedin className='icons'/>


                </a>
                <a href='https://github.com/marceloreyran' target='_blank' className="items">
                <FaGithubSquare className='icons' />

                </a>
                <a href='https://www.x.com/' target='_blank' className="items">
                <FaXTwitter className='icons'/>

                </a>
                <a href='https://www.gmail.com/' target='_blank' className="items">
                <BiLogoGmail className='icons' />

                </a>
            </div>
        </div>
        </>
    )
}


export default Contact