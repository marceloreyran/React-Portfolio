import React from 'react'
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";




const Contact = () => {
    return(
        <>
        <div className="container contact">
            <h1>CONTACT ME </h1>
            <div className="contact-icon">
                <div className="items">
                <FaInstagramSquare size={70} />
                </div>
                <div className="items">
                <FaLinkedin size={70}/>


                </div>
                <div className="items">
                <FaGithubSquare size={70} />

                </div>
                <div className="items">
                <FaXTwitter size={70} />

                </div>
                <div className="items">
                <BiLogoGmail size={70} />

                </div>
            </div>
        </div>
        </>
    )
}


export default Contact