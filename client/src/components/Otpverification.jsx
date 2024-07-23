import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

const Otpverification = () => {
  const [otp, setOtp] = useState(new Array(4).fill(''));
  const inputRefs = useRef([])
  const navigate = useNavigate

  useEffect((index) => {
    if (inputRefs.current[index = 0]) {
      inputRefs.current[index].focus()
    }
  }, [])
  

  function handleOnChange(e, index) {
    const value = e.target.value
    if(/^[0-9]*$|^$/.test(value)) {
      const newOpt = [...otp]
      newOpt[index] = value.substring(value.length - 1)
      setOtp(newOpt)
      // the below line of code will move the focus from one box to another left to right
      if (index < 4 && !otp[index] && inputRefs.current[index + 1]) {
        inputRefs.current[index + 1].focus();
      }
    }
  }

  function handleOnClick(index) {
    inputRefs.current[index].setSelectionRange(1, 1)
    // now the above line will move the cursor to the end of the  because the starting and ending point
    // are after the first element
  }

  function handleOnKeyDown(e, index) {
    // the below line of code will move the focus from one box to another rigth to left
    if (e.key === "Backspace" && index > 0 && !otp[index] && inputRefs.current[index - 1]) {
      inputRefs.current[index - 1].focus();
    }

    navigate('/loginpage', {replace:'true'})
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
              {otp.map((value, index) => (
                <input
                  key={index}
                  type='text'
                  className='w-[50px] h-[50px] m-[0.5%] mb-[5%] bg-slate-400 text-center sm:m-[3%] sm:mb-[5%] xl:m-[4%] xl:mb-[5%] 2xl:w-[75px] 2xl:h-[75px] '
                  value={value}
                  onChange={(e) => handleOnChange(e ,index)}
                  ref={(input) => inputRefs.current[index] = input}
                  onKeyDown={(e) => handleOnKeyDown(e,index)}
                  onClick={() => handleOnClick(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Otpverification;
