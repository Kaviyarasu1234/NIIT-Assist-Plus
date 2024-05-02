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

               <div className='navelement'>
                   <ul></ul>
               </div>
               <ul className='links'>
                    <li><p onClick={()=>{navigate("/authorize")}}>SIGN IN</p></li>
               </ul>
          </div>
     )
}

export default Navbar
