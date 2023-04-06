import React from 'react'
import { FaFacebookSquare } from 'react-icons/fa'
import { BsInstagram, BsTwitter } from 'react-icons/bs'

function Location() {
    return (
        <div>
            <div className="">
                <img src="https://i.imgur.com/9bQq06x.png" alt="" srcset="" className='w-full' />
            </div>
            <div className="flex justify-between bg-black-grayish px-28 py-24">
                <h1 className="font-big-shoulders font-bold text-white text-6xl uppercase w-3/4">Our <br />Location</h1>
                <div className="text-white font-outfit text-2xl w-1/4">
                    <h2 className="text-goldish font-big-shoulders text-6xl font-bold">99 KING STREET</h2>
                    <p>Newport</p>
                    <br />
                    <p>RI 02840</p>
                    <br />
                    <p>United States of America</p>
                    <p className="">
                        Our newly opened gallery is located near the Edward King House on 99 King Street, the Modern Art Gallery is free to all visitors and open seven days a week from 8am to 9pm.
                    </p>
                </div>
            </div>
            <div className='bg-goldish text-black-grayish flex justify-between px-32 py-16'>
                <div className="text-2xl uppercase font-big-shoulders font-bold">Modern <br /> Art Gallery</div>
                <div className="font-outfit text-2xl text-center w-[600px]">The Modern Art Gallery is free to all visitors and open seven days a week from 8am to 9pm. Find us at 99 King Street, Newport, USA.
                </div>
                <div className="flex gap-5 text-2xl">
                    <FaFacebookSquare />
                    <BsInstagram />
                    <BsTwitter />
                </div>
            </div>
        </div>
    )
}

export default Location