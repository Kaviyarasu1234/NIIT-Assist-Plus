import React, { useState, useEffect } from 'react';
import Footer from '../../sub/footer/Footer';
import Navbar from '../../sub/navbar/Navbar';
import { GrNext } from "react-icons/gr";
import { useNavigate } from 'react-router-dom';
import './Courses.scss';
import { CourseServices } from '../../../library/services/CourseServices';

function Courses() {
    const navigate = useNavigate();
    const [courseData, setCourseData] = useState([]);

    useEffect(() => {
        fetchCourseData();
    }, []);

    const fetchCourseData = async () => {
          CourseServices.getAllCourses()
          .then(response => {
            console.log(response.data);
            setCourseData(response.data);
          })
          .catch(error => {
          console.error('Error fetching course data:', error);
          });
    };

    const handleViewCourse = (courseId) => {
        navigate(`/manage/view/${courseId}`);
    };

    return (
        <div className='courses'>
            <div className='navbar'>
                <Navbar />
            </div>
            <div className="courses-content">
                {courseData.map((course, index) => (
                    <div key={index} className="course-item">
                        <div className="course-image">
                            <img src={`https://lh3.googleusercontent.com/d/${course.image}`} alt={course.name} />
                        </div>
                        <div className="course-details">
                            <h3>{course.name}</h3>
                            <p className='placement'>Placement Assistance</p>
                            <ul className="features">
                                <li>{course.description}</li>
                                <li>Instructor: {course.instructor}</li>
                                <li>Duration: {course.duration}</li>
                                <li>Amount: {course.amount}</li>
                            </ul>
                        </div>
                        <div className='view-course'>
                            <p onClick={() => handleViewCourse(course.cid)}>{"View Program "}<GrNext /></p>
                        </div>
                    </div>
                ))}
            </div>
            <div className='footer'>
                <Footer />
            </div>
        </div>
    );
}

export default Courses;
