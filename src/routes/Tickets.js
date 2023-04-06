import React from 'react'
import { IoIosSend } from 'react-icons/io'

const Tickets = () => {
  return (
    <div className='tickets-container p-10 h-full w-full'>
         <h1 className='justify-start text-2xl font-bold pl-56 text-[#121212]'>Create Ticket</h1>

         <div className='form-container pl-56'>
         <form className='pt-10'>
            <label class="block">
              <span class="block text-xl font-medium text-[#121212]">Subject:</span>
              <input type="email" class="p-5 w-full rounded-lg drop-shadow-lg"/>
              <p class="mt-2 invisible peer-invalid:visible text-pink-600 text-sm" id='error-message'>
                Please provide a subject
              </p>
            </label>
            <label class="block">
              <span class="block text-xl font-medium text-[#121212]">Priority Level:</span>
                <select name='priority' className='p-2 rounded-lg drop-shadow-lg'>
                  <option value="waiting">Waiting</option>
                  <option value="urgen">Urgent</option>

                </select>
            </label>
            <label class="block pt-10">
              <span class="block text-xl font-medium text-[#121212]">Concern:</span>
              <textarea className='w-full h-48 p-5 drop-shadow-lg rounded-lg'>

              </textarea>
            </label>
          </form>

          <button className='flex item-center text-center p-4  bg-[#8338EC] text-white font-bold rounded-lg mt-4'>
            <IoIosSend className='' size={22}/> Send
          </button>
         </div>
    </div>
  )
}

export default Tickets
