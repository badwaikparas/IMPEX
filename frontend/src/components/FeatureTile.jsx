import React from 'react'

function FeatureTile({ text, img }) {
    return (
        <div className='flex flex-col  justify-arond items-center rounded-xl bg-white border-black border-2'
            style={{
                width: '350px',
                height: '350px',
                // backgroundImage: `url(${img})`
            }}
        >
            <img src={img} alt="loading image" style={{
                height: '270px',
                width: '270px'
            }} />
            <p className='font-bold  text-2xl p-3'>{text}</p>
        </div>
    )
}

export default FeatureTile