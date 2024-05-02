import React from 'react';
import { Link } from 'react-router-dom'; 
import './User.css';
import Navbar from '../../sub/navbar/Navbar';

const User = () => {
  return (  
    <div className='full-navbar'>
      <div className='nav'>
          <Navbar/>
      </div>
      <div className='back-img'>
        <div className='image-content'>
          <h1>Standard Colleges<br/> For Students</h1>
          <p>Best Education Theme in 2024</p>
          <button>Apply Now</button>
        </div>
      </div>
      <div className='small-cards'>
      <div className='card'>
          <div className='smallcards'>
            <h4>Skilled Lecturers</h4>
            <p>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.</p>
            <button className='mad'>Read More</button>
            
          </div>
        </div>
      <div className='card'>
          <div className='smallcards'>
            <h4>Scholarship Facility</h4>  
            <p>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.</p>
            <button className='mad'>Read More</button>
            
          </div>
        </div>
      <div className='card'>
          <div className='smallcards'>
            <h4>Book Library & Store</h4>  
            <p>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.</p>
            <button className='mad'>Read More</button>
            
          </div>
        </div>

      </div>
      <div class='box-university'>
        <div class='box-content'>
        <h2 class='box-title'>World's Best Colleges</h2>
        <p class='box-text'>Simply dummy text of the printing and typesetting industry. Lorem<br/> Ipsum Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br/>Consequuntur, deserunt.</p>
        <p class='box-text'>Simply dummy text of the printing and typesetting industry. Lorem <br/>Ipsum Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br/>Consequuntur, deserunt.</p>
        <p class='box-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate nisi<br/> tenetur ratione magni ut at expedita provident, cupiditate.</p>
      </div>
    </div>
    <div class='container-wrapper'>
      <div class='container-1'>
        <p>100+</p>
        <p>Top University</p>
      </div>


      <div class='container-3'>
          <p>30+</p>
          <p className='hii'>Best Courses</p>
      </div>
      <div class='container-2'>
         <p>1000+</p>
         <p className='hii'>Top Colleges</p>
      </div>
      <div class='container-3'>
        <p>100%</p>
        <p className='hii'>Best Placements</p>
      </div>
    </div>
    <div className='our-dept'>
      <h2 className='our'>OUR DEPARTMENTS</h2>
      <p className='dept'>Popular Departments</p>
      <div className='custom-card-container'>
      <div class='custom-card'>
        <div class='custom-smallcards'>
        <h4>Computer Engineering</h4>  
       <p>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.</p>
       <button class='custom-mad'>Read More</button>
      </div>
    </div>
      <div class='custom-card'>
        <div class='custom-smallcards'>
        <h4>Electrical Engineering</h4>  
       <p>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.</p>
       <button class='custom-mad'>Read More</button>
      </div>
    </div>
      <div class='custom-card'>
        <div class='custom-smallcards'>
        <h4>Civil Engineering</h4>  
       <p>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.</p>
       <button class='custom-mad'>Read More</button>
      </div>
    </div>
      <div class='custom-card'>
        <div class='custom-smallcards'>
        <h4>Microbio Engineering</h4>  
       <p>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.</p>
       <button class='custom-mad'>Read More</button>
      </div>
    </div>
      <div class='custom-card'>
        <div class='custom-smallcards'>
        <h4>Textile Engineering</h4>  
       <p>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.</p>
       <button class='custom-mad'>Read More</button>
      </div>
    </div>
      <div class='custom-card'>
        <div class='custom-smallcards'>
        <h4>Biomedical Engineering</h4>  
       <p>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.</p>
       <button class='custom-mad'>Read More</button>
      </div>
    </div>
    <button class='view-more'>View More</button>
      </div>
      
  </div>
  <footer className="footer">
      <div className="footer-contact">
        <p>Kuniamuthur, Coimbatore, Tamil Nadu - 641008</p>
        <p className='name'><Link to="info@skcet.edu.in">Email Id : info@skcet.edu.in</Link></p>
        <p>Phone No :91+ 892 - 5555 - 444</p>
      </div>
      <div className="footer-container">
        <div className="footer-section">
          <h3>Useful Links</h3>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/instructors">Our Instructors</Link></li>
            <li><Link to="/courses">Courses</Link></li>
            <li><Link to="/history">Admissions</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Service Plus</h3>
          <ul>
            <li><Link to="/services">Our Services</Link></li>
            <li><Link to="/cse">CSE Engineering</Link></li>
            <li><Link to="/graduation">Graduation</Link></li>
            <li><Link to="/courses">Courses</Link></li>
            <li><Link to="/admission">Admission</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Main Links</h3>
          <ul>
            <li><Link to="/blog1">Academics</Link></li>
            <li><Link to="/social-media-strategy">Placement</Link></li>
            <li><Link to="/social-media-strategy">Fees Structure</Link></li>
            <li><Link to="/social-media-strategy">Student Life</Link></li>
          </ul>
        </div>
      </div>
      <div c
lassName="footer-bottom">
        <p>SKCET 2024. All Rights Reserved.</p>
      </div>
    </footer>
  </div>

  );
};

export default User;