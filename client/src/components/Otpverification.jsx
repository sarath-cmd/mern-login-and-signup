import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'
import axios from 'axios'; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Otpverification = () => {
  const [otp, setOtp] = useState();
  const navigate = useNavigate()
  const location = useLocation(); 
  const { email } = location.state;

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/Otpverification', {
        email,
        EO: otp
      });
      if(response.status === 200) {
        navigate('/login', {replace:'true'})
        toast.success('Registeration Successful');
      }
    } catch (error) {
      console.log(error)
      toast.error('Internal server error');
    }
  }


  return (
    <section className='overscroll-none select-none'>
      <div className='flex justify-center overflow-hidden h-[100vh] otpimg'>
        <div className='w-[75vw] mt-[25vh] sm:w-[50vw] md:w-[40vw] lg:w-[35vw] xl:w-[30vw] 2xl:w-[35vw] '>
          <div className='bg-gray-300 rounded-xl'>
            <h1 className='text-xl font-bold py-[5%] flex justify-center xl:text-3xl'>
              OTP Verification
            </h1>
            <p className='text-xs my-[2%] text-center lg:text-sm'>
              The OTP has been sent to your registered email
            </p>
            <p className='my-[2%] flex justify-center lg:text-lg'>
              Please enter the code below
            </p>

            <div className='flex justify-center'>
              <input
                type='number'
                className='w-[50%] p-2 m-[0.5%] mb-[5%] bg-slate-400 text-center sm:m-[3%] sm:mb-[5%] xl:m-[4%] xl:mb-[5%] '
                onChange={(e) => setOtp(e.target.value)}
              />
            </div>
            <div className='flex justify-center'>
              <button className='px-5 py-2 mb-5 rounded bg-slate-400 font-black text-2xl' onClick={(e) => handleSubmit(e)}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={5000} theme="dark" />
    </section>
  );
};

export default Otpverification;
