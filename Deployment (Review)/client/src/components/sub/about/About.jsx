import React from "react";
import "./about.css";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

const About = () => {
  return (
    <>
      <div className="about-container">
      <div className="div1">
        <img className="image-home" src={"https://pracemagisterskiewroclaw.pl/wp-content/uploads/2018/08/fsfsffff.jpg"} alt="" />

        <ul className="about-unlist">
          <li className="list-heading">Your Space</li>
          <li className="list-heading">Your Practice</li>
          <li className="list-heading">Your Community</li>
        </ul>
        <p className="sub-heading">500+ On-demand courses,</p>
        <br />
        <p className="sub-heading">classes,meetings and more..</p>
        <a href="/login">
          <button className="about-btn">Join Us</button>
        </a>
      </div>
      <div className="div2">
        <h1 className="div2-heading">Find what moves you</h1>
        <div className="div2-container">
          <div className="total">
            <div className="image-content">
              <img
                className="div2-card-imgg"
                src="/src/assets/classes.jpg"
                alt=""
              />
              <div className="description">
                <h1 className="classes-png-tit">Classes</h1>
                <p className="descriptio">
                  Whatever you’re craving to suit your learning experience, mood,
                  energy level, and your schedule, we have your daily class
                  ready to go.
                </p>
              </div>
            </div>

            <div className="image-content">
              <img
                className="div2-card-imgg"
                src="/src/assets/meditation.jpg"
                alt=""
              />
              <div className="description">
                <h1 className="classes-png-tit">Meditation</h1>
                <p className="descriptio">
                  Find your seat. Make yourself comfortable. Close your eyes.
                  Settle in. Let us guide you through your meditative practice
                  with on-demand audio guides, right here, right now.
                </p>
              </div>
            </div>

            <div className="image-content">
              <img
                className="div2-card-imgg"
                src="/src/assets/programs.jpg"
                alt=""
              />
              <div className="description">
                <h1 className="classes-png-tit">Programs </h1>
                <p className="descriptio">
                  Delve fully into an intentional theme or a specific goal with
                  our intentionally curated collections of classes to
                  personalize your practice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="div3">
        <h1 className="div3-title">Our Partners</h1>
        <div className="div3-container">
         
          <div class="logos">
            <div class="logos-slide">
              <img src="./src/assets/3m.svg" />
              <img src="./src/assets/barstool-store.svg" />
              <img src="./src/assets/budweiser.svg" />
              <img src="./src/assets/buzzfeed.svg" />
              <img src="./src/assets/forbes.svg" />
              <img src="./src/assets/macys.svg" />
              <img src="./src/assets/menshealth.svg" />
              <img src="./src/assets/mrbeast.svg" />
            </div>
          </div>
        </div>
      </div>
      <div className="div-4">
        <div className="div-4-heading">
          Count the ways you can personalize your Practice
        </div>
        <div className="div-4list">
          <div className="div-4list1">
            <div className="div-4-heading-head">25+</div>
            <h1 className="achivement-head">Courses</h1>
            <p className="achivement">
              Keep your mind and body guessing or deepen your practice.
            </p>
          </div>
          <div className="div-4list1">
            <div className="div-4-heading-head">20+</div>
            <h1 className="achivement-head">Academys</h1>
            <p className="achivement">
              Created for beginner, intermediate, and advanced practices.
            </p>
          </div>
          <div className="div-4list1">
            <div className="div-4-heading-head">45+</div>
            <h1 className="achivement-head">Challenges</h1>
            <p className="achivement">
              Carefully designed series of classes that help you get healthier,
              stronger, and more flexible.
            </p>
          </div>
          <div className="div-4list1">
            <div className="div-4-heading-head">90+</div>
            <h1 className="achivement-head">Technicals</h1>
            <p className="achivement">
              Sleep better, build mindfulness, enhance performance or let go of
              anxiety.
            </p>
          </div>
        </div>
        <div className="div-5">
          <Footer />
        </div>
      </div>
    </div>
    </>
  );
};

export default About;