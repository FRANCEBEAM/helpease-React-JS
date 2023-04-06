import React from 'react'

import { FaTrash } from 'react-icons/fa';


const Dashboard = () => {
  return (
    <div className='dashboard-container p-10 relative -z-50 h-full w-full'>
      <h1 className='justify-start text-2xl font-bold pl-56'>Dashboard</h1>

      <div className='ticket-container pl-56 pr-20 '>

        <div className='card flex justify-between p-10 items-center bg-white rounded-lg mt-10 drop-shadow-lg'>
          <div className='details'>
            <div className='badge bg-[#FFBE0B] w-20 text-center items-center text-white rounded-md font-bold'>WAITING</div>
            <div className='subject text-xl font-bold pt-2'>
                Subject: <span className='text-base font-normal'>Untagging for purchase</span>
            </div>
            <div className='text-sm font-normal mt-7'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
          </div>
      
          <div className='action ml-10'>
            <FaTrash className='text-[#DC3545]' size={26}/>
          </div>
        </div>

        <div className='card flex justify-between p-10 items-center bg-white rounded-lg mt-10 drop-shadow-lg'>
          <div className='details'>
            <div className='badge bg-[#FF006E] w-20 text-center items-center text-white rounded-md font-bold'>URGENT</div>
            <div className='subject text-xl font-bold pt-2'>
                Subject: <span className='text-base font-normal'>Untagging for purchase</span>
            </div>
            <div className='text-md font-normal mt-7'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
          </div>
      
          <div className='action ml-10'>
            <FaTrash className='text-[#DC3545]' size={26}/>
          </div>
        </div>

        <div className='card flex justify-between p-10 items-center bg-white rounded-lg mt-10 drop-shadow-lg'>
          <div className='details'>
            <div className='badge bg-[#FFBE0B] w-20 text-center items-center text-white rounded-md font-bold'>WAITING</div>
            <div className='subject text-xl font-bold pt-2'>
                Subject: <span className='text-base font-normal'>Untagging for purchase</span>
            </div>
            <div className='text-md font-normal mt-7'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
          </div>
      
          <div className='action ml-10'>
            <FaTrash className='text-[#DC3545]' size={26}/>
          </div>
        </div>

        <div className='card flex justify-between p-10 items-center bg-white rounded-lg mt-10 drop-shadow-lg'>
          <div className='details'>
            <div className='badge bg-[#FF006E] w-20 text-center items-center text-white rounded-md font-bold'>URGENT</div>
            <div className='subject text-xl font-bold pt-2'>
                Subject: <span className='text-base font-normal'>Untagging for purchase</span>
            </div>
            <div className='text-md font-normal mt-7'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
          </div>
      
          <div className='action ml-10'>
            <FaTrash className='text-[#DC3545]' size={26}/>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Dashboard
