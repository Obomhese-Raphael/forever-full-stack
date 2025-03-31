import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const Footer = () => {
  return (
    <div className=''>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div className="">
            <img src={assets.logo} className='mb-5 w-32' alt="" />
            <p className='w-full md:w-2/3 text-gray-600'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. In ea odit sunt neque aperiam, excepturi omnis!
            </p>
        </div>
        <div className="">
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className="">
            <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+1-123-456-7890</li>
                <li>johndoe@foreveryou.com</li>
            </ul>
        </div>
      </div>
      <div className="">
        <hr />
        <p className='text-center text-gray-800 text-sm py-5'>
            &copy; 2025 Forever. All rights reserved.
        </p>
      </div>
    </div>
  )
}

export default Footer
