import './Register.scss';

function Register() {

     return (
          <>
               <form className='register-form'>
                    <div className='intro'>
                         <h2>LET'S GET STARTED</h2>
                         <p>Sign up to continue.</p>
                    </div>
                    <div className='title double'>
                         <p>FIRST NAME</p>
                         <p>LAST NAME</p>
                    </div>
                    <div className='input double'>
                         <input
                              type="text"
                              name="firstName"
                              required
                         />
                         <input
                              type="text"
                              name="lastName"
                              required
                         />
                    </div>
                    <div className='title single'>
                         <p>EMAIL</p>
                    </div>
                    <div className='input single'>
                         <input
                              type="email"
                              name="email"
                              required
                         />
                    </div>
                    <div className='title double'>
                         <p>PASSWORD</p>
                         <p>CONFIRM</p>
                    </div>
                    <div className='input double'>
                         <input
                              type="password"
                              name="password"
                              required
                         />
                         <input
                              type="password"
                              name="confirmPassword"
                              required
                         />
                    </div>
                    <div className='submit'>
                         <button type="submit">REGISTER</button>
                    </div>
               </form>
          </>
     )
}

export default Register