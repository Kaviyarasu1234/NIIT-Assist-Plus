import './Authorize.scss'
import { useEffect, useState } from "react"
import Register from "../../sub/register/Register"
import Login from '../../sub/login/Login'
import { useNavigate, useParams } from 'react-router-dom'

function Authorize() {
     const {path} = useParams();
     const [route,setRoute] = useState(path);
     var navigate = useNavigate();

     const page = () => {
          (route == "register") ? setRoute("login") : setRoute("register");
     };

     useEffect(() => {
          setRoute(path);
     }, [path]);

     return (
          <>
               {(route=="register") ?
                    <div className='authorize'>
                         <div className='authorize-intro'>
                              <h1>Welcome to NIIT Digital!</h1>
                              <p>Your path to excellence, powered by an amazing learning experience, is just a click away.</p>
                              <p onClick={()=>{navigate("/")}} className='home-link'>Take Me To Home</p>
                         </div>
                         <div className='authorize-form'>
                              <div className='register'>
                                   <Register/>
                              </div>
                              <div className='switch'>
                                   <p>
                                        Have an account ?&nbsp;
                                        <span onClick={page}>Sign In</span>
                                   </p>
                              </div>
                         </div>
                    </div>
                    :
                    <div className='authorize'>
                         <div className='authorize-intro'>
                              <h1>Welcome to NIIT Digital!</h1>
                              <p>Your path to excellence, powered by an amazing learning experience, is just a click away.</p>
                              <p onClick={()=>{navigate("/")}} className='home-link'>Take Me To Home</p>
                         </div>
                         <div className='authorize-form'>
                              <div className='register'>
                                   <Login/>
                              </div>
                              <div className='switch'>
                                   <p>
                                        Don't have an account ?&nbsp;
                                        <span onClick={page}>Sign up</span>
                                   </p>
                              </div>
                         </div>
                    </div>
               }   
          </>
     )
}

export default Authorize