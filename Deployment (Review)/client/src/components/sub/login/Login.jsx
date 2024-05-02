// import './Register.scss';
import { IoWarningOutline } from "react-icons/io5";
import { useState } from "react"
import Validation from "../../../library/validation/Validation";
import { useNavigate } from "react-router-dom";
import { AuthServices } from "../../../library/services/AuthServices";

function Login() {
     var navigate = useNavigate();
     const [error,setError] = useState({});
     const [details, setDetails] = useState({
          username: "",
          password: ""
      });

     const handleChange = (e) => {
          const { name, value } = e.target;
          setDetails({ ...details, [name]: value });
     };

     const handleValidation = () => {
          // const validationErrors = Validation(details);
          // setError(validationErrors);
          // if (Object.keys(validationErrors).length === 0) {
               console.log(details); 
               AuthServices.login(details)
               .then((res) => { 
                    console.log(res);
                    localStorage.setItem("token", res.data.token);
                    localStorage.setItem("uid", res.data.user);
                    localStorage.setItem("role", res.data.role);
                    if(res.data.role=="ADMIN") {
                         navigate("/");
                    } else{
                         navigate("/");
                    }
               })
               .catch(() => {setError({
                    message: "Invalid Credentials",
               })});
          // }
     };

     const Login = (e) => {
          e.preventDefault();
          handleValidation(details);
     }

     return (
          <>
               <form onSubmit={Login} className='register-form'>
                    <div className='intro'>
                         <h2>SIGN IN TO YOUR ACCOUNT</h2>
                         <p>Continue with your account.</p>
                    </div>
                    <div className='title single'>
                         <p>EMAIL</p>
                    </div>
                    <div onChange={handleChange} className={`input single ${(error.email!==undefined && error.email) ? 'error-input' : '' }`}>
                         <input
                              type="email"
                              name="username"
                         />
                    </div>
                    <div className='title single'>
                         <p>PASSWORD</p>
                    </div>
                    <div onChange={handleChange} className={`input single ${(error.password!==undefined && error.password) ? 'error-input' : '' }`}>
                         <input
                              type="password"
                              name="password"
                         />
                    </div>
                    <div className='submit'>
                         <button type="submit">SIGN IN</button>
                    </div>
                    {error.message && 
                         <div className='error-box'>
                              <div className='error-image'>
                                   <IoWarningOutline/>
                              </div>
                              <div className='error-message'>
                                   {error.message}
                              </div>
                         </div>
                    }
               </form>
          </>
     )
}

export default Login