import React, { useState } from 'react';
import { AiOutlineMenu } from "react-icons/ai";
const Navbar = () => {
  const [toggle, setToggle] = useState()
  return (

    <div>
      <header className='head'>
        <div className=' navbar flex justify-between p-0 m-0 font-gilroy-normal box-border'>
          <div className='img'>
            <img src="https://giftstore.netlify.app/assets/images/logo.png" alt="" />
          </div>
          <div className='parant    hidden md:flex text-[19px] '>
            <p className='p-5'>Home</p>
            <p className='p-5'>About Us</p>
            <p className='p-5'>Services</p>
            <p className='p-5'>Blogs</p>
          </div>
          <div className=' hidden1 hidden md:flex'   >
            <button>
              Gift Finder
            </button>
          </div>
          {
            toggle ?
              <AiOutlineMenu onClick={() => setToggle(!toggle)} className='text-5xl md:hidden block pt-6 ' />
              :
              <AiOutlineMenu onClick={() => setToggle(!toggle)} className='text-5xl md:hidden block pt-6 ' />
          }
          <div className={`div5 duration-300  md:hidden fixed w-full flex-col bg-black
             text-white ${toggle ? "left-[0]" : "left-[-100%]"} top-[100px]`}>
            <p className='p-3'>Home</p>
            <p className='p-3'>pbout Us</p>
            <p className='p-3'>Services</p>
            <p className='p-3'>Blogs</p>
          </div>
        </div>
      </header>
    </div>
  )
}
export default Navbar