import React from 'react'
import { Link } from "react-router-dom"

import { IoIosArrowForward } from 'react-icons/io'


function Hero() {
    return (
        <>
            <header className="relative flex mb-8">
                <div className="bg-black-grayish pl-[30%] h-[700px]">
                    <img className='h-full' src="https://i.imgur.com/kRzpW0v.jpg" alt="" srcset="" />
                </div>
                <div className="flex absolute justify-between xl:ml-[11%] xl:mt-[170px] xl:max-w-[350px] mt-8 mx-4 mb-28">
                    <h1 className='font-big-shoulders text-9xl font-bold uppercase text-white mr-[220px] w-[514px] mix-blend-difference'>Modern <br /> Art Gallery</h1>
                    <div className="mt-0 max-w-[350px]">
                        <p className="text-2xl font-outfit">The arts in the collection of the Modern Art Gallery all started from a spark of inspiration. Will these pieces inspire you? Visit us and find out.
                        </p>
                        <div className="group text-white bg-black-grayish flex justify-between items-center mt-8 w-[16rem] group-hover:bg-goldish">
                            <Link to="/Location" className='font-big-shoulders font-bold text-2xl tracking-wide uppercase p-5 '>Our Location</Link>
                            <div className="p-5 bg-goldish text-4xl group-hover:bg-black-grayish">
                                <IoIosArrowForward />
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            
        </>
    )
}

export default Hero