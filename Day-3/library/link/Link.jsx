import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Authorize from '../../components/main/authorize/Authorize';
import Register from '../../components/sub/register/Register';
import Home from '../../components/main/home/Home';
import Footer from '../../components/sub/footer/Footer';
import Navbar from '../../components/sub/navbar/Navbar';
import AdminDashboard from '../../components/main/admin/AdminDashboard';

function Link() {
     return (
          <BrowserRouter>
               <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/authorize' element={<Authorize/>} />
                    <Route path='/footer' element={<Footer/>} />
                    <Route path='/navbar' element={<Navbar/>} />
                    <Route path='/admin' element={<AdminDashboard/>} />
               </Routes>
          </BrowserRouter>
     );
}

export default Link;