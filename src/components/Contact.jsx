import React from 'react'
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";



const Contact = () => {
    return(
        <>
        <div className="container contact">
            <h1>CONTACT ME </h1>
            <div className="contact-icon">
                <div className="items">
                <FaInstagramSquare size={80} />
                </div>
                <div className="items">
                <FaLinkedin size={80}/>


                </div>
                <div className="items"></div>
                <div className="items"></div>
                <div className="items"></div>
            </div>
        </div>
        </>
    )
}


export default Contact