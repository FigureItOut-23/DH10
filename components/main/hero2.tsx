import React from 'react'

const BackGround = () => {
    return (
        <div className='relative flex flex-col h-full w-full'>
            <video
            autoPlay
            muted
            loop
            className='rotate-180 absolute top-[-340px] left-0 z-[1] w-full h-full object-cover'
            >
                <source src='/bg2.mp4' type='video/mp4'/>
            </video>
        </div>
    )
}

export default BackGround