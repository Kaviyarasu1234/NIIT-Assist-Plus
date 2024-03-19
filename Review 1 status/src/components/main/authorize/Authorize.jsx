import './Authorize.scss'
import { useState } from "react"
import Register from "../../sub/register/Register"
import Login from '../../sub/login/Login'

function Authorize() {
     const [route,setRoute] = useState("login")

     return (
               <>
                    {route=="register" ?
                         <div className='authorize'>
                              <div className='authorize-intro'>
                                   <h1>Welcome to NIIT Digital!</h1>
                                   <p>Your path to excellence, powered by an amazing learning experience, is just a click away.</p>
                              </div>
                              <div className='authorize-form'>
                                   <div className='register'>
                                        <Register/>
                                   </div>
                                   <div className='switch'>
                                        <p>
                                             Have an account ?&nbsp;
                                             <span onClick={()=>{setRoute("login")}}>Sign In</span>
                                        </p>
                                   </div>
                              </div>
                         </div>
                         :
                         <div className='authorize'>
                              <div className='authorize-intro'>
                                   <h1>Welcome to NIIT Digital!</h1>
                                   <p>Your path to excellence, powered by an amazing learning experience, is just a click away.</p>
                              </div>
                              <div className='authorize-form'>
                                   <div className='register'>
                                        <Login/>
                                   </div>
                                   <div className='switch'>
                                        <p>
                                             Don't have an account ?&nbsp;
                                             <span onClick={()=>{setRoute("register")}}>Sign up</span>
                                        </p>
                                   </div>
                              </div>
                         </div>
                    }   
               </>
     )
}

export default Authorize
