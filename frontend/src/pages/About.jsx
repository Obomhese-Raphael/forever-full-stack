import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div className=''>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img src={assets.about_img} className='w-full max-w-[450px]' alt="" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>At FOREVER, we believe fashion should be effortless, sustainable, and expressive. Born from a passion for quality and style, we curate timeless pieces designed to elevate your everyday wardrobe.</p>
          <p>Every garment is crafted with care, blending premium materials with ethical practices. Whether you're dressing up or keeping it casual, our collections are made to inspire confidence and comfort.
          We&apos;re more than just clothing—we&apos;re a community. Thank you for supporting slow fashion and choosing pieces that last.
          </p>
          <b className='text-gray-800'>Our Mission</b>
          <p>To empower confident, conscious style by offering thoughtfully designed clothing that blends quality, sustainability, and affordability. We believe fashion should make you look good—and do good—without compromising the planet or your values.</p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance: </b>
          <p className='text-gray-600'>At <span className='font-semibold'>Forever</span>, we don&apos;t just sell clothes—we craft trust. Every stitch, fabric, and finish undergoes rigorous quality checks to ensure durability, comfort, and style that lasts. From sourcing to shipping, we hold ourselves to the highest standards so you can wear with confidence.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convinence: </b>
          <p  className='text-gray-600'>At <span className='font-semibold'>Forever</span>, we believe great style should come easy. That&apos;s why we&apos;ve stripped away the hassle—so you can focus on looking (and feeling) your best.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service: </b>
          <p className='text-gray-600'>At <span className='font-semibold'>Forever</span>, you're more than just an order number. We're committed to delivering white-glove service that matches the quality of our products.We don't just sell clothes—we build relationships.</p>
          <p className='font-semibold text-gray-600'>Your satisfaction is our signature.</p>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  )
}

export default About
