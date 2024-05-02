import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React,{Suspense} from "react";
import Authorize from '../../components/main/authorize/Authorize';
import Register from '../../components/sub/register/Register';
// import Home from '../../components/main/home/Home';
import Footer from '../../components/sub/footer/Footer';
import Navbar from '../../components/sub/navbar/Navbar';
import AdminDashboard from '../../components/main/admin/AdminDashboard';
import User from '../../components/main/user/User';
import Courses from '../../components/main/courses/Courses';
import Apply from '../../components/sub/apply/Apply';
import Course from '../../components/main/course/Course';
import Uploader from '../uploader/Uploader.jsx';
import Manage from '../../components/main/manage-course/Manage.jsx';
import Add from '../../components/sub/add-course/Add.jsx';
import { Function } from '../Function/Function.jsx';
import Home from '../../components/main/home/Home.jsx';
import Contact from '../../components/sub/contact/contact.jsx';
import About from '../../components/sub/about/About.jsx';

function Link() {
     return (
          <BrowserRouter>
               <Function>
                    <Routes>
                         <Route path='/' element={<Home/>} />
                         <Route path='/manage/:action/:id' element={<Manage/>} />
                         <Route path='/manage/:action' element={<Manage/>} />
                         <Route path='/authorize/:path' element={<Authorize/>} />
                         <Route path='/authorize' element={<Authorize/>} />
                         <Route path='/footer' element={<Footer/>} />
                         <Route path='/navbar' element={<Navbar/>} />
                         <Route path='/admin' element={<AdminDashboard/>} />
                         <Route path='/user' element={<User/>} />
                         <Route path='/courses' element={<Courses/>} />
                         <Route path='/add' element={<Add/>} />
                         <Route path='/apply/:id' element={<Apply/>} />
                         <Route path='/course' element={<Course/>} />
                         <Route path='/upload' element={<Uploader/>} />
                         <Route path='/contact' element={<Contact/>} />
                         <Route path='/about' element={<About/>} />
                    </Routes>
               </Function>
          </BrowserRouter>
     );
}

export default Link;