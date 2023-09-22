import React from 'react'
import safari from '../assets/safari_desert.jpg'
import city from '../assets/city.jpg'
import fort from '../assets/image-3.jpg'
import Ufort from '../assets/image-2.jpg'
import img33 from '../assets/image-4.jpg'

export default function Discover() {
  return (
    <div>
        <div className='w-4/5 xl:w-9/12 m-auto flex flex-col sm:flex-row space-y-10 md:space-x-10 justify-between items-center py-10'>
            <div className='w-[500px] space-y-5'>
                <img className='drop-shadow-2xl' src={safari} alt='/'/>
                <div>
                    <h2 className='font-bold'>Safari Desert</h2>
                    <h1 className='text-2xl font-bold'>Doha Travels</h1>
                </div>
                <p className='text-sm'>
                The desert safari provides about 20 minutes of exciting dune bashing along with an electrifying camp journey where you can enjoy quad biking, camel ride and sand skiing. Morning safari can vary according to your package tour. On average, some of the companies offer about 2-hour package journey.
                </p>
                <p className='text-sm'>
                The Thar Desert is certainly one of the most beautiful golden deserts in the world. Jaisalmer Sam Sand Dunes in the Thar Desert particularly ranks among the best destinations to go for desert safari in India.
                </p>
            </div>
            <div className='w-[500px] space-y-2 text-center'>
                <h2 className='font-semibold'>
                    Doha capital of Qatar
                </h2>
                <h1 className='font-bold text-2xl'>Qatar travelling</h1>
                <p className='text-sm'>
                Known for its spectacular modern buildings and cultural heritage, Doha has been recently named as one of the 7 New Wonder Cities in the World. Emerging as the most sought destination in the world, Doha also happens to be the financial capital of the Middle East that offers a surprise to each traveler.
                </p>
                <p className='text-sm'>
                Doha is the capital and most populous city of the State of Qatar. Doha has a population of 1,351,000 in the city proper with the overall population close to 1.5 million.
                </p>
                <img className='drop-shadow-2xl border-8 border-stones-700' src={city} alt='/'/>
            </div>
        </div>
        <div className='w-full h-[400px] my-10 relative'>
            <img className='w-full h-full object-cover' src={fort} alt='/'/>
            <div className='w-full h-full absolute top-0 flex justify-center items-center'>
                <h1 className='text-4xl text-white font-bold px-5 py-2 border'>View Details</h1>
            </div>
        </div>
        <div className='my-20 flex justify-between items-center h-[500px]'>
            <div className='xl:w-[500px] w-1/3'>
                <img className='w-full h-full object-cover' src={Ufort} alt='/'/>
            </div>
            <div className='xl:w-[500px] w-1/3 p-5 text-center space-y-5 sm:space-y-2'>
                <h1 className='md:text-xl sm:text-sm'>Alkoot</h1>
                <h2 className='md:text-4xl sm:text-base'>Fort in Doha</h2>
                <p className='ms:text-base sm:text-xs'>
                Al Koot Fort was built in 1880 by the Ottomans as a police post. It was built on a slight elevation in the proximity of a dry waterbed known as Wadi. This waterbed used by locals would trade a variety of goods, primarily livestock.
                </p>
                <button className='bg-blue-600 text-white mt-5 px-2 py-2 border border-black rounded'>Visit Now</button>
            </div>
            <div className='xl:w-[500px] w-1/3'>
                <img className='w-full h-full object-cover' src={img33} alt='/'/>
            </div>
        </div>
    </div>
  )
}
