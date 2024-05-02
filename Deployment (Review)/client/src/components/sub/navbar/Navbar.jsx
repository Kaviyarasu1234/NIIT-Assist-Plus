import React from 'react';
import './Navbar.scss';
import logo from '../../../assets/images/NIIT.png';
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate();

    const role = localStorage.getItem('role');

    const handleSignOut = () => {
        localStorage.clear();
        navigate('/authorize');
    };

    return (
        <div className='navbar-contents'>
            <div className='logo'>
                <img onClick={() => { navigate('/') }} src={logo} alt='' />
            </div>
            <ul className='links'>
                {/* If role exists, display appropriate links */}
                {role ? (
                    <>
                        {role === 'ADMIN' && <li><p onClick={() => { navigate('/admin') }}>DASHBOARD</p></li>}
                        {role === 'STUDENT' && <li><p onClick={() => { navigate('/user') }}>DASHBOARD</p></li>}
                        <li><p onClick={() => { navigate('/courses') }}>COURSES</p></li>
                        <li><p onClick={handleSignOut}>SIGN OUT</p></li>
                    </>
                ) : (
                    <>
                         <li><p onClick={() => { navigate('/authorize') }}>SIGN IN</p></li>
                         <li><p onClick={() => { navigate('/courses') }}>COURSES</p></li>
                    </>
                )}
            </ul>
        </div>
    );
}

export default Navbar;
