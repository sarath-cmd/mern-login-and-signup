import React from 'react'
import '../style/Bgimage.css'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Register() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate()

  const handleRegister = async (e) => {
      e.preventDefault()
      try {
        const response = await axios.post('http://localhost:3000/register', {
          name,
          email,
          password,
          confirmPassword,
        });
        console.log(response)
        if (response.status === 200) {
          toast.success('Registration successful!');
          navigate('/otpverification', { replace: true })
        }
      } catch (error) {
        if (error.response) {
          const errorMessage = error.response.data; // Extract the error message
          toast.error(errorMessage); // Display the error message to the user
        } else {
          console.error("An error occurred:", error.message);
        }
      }
    };

  return (
    <div id="background" className='h-[100vh] w-[100vw] overscroll-none overflow-hidden '>
      <div className="bg-black opacity-80 inline-flex pr-1 rounded-xl mx-[10vw] sm:mx-[23.5vw] md:mx-[25vw] lg:mx-[30.5vw] xl:mx-[32.4vw] 2xl:mx-[33.5vw] my-[12.5vh] sm:my-[13vh] xl:my-[15vh] 2xl:my-[18vh] grid-cols-2">
        <div className="p-2">

          <h3 className="text-4xl font-black text-white flex justify-center">SIGNUP</h3>
          <form onSubmit={handleRegister}>
            <div className="mb-3 mx-[2vw] sm:ml-[4vw] md:ml-[2vw] lg:ml-[3vw] xl:ml-[2vw]">
              <label className="text-white font-medium text-xl" htmlFor='username' >User Name:</label><br />
              <input id='username' type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-[60vw] sm:w-[40vw] lg:w-[30vw] h-[5vh] font-medium rounded-md " placeholder="Enter a UserName" required />
            </div>

            
            <div className="mb-3 mx-[2vw] sm:ml-[4vw] md:ml-[2vw] lg:ml-[3vw] xl:ml-[2vw]">
              <label className="text-white font-medium text-xl" htmlFor='email' >Email:</label><br />
              <input id='email' type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-[60vw] sm:w-[40vw] lg:w-[30vw] h-[5vh] font-medium rounded-md" placeholder="Enter Your Email Address" required  />
            </div>

            
            <div className="mb-3 mx-[2vw] sm:ml-[4vw] md:ml-[2vw] lg:ml-[3vw] xl:ml-[2vw]">
              <label className="text-white font-medium text-xl" htmlFor='password' >Password:</label><br />
              <input id='password' type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-[60vw] sm:w-[40vw] lg:w-[30vw] h-[5vh] font-medium rounded-md" placeholder="Enter a Password" required  />
            </div>

            <div className="mb-8 mx-[2vw] sm:ml-[4vw] md:ml-[2vw] lg:ml-[3vw] xl:ml-[2vw]">
              <label className="text-white font-medium text-xl" htmlFor='passwordcheck' >Password Confirm:</label><br />
              <input id='passwordcheck' type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="w-[60vw] sm:w-[40vw] lg:w-[30vw] h-[5vh] font-medium rounded-md" placeholder="Enter a Password" required  />
            </div>

            <div className="mb-5 mx-[2vw] sm:ml-[4vw] md:ml-[2vw] lg:ml-[3vw] xl:ml-[2vw]">
              <button type='submit' className='text-lg sm:text-2xl font-semibold bg-white rounded-full w-full'>Create Account</button>
            </div>
          </form>

          <br className="2xl:block hidden" />
          <hr className="mt-5 mx-4 sm:mx-[6vw] md:mx-[3vw]" />

          <p className="text-white ml-[5vw] md:ml-[4vw] lg:ml-[3vw] sm:my-[1.6vh] xl:my-[3vh] 2xl:text-xl 2xl:my-[4vh]">
            Already have an account?
            <Link to="/login" className='pl-2'>
              Login.
            </Link>
          </p>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={5000} theme="dark" />
    </div>
  )
}

export default Register;  