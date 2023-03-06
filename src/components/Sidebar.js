import React from 'react'
import { Link } from 'react-router-dom'
import { SiAnydesk } from 'react-icons/si'
import { TbBoxMultiple } from 'react-icons/tb'
import { VscInbox } from 'react-icons/vsc'
import { FiLogOut } from 'react-icons/fi'

const Sidebar = () => {
  return (
    <div className='bg-[#ffffff] h-full p-4 absolute'> 
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
            <p>Ray ann Fuentes <label className='flex font-normal'>ITD</label></p>
          </li>
          
          <Link className='flex align font-medium text-xl mt-40 text-[#212224] hover:bg-[#E9F1FF] hover:text-[#0055ff] ease-out duration-700 p-6 rounded-xl'> 
          <TbBoxMultiple className='mr-4 text-[#545454]' size={30}/> Dashboard
          </Link>
          <Link className='flex align font-medium text-xl mt-3 text-[#212224] hover:bg-[#E9F1FF] hover:text-[#0055ff] ease-out duration-700 p-6 rounded-xl'> <VscInbox className='mr-4 text-[#545454]'size={30}/>tickets</Link>
        </ul>

        <ul className='flex bottom-0 justify-center absolute mb-7'>
        <Link className='flex align font-medium text-xl text-[#212224] hover:bg-[#E9F1FF] hover:text-[#0055ff] ease-out duration-700 p-6 rounded-xl'> <FiLogOut className='mr-4 text-[#545454]'size={30}/>Logout</Link>
        </ul>
    </div>
  )
}

export default Sidebar
