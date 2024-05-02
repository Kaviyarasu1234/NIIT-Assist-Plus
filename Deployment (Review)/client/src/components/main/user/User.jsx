import React, { useState } from 'react';
import Navbar from '../../sub/navbar/Navbar';
import { useNavigate } from 'react-router-dom';

const User = () => {
     var navigate = useNavigate();
     const [table, setTable] = useState("courses");
     const handleLogout = () => {
          navigate("/")
     };

     const userData = [
          { username: 'john_doe', email: 'john@example.com', role: 'student', status: 'active' },
     ];

     const courseData = [
          { code: 'CS101', name: 'Introduction to Computer Science', instructor: 'Dr. John Doe', department: 'Computer Science', credits: 3, schedule: 'Mon/Wed 9:00 AM - 10:30 AM' },
          { code: 'MAT201', name: 'Calculus I', instructor: 'Prof. Jane Smith', department: 'Mathematics', credits: 4, schedule: 'Tue/Thu 11:00 AM - 12:30 PM' },
          { code: 'ENG102', name: 'English Composition II', instructor: 'Dr. Emily Johnson', department: 'English', credits: 3, schedule: 'Mon/Wed/Fri 1:00 PM - 2:30 PM' },
          { code: 'PHY301', name: 'Physics III', instructor: 'Dr. Michael Brown', department: 'Physics', credits: 4, schedule: 'Mon/Wed/Fri 10:00 AM - 11:30 AM' },
          { code: 'CHEM202', name: 'Organic Chemistry', instructor: 'Prof. Sarah Adams', department: 'Chemistry', credits: 4, schedule: 'Tue/Thu 9:00 AM - 10:30 AM' },
          { code: 'HIS101', name: 'World History', instructor: 'Dr. Robert Johnson', department: 'History', credits: 3, schedule: 'Mon/Wed 2:00 PM - 3:30 PM' },
          { code: 'ART205', name: 'Introduction to Art History', instructor: 'Prof. Lisa Anderson', department: 'Art', credits: 3, schedule: 'Tue/Thu 2:00 PM - 3:30 PM' },
          { code: 'BIO203', name: 'Biology II', instructor: 'Dr. Michelle Garcia', department: 'Biology', credits: 4, schedule: 'Mon/Wed/Fri 9:00 AM - 10:30 AM' },
          { code: 'PHI201', name: 'Introduction to Philosophy', instructor: 'Prof. David Clark', department: 'Philosophy', credits: 3, schedule: 'Tue/Thu 1:00 PM - 2:30 PM' },      
     ];

     return (
        <div className="admin-dashboard">
            <div className='admin-navbar'>
                <Navbar/>
            </div>
            <div className="sidebar">
                <ul>
                    <li onClick={()=>{setTable("courses")}}>Courses</li>
                    <li onClick={()=>{setTable("profile")}}>Profile</li>
                    <li onClick={()=>{setTable("payments")}}>Payments</li>
                    <li onClick={handleLogout}>Logout</li>
                </ul>
            </div>
            { table === "courses" ?
                <div className="content-side">
                    <h2>Courses</h2>
                    <table className="student-table1">
                         <thead>
                              <tr>
                                   <th>Course Code</th>
                                   <th>Course Name</th>
                                   <th>Instructor</th>
                                   <th>Department</th>
                                   <th>Credits</th>
                                   <th>Schedule</th>
                                   {/* You can add more table headings as needed */}
                              </tr>
                         </thead>
                         <tbody>
                              {courseData.map((course, index) => (
                                   <tr key={index}>
                                        <td>{course.code}</td>
                                        <td>{course.name}</td>
                                        <td>{course.instructor}</td>
                                        <td>{course.department}</td>
                                        <td>{course.credits}</td>
                                        <td>{course.schedule}</td>
                                        {/* You can add more table data cells for additional course information */}
                                   </tr>
                              ))}
                         </tbody>
                    </table>
                </div>
                : table === "profile" ?
                <div className="content-side">
                    <div className="student-table1">
                         <h2>User Profile</h2>
                         <table>
                              <tbody>
                                   <tr>
                                        <td><strong>Name:</strong></td>
                                        <td>Jeeva P</td>
                                   </tr>
                                   <tr>
                                        <td><strong>Email:</strong></td>
                                        <td>iamjeeva2003@gmail.com</td>
                                   </tr>
                                   <tr>
                                        <td><strong>Username:</strong></td>
                                        <td>iamjeeva2003@gmail.com</td>
                                   </tr>
                                   <tr>
                                        <td><strong>Age:</strong></td>
                                        <td>20</td>
                                   </tr>
                                   <tr>
                                        <td><strong>Country:</strong></td>
                                        <td>India</td>
                                   </tr>
                                   <tr>
                                        <td><strong>Courses Enrolled:</strong></td>
                                        <td>15</td>
                                   </tr>
                              </tbody>
                         </table>

                    </div>
                </div>
                :
                table == "payments" ?
                <div className='content-side'>
                    <p className='payments-para'>You don't initiated any payments yet..!</p>
                </div>
                : null
            }
        </div>
    );
};

export default User;