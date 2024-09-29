import React from 'react'

function CompanyTile({ content, text, img }) {
    return (
        <div className='relative'>
            <div className='flex justify-center items-center rounded-xl bg-blue-950  flex-column border-black border-2'
                style={{
                    width: '350px',
                    height: '350px'
                }}
            >
                <p className='p-3 font-roboto text-white'>{content}</p>
            </div>
            <div className='absolute rounded-xl border-black border-2 flex flex-col justify-center items-center hover:opacity-0'
                style={{
                    background: 'white',
                    zIndex: 2,
                    translate: '0% -100%',
                    width: '350px',
                    height: '350px'
                }}
            >
                <div>
                    <img src={img} alt="loading image..." />
                </div>
                <p className=''>
                    {text}
                </p>
            </div >
        </div>
    )
}

export default CompanyTile