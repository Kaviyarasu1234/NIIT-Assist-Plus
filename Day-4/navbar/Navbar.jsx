import './Navbar.scss'
import logo from '../../../assets/images/NIIT.png'
import { useNavigate } from 'react-router-dom'

function Navbar() {
     var navigate = useNavigate();
     return (
          <div className='navbar-contents'>
               <div className='logo'>
                    <img src={logo} alt=''></img>
               </div>
               <ul className='links'>
                    
                    <li><p>Courses</p></li>
                    <li><p onClick={()=>{navigate("/authorize")}}>Sign In</p></li>
               </ul>
          </div>
     )
}

export default Navbar
