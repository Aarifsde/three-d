import React from 'react'

const Contact = () => {
  return (
    <div name='Contact' className='bg-gradient-to-b from-white to-blue-200 w-full h-screen flex justify-center items-center p-4'>
      
        <form action="" className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-blue-500'>
            Contact us
          </p>
        </div>
        <input className='bg-[#ccd6f6] p-2 rounded-md' type="text" placeholder='Name' name='name' />
        <input className='my-4 p-2 bg-[#ccd6f6] rounded-md' type="email" placeholder='Email' name='email' />
        <textarea className='bg-[#ccd6f6] rounded-md p-2' name="message" rows="10" placeholder='Message'></textarea>
        <button className='text-white w-fit px-6 py-3 my-8 mx-auto flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500'>Let's Collaborate</button>
        </form>
      </div>
    
  )
}

export default Contact
