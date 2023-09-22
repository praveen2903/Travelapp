import React from 'react'
import museum from '../assets/mesuem.jpg'
import {AiOutlineSearch,AiFillFacebook,AiFillInstagram,AiFillTwitterCircle,AiFillPhone} from 'react-icons/ai'

export default function Header() {
  return (
    <>
        <div className='w-full h-screen relative'>
            <img src={museum} alt='' className='w-full h-full object-cover'/>
        </div>
        <nav className='w-full absolute top-0 p-5 flex justify-between text-white z-10'>
            <div>
                <h1 className='text-[#4ade80] text-3xl font-bold'>QatarDairies</h1>
            </div>
            <div>
                <ul className='flex space-x-5 text-sm font-bold'>
                    <li>Doha</li>
                    <li>Al Warkah</li>
                    <li>Al Rayyan</li>
                    <li>Al Kohr</li>
                </ul>
                <div className='flex items-center space-x-2 mt-5 text-gray-200'>
                    <AiOutlineSearch/>
                    <input className='bg-inherit text-xs borer-b border-gray-300 outline-0 p-1' type='text' placeholder='search'/>
                </div>
            </div>
        </nav>
        <div className='absolute top-0 h-screen flex flex-col space-y-10 justify-center items-center bg-black opacity-75 xl:w-1/3 sm:w-1/2 z-0'>
            <div className='text-white text-center space-y-5'>
                <h2 className='text-[#4f46e5] text-2xl font-bold'>DISCOVER</h2>
                <h1 className='text-[#b91c1c] text-5xl font-bold'>QATAR</h1>
                <p className='mx-10 text-[#f8fafc]'>
                Qatar is a peninsular Arab country whose terrain comprises arid desert and a long Persian (Arab) Gulf shoreline of beaches and dunes. Also on the coast is the capital, Doha, known for its futuristic skyscrapers and other ultramodern architecture inspired by ancient Islamic design, such as the limestone Museum of Islamic Art
                </p>
            </div>
            <div className='space-x-4'>
                <button className='bg-white py-2 px-5 rounded-md'>
                    RoadMap
                </button>
                <button className='text-white border py-2 px-5'>
                    Book a Trip
                </button>
            </div>
            <div className='text-white flex space-x-5'>
                <AiFillFacebook size={"2rem"} />
                <AiFillInstagram size={"2rem"}/>
                <AiFillTwitterCircle size={"2rem"}/>
            </div>
            <div className='text-white flex space-x-5'>
                <AiFillPhone size={"2rem"}/>
                <h3 className='font-bold'>+91 7569522435</h3>
            </div>
        </div>
        
    </>
    
  )
}
