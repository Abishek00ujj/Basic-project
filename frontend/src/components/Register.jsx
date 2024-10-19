import React from 'react'
import {Link} from 'react-router-dom'
import {Navbar} from './Navbar'
export const Register = () => {
  return (
    <>
    <Navbar name={"Register"}/>
    <div className='w-[100vw] h-[100vh] bg-[#f8f8f8] flex justify-center items-center'>
     <div className='max-w-sm min-w-sm h-auto  rounded-lg flex flex-col justify-center items-center  border-2 border-black shadow-xl shadow-green-400 z-20 p-3'>
       <p>REGISTER</p>
       <input type="text" className='p-3 m-3 rounded-lg border-2 border-black ' placeholder='Name'/>
       <div className='flex space-x-2'>
       <input type='radio'></input><label>Male</label>
       <input type='radio'></input><label>Female</label>
       </div>
       <input type="text" className='p-3 m-3 rounded-lg border-2 border-black' placeholder='Email'/>
       <input type="text" className='p-3 m-3 rounded-lg border-2 border-black' placeholder='Password'/>
       <input type="text" className='p-3 m-3 rounded-lg border-2 border-black' placeholder='Password'/>
       <input type="text" className='p-3 m-3 rounded-lg border-2 border-black' placeholder='Password'/>
       <input type="text" className='p-3 m-3 rounded-lg border-2 border-black' placeholder='Password'/>
       <div className='flex  w-[100%] pl-2'><Link to="/login"><p>existing user?</p></Link></div>
       <Link to='/home'><button className='border-2 rounded-lg p-2 m-2 bg-blue-800 text-white'>REGISTER</button></Link>
     </div>
    </div>
 </>
  )
}

export default Register