import React from 'react'

const Home = () => {
  return (
   
      <div className='container1'>
        <div className='child1'>
          <div className='child2'>
            <div className='child3'>
              <p className="child4">Find a gift for your wife or girlfriend</p>
              <p className='para'>Struggling to find a gift or girlfriend? No problem!</p>
              <a className="btn">Find Gift Now</a>
            </div>
          </div>
          <div className="child2">
            <img src="https://giftstore.netlify.app/assets/images/Background.png" className="h-[100%] w-[100%]"  />
          </div>
        </div>
        <div className="child00"  style={{display: 'flex',  flexWrap:"wrap"}}>
          <div className="child2">
            <img src="https://giftstore.netlify.app/assets/images/Media.png" className="h-[100%] w-[100%]" />
          </div>
          <div className=" child2 child1 ">
            <div className="child3">
              <h1 className="child4" style={{fontSize:"50px",fontWeight:"bold"}}>How we work</h1>
              <p className='para'>We’ve actually already asked hundreds of women what they want, and made a database with results. All you have to do is take our short survey that only takes seconds, and our proprietary algorithm will match you with a few perfect gift options.</p>
              <a  class="btn1">Learn More </a>
            </div>
          </div>
        </div>
      </div>
 
  )
}

export default Home