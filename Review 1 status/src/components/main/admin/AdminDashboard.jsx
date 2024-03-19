import React from 'react';
import { Link } from 'react-router-dom';
// import { Dashboard, People, School, MenuBook, Contacts, Business, Payment, ExitToApp } from '@mui/icons-material';
import './AdminDashboard.css';
import Navbar from '../../sub/navbar/Navbar';
// import Navbar from '../user/Navbar';
// import AdminNavbar from './AdminNavbar';

const AdminDashboard = () => {
    const handleLogout = () => {
        
    };
    const studentData = [
        { rollNo: 'A25', name: 'Ken Smith', department: 'Science', email: 'ken@gmail.com', phone: '(417) 646-7483', admissionDate: '04 Jan, 2019' },
        { rollNo: 'A26', name: 'Gerald K Smith', department: 'M.C.A.', email: 'Gerald@gmail.com', phone: '(154) 646-2486', admissionDate: '04 Jan, 2019' },
        { rollNo: 'A25', name: 'Ken Smith', department: 'Mechanical', email: 'ken@gmail.com', phone: '(417) 646-8377', admissionDate: '04 Jan, 2019' },
        { rollNo: 'A27', name: 'Alice A Smith', department: 'M.B.B.S.', email: 'Patricia@gmail.com', phone: '(753) 646-4931', admissionDate: '04 Jan, 2019' },
        { rollNo: 'A17', name: 'Ken Smith', department: 'Arts', email: 'ken@gmail.com', phone: '(417) 646-7642', admissionDate: '04 Jan, 2019' },
        { rollNo: 'A11', name: 'Corrine M Johnson', department: 'Mechanical', email: 'Gladys@gmail.com', phone: '(349) 646-8377', admissionDate: '04 Jan, 2019' },
        { rollNo: 'A12', name: 'Alan Johnson', department: 'Music', email: 'ken@gmail.com', phone: '(648) 646-8523', admissionDate: '04 Jan, 2019' },
        { rollNo: 'A23', name: 'John Smith', department: 'Civil', email: 'Corrine@gmail.com', phone: '(417) 646-7845', admissionDate: '04 Jan, 2019' }
    ];

    return (
        <div className="admin-dashboard">
               <div className='admin-navbar'>
                    <Navbar/>
               </div>
            <div className="sidebar">
                <ul>
                    <li>Dashboard</li>
                    <li>Students</li>
                    <li>Departments</li>
                    <li>Courses</li>
                    <li>Contact</li>
                    <li>College</li>
                    <li>Payments</li>
                    <li>Logout</li>
                </ul>
            </div>
            <div className="content-side">
                <table className="student-table1">
                    <thead>
                        <tr>
                            <th>ROLL NO.</th>
                            <th>NAME</th>
                            <th>DEPARTMENT</th>
                            <th>EMAIL</th>
                            <th>PHONE</th>
                            <th>ADMISSION DATE</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {studentData.map((student, index) => (
                            <tr key={index}>
                                <td>{student.rollNo}</td>
                                <td>{student.name}</td>
                                <td>{student.department}</td>
                                <td>{student.email}</td>
                                <td>{student.phone}</td>
                                <td>{student.admissionDate}</td>
                                <td>    
                                    <button className='view' onClick={() => handleView(student)}>View</button>
                                    <button className='delete' onClick={() => handleDelete(student)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminDashboard;