import React from 'react'

function ShowGallery() {
    return (
        <>
            <div className='flex justify-center gap-48 pb-10'>
                <div className="px-5">
                    <h1 className="font-big-shoulders text-6xl font-bold uppercase pb-5">
                        your day at <br /> the gallery
                    </h1>
                    <p className="font-outfit text-2xl max-w-[300px]">
                        Wander through our distinct collections and find new insights about our artists. Dive into the details of their creative process.
                    </p>
                </div>
                <div className="">
                    <img src="https://i.imgur.com/iXYdjez.jpg" alt="" srcset="" className='w-full'/>
                </div>
            </div>
            <div className="flex justify-center w-full pb-20">
                <div className="grid grid-cols-2 gap-10">
                    <img src="https://i.imgur.com/DWNoZRU.jpg" alt="" srcset="" className='h-full'/>
                    <div className="grid grid-cols-1 gap-y-4">
                        <img src="https://i.imgur.com/DPoIE2h.jpg" alt="" srcset="" className='w-full object-cover'/>
                        <div className="bg-black-grayish text-white py-16 px-14">
                            <h1 className="font-big-shoulders uppercase font-bold text-6xl pb-5">Come & Be <br /> Inspired</h1>
                            <p className="text-2xl font-outfit w-[350px]">We're excited to welcome you to our gallery and see how our collections influence you.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default ShowGallery