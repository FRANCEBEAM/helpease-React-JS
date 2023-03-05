import React from 'react'
import { AiOutlineUser } from 'react-icons/ai'
import { AiOutlineLock } from 'react-icons/ai'
import './SignIn.css'

const SignIn = () => {
  return (
    <div>
      <section className='signin-section'>
        <div className='signin-container px-4'>
        {/* Left Content */}
          <div className='left-content'>
            {/* Start of Head Content */}
            <div className='head-content pt-36'>
              <h1 className='font-bold text-3xl text-center text-[#212224] flex align-middle m-auto'>Welcome Back!  <img className="ml-2" src="./images/wavehand.png" width={36}/></h1>
              <p className='text-[#787878] text-center text-sm mt-4'>By signing in, you'll be able to access our help desk support services, view the status of your support tickets, and communicate with our support team.</p>
            </div>
            {/* End of Head Content */}

            {/* Start of form */}
            <div className='form-content pt-16'>
              <form>
                <div className='input-field'>
                  <AiOutlineUser className='user-icon'size={24}/>
                  <input class="block w-full border-2 rounded-md border-[#747474] p-3" placeholder='Username' />
                </div>
                
                <div className='input-field'>
                  <AiOutlineLock className='pass-icon'size={24}/>
                  <input class="block w-full border-2 rounded-md border-[#747474] p-3" placeholder='Password' />
                </div>
                
              </form>

              <button className="bg-[#8338EC] text-white font-bold block w-full p-4 mt-14 rounded-md hover:bg-[#4d1a96] transition-duration-700 ease-in-out focus:outline-none focus:ring focus:ring-violet-400 text-lg">Sign In</button>
            </div>
            {/* End of form */}
          </div>
          {/* End of Head Content */}
          
          {/* Start of right Content */}
          <div className='right-content'>
            <figure className='figure-img'>
              <img src="./images/techsupport-img.svg" />
              <figcaption className='figure-caption pt-7'>
                <h1 className='font-bold text-2xl text-[#212224]'>
                  We provide technical support and assistance to individuals.
                </h1>
                <p className='text-sm mt-5 text-[#787878]'>
                  Thank you for choosing our HelpDesk support website - we're here to help you with your technical issues!
                </p>
              </figcaption>
            </figure>

            
            
          </div>
          {/* End of Head Content */}


        </div>
      </section>
    </div>
  )
}

export default SignIn
