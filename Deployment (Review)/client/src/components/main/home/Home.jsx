import Footer from '../../sub/footer/Footer'
import knowledge from '../../../assets/images/Knowledge centre-min.webp'
import './Home.scss' 
import { FaRegCheckCircle } from "react-icons/fa";
import Navbar from '../../sub/navbar/Navbar';

function Home() {

  return (
     <>
          <div className='home'>
               <div className='navbar'>
                    <Navbar/>
               </div>
               <div className="banner">
                    <div className='links'>
                         <button>Software Engineering</button>
                         <button>Digital Marketing</button>
                         <button>Data Analytics</button>
                    </div>
               </div>
               <div className='placement'>
                    <div className='title'>
                         <p>Industry Leaders Hire From Us</p>
                    </div>
                    <div className='sub-title'>
                         <p>Join our placement-linked programs and become ‘day one job-ready’ professionals</p>
                         <button>Placement-Linked Courses</button>
                    </div>
               </div>
               <div className='niit-way'>
                    <div className='title'>
                         <h1>The NIIT Way</h1>
                         <p>
                              Teaching methodology that provides domain specific knowledge and focuses on 360-degree development of the learner
                         </p>
                         <ul>
                              <li><FaRegCheckCircle/>&nbsp;&nbsp;Learn: Mentor-led online learning</li>
                              <li><FaRegCheckCircle/>&nbsp;&nbsp;Practice: Practice material for easy learning</li>
                              <li><FaRegCheckCircle/>&nbsp;&nbsp;Apply: Assignments for first-hand experience</li>
                              <li><FaRegCheckCircle/>&nbsp;&nbsp;Review: Personalised progress review and feedback</li>
                              <li><FaRegCheckCircle/>&nbsp;&nbsp;Refactor: Subject mastery with personalised assignments</li>
                         </ul>
                    </div>
                    <div className="youtube" name="https://www.youtube.com/embed/M6MREQEyYtU">
                         <iframe
                              src="https://www.youtube.com/embed/M6MREQEyYtU"
                              title="YouTube video player"
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                         ></iframe>
                    </div>
               </div>
               <div className='knowledge-section'>
                    <img src={knowledge} alt=''></img>
                    <div className='right'>
                         <p className='right-top'>News • Industry insights • Latest in technology</p>
                         <p className='head'>Knowledge Centre</p>
                         <div className="section">
                              <picture>
                                   <source
                                        className="js-lazyload-image"
                                        data-srcset="https://www.niit.com/india/sites/default/files/styles/1000/public/2021-11/pexels-dan-nelson-3949101_0.webp?itok=qN8M8Vws"
                                        type="image/webp"
                                        srcSet="https://www.niit.com/india/sites/default/files/styles/1000/public/2021-11/pexels-dan-nelson-3949101_0.webp?itok=qN8M8Vws"
                                        alt="10 Application Security Best Practices"
                                   />
                                   <img
                                        className="js-lazyload-image loaded"
                                        data-src="public://2021-11/pexels-dan-nelson-3949101_0.jpg"
                                        src="public://2021-11/pexels-dan-nelson-3949101_0.jpg"
                                        alt="How to Evaluate Machine Learning Algorithms"
                                   />
                              </picture>
                              <p className="title">How to Evaluate Machine Learning Algorithms</p>
                              <p className="undertext">Understand, ideate, and deploy the most used machine learning algorithms</p>
                              <a className="link" articlename="How to Evaluate Machine Learning Algorithms" href="/india/knowledge-centre/ML-algorithms">Read More</a>
                         </div>
                         <div className="section">
                              <picture>
                                   <source 
                                        class="js-lazyload-image" 
                                        data-srcset="https://www.niit.com/india/sites/default/files/styles/1000/public/2021-11/AbPlacementPakki_Banner-1920-550px_3.webp?itok=4dEGETu5" 
                                        type="image/webp" 
                                        srcset="https://www.niit.com/india/sites/default/files/styles/1000/public/2021-11/AbPlacementPakki_Banner-1920-550px_3.webp?itok=4dEGETu5" 
                                        alt="10 Application Security Best Practices" 
                                   />
                                   <img 
                                        class="js-lazyload-image loaded" 
                                        data-src="public://2021-11/AbPlacementPakki_Banner-1920-550px_3.jpg" 
                                        src="public://2021-11/AbPlacementPakki_Banner-1920-550px_3.jpg" 
                                        alt="Cloud Computing Architecture - Explained"
                                   />

                              </picture>
                              <p className="title">Cloud Computing Architecture - Explained</p>
                              <p className="undertext">Understand the realm you are about to step foot in, to go the distance</p>
                              <a className="link" articlename="How to Evaluate Machine Learning Algorithms" href="/india/knowledge-centre/ML-algorithms">Read More</a>
                         </div>
                         <div className="section">
                              <picture>
                                   <source class="js-lazyload-image" data-srcset="https://www.niit.com/india/sites/default/files/styles/1000/public/2021-11/iStock-848599634_0.webp?itok=YM_p3UZn" type="image/webp" srcset="https://www.niit.com/india/sites/default/files/styles/1000/public/2021-11/iStock-848599634_0.webp?itok=YM_p3UZn" alt="10 Application Security Best Practices"/>
                                   <img class="js-lazyload-image loaded" data-src="public://2021-11/iStock-848599634_0.jpg" src="public://2021-11/iStock-848599634_0.jpg" alt="Cyber Security Approaches for Threat Detection and Remediation"/>
                              </picture>
                              <p className="title">Cyber Security Approaches for Threat Detection and Remediation</p>
                              <p className="undertext">Go through this checklist to identify, contain, and prevent crucial cy...</p>
                              <a className="link" articlename="How to Evaluate Machine Learning Algorithms" href="/india/knowledge-centre/ML-algorithms">Read More</a>
                         </div>
                         <div className="section">
                              <picture>
                                   <source class="js-lazyload-image" data-srcset="https://www.niit.com/india/sites/default/files/styles/1000/public/2021-11/digital-gf4be883b1_1920.webp?itok=86d0_Ajs" type="image/webp" srcset="https://www.niit.com/india/sites/default/files/styles/1000/public/2021-11/digital-gf4be883b1_1920.webp?itok=86d0_Ajs" alt="10 Application Security Best Practices"/>
                                   <img class="js-lazyload-image loaded" data-src="public://2021-11/digital-gf4be883b1_1920.jpg" src="public://2021-11/digital-gf4be883b1_1920.jpg" alt="Functional Programming in Python"/>
                              </picture>
                              <p className="title">Functional Programming in Python</p>
                              <p className="undertext">Want a deep learning challenge, here you go!</p>
                              <a className="link" articlename="How to Evaluate Machine Learning Algorithms" href="/india/knowledge-centre/ML-algorithms">Read More</a>
                         </div>
                         <p className='end-link'>Explore NIIT Knowledge Center</p>
                    </div>
               </div>
               <div className='footer'>
                    <Footer/>
               </div>
          </div>
     </>
  )
}

export default Home
