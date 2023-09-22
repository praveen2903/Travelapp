import React from 'react'
import { AiFillFacebook, AiFillInstagram, AiFillTwitterSquare, AiOutlineMessage, AiOutlinePhone, AiOutlineWhatsApp } from 'react-icons/ai'
import {FaAppStore, FaGooglePlay} from 'react-icons/fa'

export default function Footer() {
  return (
    <div>
        <footer className='bg-[#10b981] w-full  py-2 px-10'>
            <div className='md:flex md:justify-between sm:grid sm:grid-cols-2 sm:justify-center items-center'>
                <div className='space-y-5 py-5 border-b'>
                    <h1 className='text-3xl font-bold'>QatarDairies</h1>
                    <div className='flex-space-x-5'>
                        <AiFillFacebook size={"1.5rem"}/>
                        <AiFillInstagram size={"1.5rem"}/>
                        <AiFillTwitterSquare size={"1.5rem"}/>
                        <AiOutlineWhatsApp size={'1.5rem'}/>
                    </div>
                    <div className='flex items-center space-x-2'>
                        <AiOutlinePhone/>
                        <p>+91 7569522435</p>
                    </div>
                    <div className='flex items-center space-x-2'>
                        <AiOutlineMessage/>
                        <p>+91 7569522435</p>
                    </div>
                </div>
                <div className='flex flex-col space-y-3'>
                    <h1 className='font-bold'>Travel</h1>
                    <a className='text-xs text-gray-100 hover:text-blue-800' href='/'>About us</a>
                    <a className='text-xs text-gray-100 hover:text-blue-800' href='/'>Blog</a>
                    <a className='text-xs text-gray-100 hover:text-blue-800' href='/'>Services</a>
                    <a className='text-xs text-gray-100 hover:text-blue-800' href='/'>Contact us</a>
                </div>
                <div className='flex flex-col space-y-3'>
                    <h1 className='font-bold'>Agreement</h1>
                    <a className='text-xs text-gray-100 hover:text-blue-800' href='/'>Pricing</a>
                    <a className='text-xs text-gray-100 hover:text-blue-800' href='/'>Policy</a>
                    <a className='text-xs text-gray-100 hover:text-blue-800' href='/'>Rules</a>
                    <a className='text-xs text-gray-100 hover:text-blue-800' href='/'>Agreement</a>
                </div>
                <div className='flex flex-col space-y-3'>
                    <h1 className='font-bold'>More Items</h1>
                    <a className='text-xs text-gray-100 hover:text-blue-800' href='/'>Our Storty</a>
                    <a className='text-xs text-gray-100 hover:text-blue-800' href='/'>Affiliate</a>
                    <a className='text-xs text-gray-100 hover:text-blue-800' href='/'>Faqs</a>
                    <a className='text-xs text-gray-100 hover:text-blue-800' href='/'>Privacy Policy</a>
                </div>
                <button className='flex items-center space-x-4 text-left px-5 py-1 border rounded-md'>
                    <FaAppStore size={'1.5rem'}/>
                    <h1>
                        <p className='text-xs font-bold'>Open On</p>
                        <span className='font-bold'>App Store</span>
                    </h1>
                </button>
                <button className='flex items-center space-x-4 text-left px-5 py-1 border rounded-md'>
                    <FaGooglePlay size={'1.5rem'}/>
                    <h1>
                        <p className='text-xs font-bold'>Open On</p>
                        <span className='font-bold'>Google Play Store</span>
                    </h1>
                </button>

            </div>
        </footer>
    </div>
  )
}
