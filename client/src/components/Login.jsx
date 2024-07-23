import React from 'react'
import '../style/Bgimage.css'
import { Link, useNavigate} from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from '../states/authContext';
import { useLogin } from '../states/loginContext'

function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { updateUser } = useAuth();
  const { updateLogin } = useLogin()

  async function handleLogin(event){
    event.preventDefault()
    try {
      const response = await axios.post('http://localhost:3000/', {
        email,
        password,
      });
      console.log(response)
      if (response.status === 200) {
        updateUser(true)
        const user = true
        localStorage.setItem('userState', user)
        updateLogin(true)
        const logstate = true
        localStorage.setItem('logstate', logstate)
        navigate('/dashboard', { replace: true });
      }
    } catch (error) {
      if (error.response) {
        const errorMessage = error.response.data; // Extract the error message
        toast.error(errorMessage);
      } else {
        console.error("An error occurred:", error.message);
      }
    }
  }

    return (
        <div id="background" className='h-[100vh] w-[100vw] overscroll-none overflow-hidden select-none'>
          <div className="bg-black opacity-80 inline-flex pr-1 rounded-xl mx-[10vw] sm:mx-[23.5vw] md:mx-[25vw] lg:mx-[30.5vw] xl:mx-[32.4vw] 2xl:mx-[33.5vw] my-[23vh] sm:my-[22vh] md:my-[23vh] xl:my-[25vh] 2xl:my-[25vh]">
            <div className="p-2">
    
              <h3 className="text-4xl font-black text-white flex justify-center">LOGIN</h3>
    
              <form onSubmit={handleLogin}>
                <div className="mb-3 mx-[2vw] sm:ml-[4vw] md:ml-[2vw] lg:ml-[3vw] xl:ml-[2vw]">
                  <label className="text-white font-medium text-xl" htmlFor='email' >Email:</label><br />
                  <input id='email' type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-[60vw] sm:w-[40vw] lg:w-[30vw] h-[5vh] font-medium rounded-md" placeholder="Enter Your Email Address" required  />
                </div>
    
                <div className="mb-3 mx-[2vw] sm:ml-[4vw] md:ml-[2vw] lg:ml-[3vw] xl:ml-[2vw]">
                  <label className="text-white font-medium text-xl" htmlFor='password' >Password:</label><br />
                  <input id='password' type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-[60vw] sm:w-[40vw] lg:w-[30vw] h-[5vh] font-medium rounded-md" placeholder="Enter a Password" required  />
                </div>
    
                <br />
    
                <div className="mb-5 mx-[2vw] sm:ml-[4vw] md:ml-[2vw] lg:ml-[3vw] xl:ml-[2vw]">
                  <button type='submit' className='text-lg sm:text-2xl font-semibold bg-white rounded-full w-full'>Login</button>
                </div>
              </form>
    
              <br className="2xl:block hidden" />
              <hr className="mt-5 mx-4 sm:mx-[6vw] md:mx-[3vw]" />
    
              <p className="text-white ml-[5vw] md:ml-[4vw] lg:ml-[3vw] sm:my-[1.6vh] xl:my-[3vh] 2xl:text-xl 2xl:my-[4vh]">
                Don't have an Account? 
                <Link to="/register" className='pl-2'>
                  Create Account.
                </Link>
              </p>
            </div>
          </div>
          <ToastContainer position="top-right" autoClose={5000} theme="dark" />
        </div>
      )
}

export default Login;