import React from 'react'
import '../Style/Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faInstagram,faGithub,faLinkedin } from '@fortawesome/free-brands-svg-icons'
import {faCopyright } from "@fortawesome/free-solid-svg-icons"


const Footer = () => {
  return <>
  
  <footer className='z-index-100'>
  <FontAwesomeIcon icon={faCopyright} /> 2024 All Rights Reserved <br /> Designed by <span className='text-white font-semibold underline'> <a target='_blank' href="https://www.linkedin.com/in/maurya-khushi-ramjeet-5840b625b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ">Maurya Khushi Ramjeet</a> </span> <br />
            <div className="footer_links">
                {/* <a target='blank' href="https://www.instagram.com/ankit__upadhyay_3800?igsh=bWVsamUzbG51cnBr" ><FontAwesomeIcon icon={faInstagram} beatFade /></a> */}
                <a target='blank' href="https://www.linkedin.com/in/maurya-khushi-ramjeet-5840b625b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "><FontAwesomeIcon icon={faLinkedin} beatFade /></a>
                <a href="https://github.com/mauryakhushiramjeet" target='blank'><FontAwesomeIcon icon={faGithub} beatFade /></a>
            </div>
        </footer>
  </>
}

export default Footer