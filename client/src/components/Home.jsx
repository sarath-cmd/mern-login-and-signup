import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h1 className='inline-block ml-[2%] text-2xl font-medium mt-[2%]'>Home</h1>
      <Link to='./login'>
        <button className='absolute top-0 right-0 mr-[25vw] mt-[2%] font-bold border-solid border-2 px-[2%] py-[1%] border-black text-lime-400 rounded-full bg-black sm:mr-[15%] lg:mr-[13%] xl:mr-[12%] 2xl:mr-[11%] lg:px-[1.55] lg:py-[0.5%]'>
          Login
        </button>
      </Link>
      <Link to='./register'>
        <button className='absolute top-0 right-0 mr-[2%] mt-[2%] font-bold border-solid border-2 px-[2%] py-[1%] border-black rounded-full bg-lime-400 lg:px-[1.55] lg:py-[0.5%]'>
          Signup
        </button>
      </Link>
    </div>
  )
}

export default Home