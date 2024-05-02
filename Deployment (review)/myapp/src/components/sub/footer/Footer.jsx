import './Footer.scss'
import logo from '../../../assets/images/NIIT_WHITE.png'
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";

function Footer() {

  return (
     <div className='footer-content'>
          <div className='logo'>
               <img src={logo} alt="My Image" />
          </div>
          <div className='row'>
               <div className="icons">
                    <a href="https://twitter.com/NIITLtd" className="twi" target="_blank" rel="nofollow">
                         <FaSquareXTwitter/>
                    </a>
                    <a href="https://www.facebook.com/NIITDigital/" className="f_book" target="_blank" rel="nofollow">
                         <FaFacebookSquare/>
                    </a>
                    <a href="https://www.instagram.com/niitdigital/?hl=en" className="in_gram" target="_blank" rel="nofollow">
                         <FaSquareInstagram/>
                    </a>
               </div>
               <div className='col-1'>
                    <h6>ABOUT NIIT</h6>
                    <ul>
                         <li><p>About Us</p></li>
                         <li><p>Careers</p></li>
                         <li><p>Contact</p></li>
                         <li><p>Go To NIIT MTS</p></li>
                         <li><p>Sitemap</p></li>
                    </ul>
               </div>
               <div className='col-2'>
                    <h6>News Coverage</h6>
                    <ul>
                         <li><p>News Dossier</p></li>
                         <li><p>Media Kit</p></li>
                         <li><p>Press Release</p></li>
                         <li><p>Media Coverage</p></li>
                         <li><p>Blog</p></li>
                    </ul>
               </div>
               <div className='col-3'>
                    <h6>INVESTORS</h6>
                    <ul>
                         <li><p>Investors Information</p></li>
                    </ul>
               </div>
          </div>
          <div className='end-links'>
               <div className='link'>
                    <p>PRIVACY POLICY</p>
                    <p>TERMS OF USE</p>
               </div>
               <div className='copyright'>
                    <p>COPYRIGHT © NIIT 2024. ALL RIGHTS RESERVED.</p>
               </div>
          </div>
     </div>
  )
}

export default Footer
