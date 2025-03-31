import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const Contact = () => {
  return (
    <div className=''>
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>
      <div className="flex my-10 flex-col justify-center md:flex-row gap-10 mb-28">
        <img src={assets.contact_img} className='w-full md:max-w-[480px]' alt="" />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className='font-semibold text-xl text-gray-600'>Our Store</p>
          <p className='text-gray-500'>123 Fashion Avenue, Suite 456 <br /> Style District, Washington, United States</p>
          <p className='text-gray-500'>Tel:  +1 (555) 123-4567 <br /> Email: admin@forever.com </p>
          <p className='font-semibold text-xl text-gray-600'>Careers at Forever</p>
          <p className="text-gray-500">Learn more about our teams and job openings</p>
          <button className='border border-black py-4 px-4 text-sm hover:bg-black hover:text-white transition-all cursor-pointer duration-500'>Explore Jobs</button>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  )
}

export default Contact
