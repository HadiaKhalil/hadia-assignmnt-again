import React from 'react'

const Nav = () => {
  return (
    <div>
    <div className=' new max-w-[1240px] flex items-center py-[10px] justify-around max-auto '>
        <div>
        <img src="https://giftstore.netlify.app/assets/images/logo.png" alt="" />
        </div>
        <div className=' flex'>
            <ul style={{listStyle:'none', display:'flex', }} className='gap-9 text-[18px]' >
                <li>Home</li>
                <li>About Us</li>
                <li> Services</li>
                <li> Blogs</li>
            </ul>
        </div>
        <div className='' style={{border:"1px solid orange", height:"39px" ,
             width:"98px", textAlign:"center", fontSize:"20px"}}> <button>Gift Find</button></div>
    </div>
    </div>
  )
}

export default Nav