import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big1.png'
import instagram_icon from '../Assets/instagram_icon.png'
import linkln_icon from '../Assets/linkln.png'
import fb_icon from '../Assets/facebook.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer_logo} alt="footer logo missing" />
        <p>Njiku Fashion</p>
      </div>
      <ul className="footer-links">
        
        
        
        <Link to='/About'><li>About</li></Link>
        <Link to='/Contact'><li>Contact</li></Link>
      </ul>
      <div className="footer-social-icon">
      <h1>Follow us</h1>
        <div className="footer-icons-container">
          <a href="https://www.instagram.com/juniah_002/">
            <img src={instagram_icon} alt="instagram icon missing" />
            </a>
            </div>
            <div className="footer-icons-container">
              <a href="https://www.linkedin.com/in/joel-manga-68698311b/">
            <img src={linkln_icon} alt="linkln icon missing" />
            </a>
            </div>
            <div className="footer-icons-container">
              <a href="https://web.facebook.com/joel.ngunjiri.9">
            <img src={fb_icon} alt="fb missing" />
            </a>
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @2024 - All Right Reserved: Developed by Joel Manga</p>
      </div>
    </div>
  )
}

export default Footer
