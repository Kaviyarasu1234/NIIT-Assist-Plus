// import './Register.scss';

function Login() {

     return (
          <>
               <form className='register-form'>
                    <div className='intro'>
                         <h2>SIGN IN TO YOUR ACCOUNT</h2>
                         <p>Continue with your account.</p>
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
                    <div className='title single'>
                         <p>PASSWORD</p>
                    </div>
                    <div className='input single'>
                         <input
                              type="password"
                              name="password"
                              required
                         />
                    </div>
                    <div className='submit'>
                         <button type="submit">SIGN IN</button>
                    </div>
               </form>
          </>
     )
}

export default Login