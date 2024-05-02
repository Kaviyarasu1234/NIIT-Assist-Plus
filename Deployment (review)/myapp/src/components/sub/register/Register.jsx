import { useState } from 'react';
import Validation from '../../../library/validation/Validation';
import './Register.scss';
import { IoWarningOutline } from 'react-icons/io5';

function Register() {
     const [error,setError] = useState({});
     const [details, setDetails] = useState({
          first_name: "",
          last_name: "",
          email: "",
          password: "",
          confirm_password: "",
      });

     const handleChange = (e) => {
          const { name, value } = e.target;
          setDetails({ ...details, [name]: value });
     };

     const handleValidation = (onSuccess) => {
          const validationErrors = Validation(details);
          setError(validationErrors);
     };

     const Register = (e) => {
          e.preventDefault();
          handleValidation(details);
     }
     return (
          <>
               <form onSubmit={Register} className='register-form'>
                    <div className='intro'>
                         <h2>LET'S GET STARTED</h2>
                         <p>Sign up to continue.</p>
                    </div>
                    <div className='title double'>
                         <p>FIRST NAME</p>
                         <p>LAST NAME</p>
                    </div>
                    <div className={`input double ${
                         ((error.first_name!==undefined && error.first_name) || (error.last_name!==undefined && error.last_name)) ? 'error-input' : '' }`}>
                         <input onChange={handleChange}
                              type="text"
                              name="first_name"
                         />
                         <input onChange={handleChange}
                              type="text"
                              name="last_name"
                         />
                    </div>
                    <div className='title single'>
                         <p>EMAIL</p>
                    </div>
                    <div className={`input single ${(error.email!==undefined && error.email) ? 'error-input' : '' }`}>
                         <input onChange={handleChange}
                              type="email"
                              name="email"
                         />
                    </div>
                    <div className='title double'>
                         <p>PASSWORD</p>
                         <p>CONFIRM</p>
                    </div>
                    <div className={`input double ${
                         ((error.password!==undefined && error.password) || (error.confirm_password!==undefined && error.confirm_password)) ? 'error-input' : '' }`}>
                         <input onChange={handleChange}
                              type="password"
                              name="password"
                         />
                         <input onChange={handleChange}
                              type="password"
                              name="confirm_password"
                         />
                    </div>
                    <div className='submit'>
                         <button type="submit">REGISTER</button>
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

export default Register