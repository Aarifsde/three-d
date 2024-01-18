import React from 'react'
import {Link} from 'react-scroll'

const Navbar = () => {
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-blue-100 text-black shadow-lg'> 
      <h1 className='text-3xl font-black cursor-pointer'><Link to='hero' smooth={true} duration={500}>THREE-<span className='text-sky-600'>D</span></Link></h1>
      <div>
        <ul className='flex text-black'>
            <li>
               <Link to='About' smooth={true} duration={500}>About us</Link> 
            </li>
            <li>
               <Link to='Projects' smooth={true} duration={500}>Our work</Link>
            </li>
            <li>
               <Link to='Contact' smooth={true} duration={500}>Contact us</Link>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
