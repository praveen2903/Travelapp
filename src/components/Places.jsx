import React from 'react'
import img2 from '../assets/image-2.jpg'
import img3 from '../assets/image-3.jpg'
import desert from '../assets/desert.jpg'
import city from '../assets/city.jpg'
import img from '../assets/image.jpg'
import doha from '../assets/doha.jpg'
import img8 from '../assets/image-8.jpg'
import img7 from '../assets/image-7.jpg'
import safari from '../assets/safari_desert.jpg'
import img4 from '../assets/image-4.jpg'
import museum1 from '../assets/national-mesuem 1.jpg'
import airport from '../assets/qatar-ariways.jpg'
import { AiFillStar } from 'react-icons/ai'

export default function Places() {
  return (
    <>    
        <div className='bg-[#1e293b] w-full m-auto px-5 py-3'>
            <div className='w-full xl:w-1/2 m-auto text-center my-10 space-y-5 text-white'>
                <h1 className='text-4xl font-bold'>Places not to miss</h1>
                <p className='text-sm'>
                Qatar has one of the world's largest reserves of petroleum and natural gas and employs large numbers of foreign workers in its production process. Because of its oil wealth, the country's residents enjoy a high standard of living and a well-established system of social services.
                </p>
            </div>
            <div className='grid grid-row s-2 grid-flow-col gap-4 w-full h-[300px] ms:h-[450px] pb-10'>
                <div className='row-span-1 col-span-2'>
                    <img className='w-full h-full object-cover rounded-md' src={img2} alt='/'/>
                </div>
                <div className='row-span-1 col-span-2'>
                    <img className='w-full h-full object-cover rounded-md' src={img3} alt='/'/>
                </div>
                <div className='row-span-1 col-span-2'>
                    <img className='w-full h-full object-cover rounded-md' src={desert} alt='/'/>
                </div>
                <div className='row-span-1 col-span-2'>
                    <img className='w-full h-full object-cover rounded-md' src={city} alt='/'/>
                </div>
                <div className='row-span-1 col-span-2'>
                    <img className='w-full h-full object-cover rounded-md' src={img} alt='/'/>
                </div>
                <div className='row-span-1 col-span-2'>
                    <img className='w-full h-full object-cover rounded-md' src={doha} alt='/'/>
                </div>
            </div>
            <div className='my-10 text-center'>
                <h1 className='text-4xl font-bold text-white'>Our Recommendation</h1>
                <section className='grid md:grid-cols-3 xl:grid-cols-5 grid-cols-2 gap-10 my-10 justify-items-center items-center '>
                    <div className='drop-shadow-2xl text-left rounded space-y-2 bg-white hover:bg-[#5ea5fc] shadow-xl my-2 hover:scale-75 duration-500'>
                        <img className='w-full h-1/2 object-cover rounded-t-lg' src={img8} alt='/' />
                        <div className='p-4 space-y-4'>
                            <div className='flex justify-between'>
                                <p className='text-sm text-red-400'>Desert</p>
                                <p className='font-bold'>$500</p>
                            </div>
                            <p className='font-semibold justify-content'>
                            A desert is a barren area of landscape where little precipitation occurs and, consequently, living conditions are hostile for plant and animal life. The lack of vegetation exposes the unprotected surface of the ground to denudation
                            </p>
                            <div className='flex justify-between items-center'>
                                <h2>15 days tour</h2>
                                <p className='flex items-center space-x-2 text-orange-400'>
                                    <AiFillStar/>
                                    <span>4.8</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='drop-shadow-2xl text-left rounded space-y-2 bg-white hover:bg-[#5ea5fc] shadow-xl my-2 hover:scale-75 duration-500'>
                        <img className='w-full h-1/2 object-cover rounded-t-lg' src={img3} alt='/' />
                        <div className='p-4 space-y-4'>
                            <div className='flex justify-between'>
                                <p className='text-sm text-red-400'>Alkoot</p>
                                <p className='font-bold'>$50</p>
                            </div>
                            <p className='font-semibold justify-content'>
                            Al Koot Fort was built in 1880 by the Ottomans as a police post. It was built on a slight elevation in the proximity of a dry waterbed known as Wadi. This waterbed used by locals would trade a variety of goods, primarily livestock.
                            </p>
                            <div className='flex justify-between items-center'>
                                <h2>2 days tour</h2>
                                <p className='flex items-center space-x-2 text-orange-400'>
                                    <AiFillStar/>
                                    <span>4.9</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='drop-shadow-2xl text-left rounded space-y-2 bg-white hover:bg-[#5ea5fc] shadow-xl my-2 hover:scale-75 duration-500'>
                        <img className='w-full h-1/2 object-cover rounded-t-lg' src={img2} alt='/' />
                        <div className='p-4 space-y-4'>
                            <div className='flex justify-between'>
                                <p className='text-sm text-red-400'>U-tower</p>
                                <p className='font-bold'>$50</p>
                            </div>
                            <p className='font-semibold'>
                            This latest development project along the Doha Canal will feature a couple of curved forming a “U” shape as they appear to slant towards each other. The upcoming J One Towers is a project of RKM Durar Properties, one of Doha tower.
                            </p>
                            <div className='flex justify-between items-center'>
                                <h2>1 day tour</h2>
                                <p className='flex items-center space-x-2 text-orange-400'>
                                    <AiFillStar/>
                                    <span>4.7</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='drop-shadow-2xl text-left rounded space-y-2 bg-white hover:bg-[#5ea5fc] shadow-xl my-2 hover:scale-75 duration-200'>
                        <img className='w-full h-1/2 object-cover rounded-t-lg' src={img7} alt='/' />
                        <div className='p-4 space-y-4'>
                            <div className='flex justify-between'>
                                <p className='text-sm text-red-400'>Souq Waqif</p>
                                <p className='font-bold'>$100</p>
                            </div>
                            <p className='font-semibold'>
                            Souq Waqif is a marketplace in Doha, in Qatar. The souq sells traditional garments. It is also home to restaurants. The original building dates back to the late 19th to early 20th centuries in a traditional Qatari architectural style.
                            </p>
                            <div className='flex justify-between items-center'>
                                <h2>15 days tour</h2>
                                <p className='flex items-center space-x-2 text-orange-400'>
                                    <AiFillStar/>
                                    <span>4.8</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='drop-shadow-2xl text-left rounded space-y-2 bg-white hover:bg-[#5ea5fc] shadow-xl my-2 hover:scale-75 duration-500'>
                        <img className='w-full h-1/2 object-cover rounded-t-lg' src={doha} alt='/' />
                        <div className='p-4 space-y-4'>
                            <div className='flex justify-between'>
                                <p className='text-sm text-red-400'>Doha</p>
                                <p className='font-bold'>$800</p>
                            </div>
                            <p className='font-semibold'>
                            Doha is the capital city and main financial hub of Qatar. Located on the Persian Gulf coast in the east of the country, north of Al Wakrah and south of Al Khur, it is home to most of the country's population.<br/><br/>
                            </p>
                            <div className='flex justify-between items-center'>
                                <h2>3 days tour</h2>
                                <p className='flex items-center space-x-2 text-orange-400'>
                                    <AiFillStar/>
                                    <span>4.8</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='drop-shadow-2xl text-left rounded space-y-2 bg-white hover:bg-[#5ea5fc] shadow-xl my-2 hover:scale-75 duration-500'>
                        <img className='w-full h-1/2 object-cover rounded-t-lg' src={city} alt='/' />
                        <div className='p-4 space-y-4'>
                            <div className='flex justify-between'>
                                <p className='text-sm text-red-400'>City</p>
                                <p className='font-bold'>$1000</p>
                            </div>
                            <p className='font-semibold items-center'>
                            Doha city, capital of Qatar, located on the east of the Qatar Peninsula in the Gulf. More than two-fifths of Qatar's population lives within the city's limits. Situated on a shallow bay indented about Doha has long been important port
                            </p>
                            <div className='flex justify-between items-center'>
                                <h2>3 days tour</h2>
                                <p className='flex items-center space-x-2 text-orange-400'>
                                    <AiFillStar/>
                                    <span>5.0</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='drop-shadow-2xl text-left rounded space-y-2 bg-white hover:bg-[#5ea5fc] shadow-xl my-2 hover:scale-75 duration-500'>
                        <img className='w-full h-1/2 object-cover rounded-t-lg' src={img4} alt='/' />
                        <div className='p-4 space-y-4'>
                            <div className='flex justify-between'>
                                <p className='text-sm text-red-400'>Hotels</p>
                                <p className='font-bold'>$100</p>
                            </div>
                            <p className='font-semibold justify-content'>
                            Qatar is one of the most luxury-minded countries in the world, Doha has accommodations to suit every taste: Luxurious hotels offer stunning views of the Arabian Gulf and world-class dining, stylish business hotels showcase the best in business travel.
                            </p>
                            <div className='flex justify-between items-center'>
                                <h2>Daily</h2>
                                <p className='flex items-center space-x-2 text-orange-400'>
                                    <AiFillStar/>
                                    <span>4.8</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='drop-shadow-2xl text-left rounded space-y-2 bg-white hover:bg-[#5ea5fc] shadow-xl my-2 hover:scale-75 duration-500'>
                        <img className='w-full h-1/2 object-cover rounded-t-lg' src={safari} alt='/' />
                        <div className='p-4 space-y-4'>
                            <div className='flex justify-between'>
                                <p className='text-sm text-red-400'>Safari</p>
                                <p className='font-bold'>$350</p>
                            </div>
                            <p className='font-semibold'>
                            A desert is a barren area of landscape where little precipitation occurs and, consequently, living conditions are hostile for plant and animal life. The lack of vegetation exposes the unprotected surface of the ground to denudation
                            </p>
                            <div className='flex justify-between items-center'>
                                <h2>10 days tour</h2>
                                <p className='flex items-center space-x-2 text-orange-400'>
                                    <AiFillStar/>
                                    <span>4.9</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='drop-shadow-2xl text-left rounded space-y-2 bg-white hover:bg-[#5ea5fc] shadow-xl my-2 hover:scale-75 duration-500'>
                        <img className='w-full h-1/2 object-cover rounded-t-lg' src={museum1} alt='/' />
                        <div className='p-4 space-y-4'>
                            <div className='flex justify-between'>
                                <p className='text-sm text-red-400'>Museum</p>
                                <p className='font-bold'>$10</p>
                            </div>
                            <p className='font-semibold justify-content'>
                            gallery spaces has all the senses in telling the story of this nation and its people. The Park at the National Museum of Qatar includes artwork, a garden.Geography of Qatar while evoking the history and culture of the nation.
                            </p>
                            <div className='flex justify-between items-center'>
                                <h2>1 day tour</h2>
                                <p className='flex items-center space-x-2 text-orange-400'>
                                    <AiFillStar/>
                                    <span>4.6</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='drop-shadow-2xl text-left rounded space-y-2 bg-white hover:bg-[#5ea5fc] shadow-xl my-2 hover:scale-75 duration-500'>
                        <img className='w-full h-1/2 object-cover rounded-t-lg' src={airport} alt='/' />
                        <div className='p-4 space-y-4'>
                            <div className='flex justify-between'>
                                <p className='text-sm text-red-400'>Airport</p>
                                <p className='font-bold'>$2000</p>
                            </div>
                            <p className='font-semibold'>
                                Airport has various flights from qatar to all parts of countries and major cites and the location qatar is enjoyable safelty reach to your destination with your family.<br/><br/><br/>Thank You and Visit again
                            </p>
                            <div className='flex justify-between items-center'>
                                <h2>Destination</h2>
                                <p className='flex items-center space-x-2 text-orange-400'>
                                    <AiFillStar/>
                                    <span>5.0</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </>
  )
}
