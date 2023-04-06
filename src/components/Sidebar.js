import React from 'react'
import { Link } from 'react-router-dom'
import { SiAnydesk } from 'react-icons/si'
import { TbBoxMultiple } from 'react-icons/tb'
import { VscInbox } from 'react-icons/vsc'
import { FiLogOut } from 'react-icons/fi'

const Sidebar = () => {
  return (
    <div className='bg-[#ffffff] h-full p-4 fixed drop-shadow-md'> 
        <div className='logo flex'>
          <SiAnydesk className='helpease-logo' size={34} color="#8338EC" />
          <h1 className='text-[#212224] text-2xl font-bold ml-3'>
            HELPEASE
          </h1>
        </div>
        <ul className='justify-center'>
          <li className='flex font-bold text-black text-sm pt-10 justify-center'>
            <figure className='pr-4'>
              <img src='./images/userprofile.jpg' width={47}/>
            </figure>
            <p>Ray an Fuentes <label className='flex font-normal'>ITD</label></p>
          </li>
          
          <Link to="/Dashboard" className='flex align font-medium text-md mt-20 text-[#212224] hover:bg-[#E9F1FF] hover:text-[#0055ff] ease-out duration-700 p-4 rounded-xl'> 
          <TbBoxMultiple className='mr-4 text-[#545454]' size={30}/> Dashboard
          </Link>
          <Link to="/Tickets" className='flex align font-medium text-md mt-3 text-[#212224] hover:bg-[#E9F1FF] hover:text-[#0055ff] ease-out duration-700 p-4 rounded-xl'> <VscInbox className='mr-4 text-[#545454]'size={30}/>tickets</Link>
        </ul>

        <div className='bottom-0 absolute'>
        <Link className=' mb-4 w-full flex align font-medium text-md mt-3 text-[#212224] hover:bg-[#E9F1FF] hover:text-[#0055ff] ease-out duration-700 p-4 rounded-xl'> <FiLogOut className='mr-4 text-[#545454]'size={30}/>Logout</Link>
        </div>
    </div>
  )
}

export default Sidebar
