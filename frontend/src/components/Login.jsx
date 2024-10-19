import React from 'react'
import {Navbar} from './Navbar'
import {Link} from 'react-router-dom'
export const Login = () => {
  return (
    <>
      <Navbar name={"Login"}/>
       <div className='w-[100vw] h-[100vh] bg-[#f8f8f8] flex justify-center items-center'>
        <div className='h-auto  rounded-lg flex flex-col justify-center items-center  border-2 border-black shadow-xl shadow-green-400 z-20 p-3 '>
          <p>LOGIN</p>
          <input type="text" className='p-3 m-3 rounded-lg border-2 border-black ' placeholder='Email'/>
          <input type="text" className='p-3 m-3 rounded-lg border-2 border-black' placeholder='Password'/>
          <div className='flex  w-[100%] pl-2'><Link to="/register"><p>new user?</p></Link></div>
          <Link to='/home'><button className='border-2 rounded-lg p-2 m-2 bg-blue-800 text-white'> LOGIN</button></Link>
        </div>
       </div>
    </>
  )
}

export default Login