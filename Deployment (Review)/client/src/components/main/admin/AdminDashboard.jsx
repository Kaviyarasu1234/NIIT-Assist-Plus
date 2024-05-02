import React, { useEffect, useState } from 'react';
import './AdminDashboard.css';
import Navbar from '../../sub/navbar/Navbar';
import { useNavigate } from 'react-router-dom';
import { CourseServices } from '../../../library/services/CourseServices';
import { UserServices } from '../../../library/services/UserServices';
import Add from '../../sub/course/add/Add';
import Contact from '../../sub/contact/contact';

const AdminDashboard = () => {
     var navigate = useNavigate();
    const [table, setTable] = useState("students");
    const [courseData, setCourseData] = useState([]);
    const [studentData, setStudentData] = useState([]);
    const [paymentData, setPaymentData] = useState([]);
    
    useEffect(() => {
     if (table === "students") {
          UserServices.getAllUsers()
              .then(response => {
                  setStudentData(response.data);
              })
              .catch(error => {
                  console.error('Error fetching student data:', error);
              });
      } else if (table === "courses") {
          CourseServices.getAllCourses()
              .then(response => {
                  setCourseData(response.data);
              })
              .catch(error => {
                  console.error('Error fetching course data:', error);
              });
      }else if (table === "payments") {
          UserServices.getAllPayments()
              .then(response => {
                  setPaymentData(response.data);
              })
              .catch(error => {
                  console.error('Error fetching course data:', error);
              });
      }
         }, [table]);

    const handleLogout = () => {
        navigate("/");
    };
    const handleDelete = (cid) => {
        CourseServices.deleteCourse(cid)
        .then(response => {
          console.log(response);
        });
    };
        

    return (
        <div className="admin-dashboard">
               <div className='admin-navbar'>
                    <Navbar/>
               </div>
            <div className="sidebar">
                <ul>
                    <li onClick={()=>{setTable("dashboard")}}>Dashboard</li>
                    <li onClick={()=>{setTable("students")}}>Students</li>
                    <li onClick={()=>{setTable("courses")}}>Courses</li>
                    {/* <li onClick={()=>{setTable("contact")}}>Contact</li> */}
                    <li onClick={()=>{setTable("payments")}}>Payments</li>
                    <li onClick={handleLogout}>Logout</li>
                </ul>
            </div>
          { table == "students" ?
               <div className="content-side">
               <table className="student-table1">
                   <thead>
                       <tr>
                           <th>UID</th>
                           <th>FIRST NAME</th>
                           <th>LAST NAME</th>
                           <th>EMAIL</th>
                           <th>MOBILE</th>
                           <th>ROLE</th>
                           <th>ACTION</th>
                       </tr>
                   </thead>
                   <tbody>
                       {studentData.map((student, index) => (

                           <tr key={index}>
                               <td>{student.uid}</td>
                               <td>{student.firstName}</td>
                               <td>{student.lastName}</td>
                               <td>{student.email}</td>
                               <td>{student.mobile}</td>
                               <td>{student.role}</td>
                               <td>
                                   <button className='view' onClick={() => handleView(student)}>View</button>
                                   <button className='delete' onClick={() => handleDelete(student)}>Delete</button>
                               </td>
                           </tr>
                       ))}
                   </tbody>
               </table>
           </div>
               : table === "courses" ?
               <div className="content-side">
                   <p className='add-course' onClick={() => { setTable("add") }}>Add Course</p>
                   <table className="student-table1">
                       <thead>
                           <tr>
                               <th>Course Code</th>
                               <th>Course Name</th>
                               <th>Instructor</th>
                               <th>Genre</th>
                               <th>Duration</th>
                               <th>Amount</th>
                               <th>Action</th>
                           </tr>
                       </thead>
                       <tbody>
                           {courseData.map((course, index) => (
                               <tr key={index}>
                                   <td>{course.cid}</td>
                                   <td>{course.name}</td>
                                   <td>{course.instructor}</td>
                                   <td>{course.genre}</td>
                                   <td>{course.duration}</td>
                                   <td>{course.amount}</td>
                                   <td>
                                       <button className='view' onClick={() => navigate(`/manage/view/${course.cid}`)}>View</button>
                                       <button className='delete' onClick={() => handleDelete(course.cid)}>Delete</button>
                                   </td>
                               </tr>
                           ))}
                       </tbody>
                   </table>
               </div>
               : (table == "payments") ?
               <div className="content-side">
               <table className="student-table1">
                   <thead>
                       <tr>
                           <th>PID</th>
                           <th>STATUS</th>
                           <th>AMOUNT</th>
                           <th>MODE</th>
                           <th>STUDENT ID</th>
                           <th>COURSE ID</th>
                           <th>CREATED AT</th>
                       </tr>
                   </thead>
                   <tbody>
                       {paymentData.map((payment, index) => (
                           <tr key={index}>
                               <td>{payment.pid}</td>
                               <td>{payment.status}</td>
                               <td>{payment.amount}</td>
                               <td>{payment.mode}</td>
                               <td>{payment.studentId}</td>
                               <td>{payment.courseId}</td>
                               <td>{new Date(payment.createdAt).toLocaleString()}</td>
                           </tr>
                       ))}
                   </tbody>
               </table>
           </div>
               :
               table == "dashboard" ?
                    <div className="content-side">
                         <h2>Dashboard</h2>
                         <div className="student-table1">
                         <table>
                              <thead>
                              <tr>
                                   <th>Statistic</th>
                                   <th>Value</th>
                              </tr>
                              </thead>
                              <tbody>
                              <tr>
                                   <td>Total Users</td>
                                   <td>1000</td>
                              </tr>
                              <tr>
                                   <td>Active Courses</td>
                                   <td>50</td>
                              </tr>
                              <tr>
                                   <td>Total Revenue</td>
                                   <td>$50,000</td>
                              </tr>
                              <tr>
                                   <td>New Registrations (Today)</td>
                                   <td>25</td>
                              </tr>
                              <tr>
                                   <td>Average Course Rating</td>
                                   <td>4.5</td>
                              </tr>
                              <tr>
                                   <td>Course Enrollment Rate</td>
                                   <td>75%</td>
                              </tr>
                              {/* Add more rows for other statistics */}
                              </tbody>
                         </table>

                         </div>
                    </div>
                    : table == "add" ?
                         <div className='content-side'>
                              <div className='dashboard-add-course'>
                                   <Add/>
                              </div>
                         </div>
                    : 
                    table == "contact" ?
                         <div className='content-side'>
                              <Contact/>
                         </div>
                    : 
                    <></>

               }
        </div>
    );
};

export default AdminDashboard;