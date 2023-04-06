import React from 'react'
import { FaFacebookSquare } from 'react-icons/fa'
import { BsInstagram, BsTwitter } from 'react-icons/bs'
function Footer() {
    return (
        <div className='bg-black-grayish text-white flex justify-between px-32 py-16'>
            <div className="text-2xl uppercase font-big-shoulders font-bold">Modern <br /> Art Gallery</div>
            <div className="font-outfit text-2xl text-center w-[600px]">The Modern Art Gallery is free to all visitors and open seven days a week from 8am to 9pm. Find us at 99 King Street, Newport, USA.
            </div>
            <div className="flex gap-5 text-2xl">
                <FaFacebookSquare />
                <BsInstagram />
                <BsTwitter />
            </div>
        </div>
    )
}

export default Footer