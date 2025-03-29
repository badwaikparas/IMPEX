import React from 'react'

function CompanyTile({ content, text, img }) {
    return (
        <div className='card relative bg-transparent'>
            <div className='flex justify-center items-center rounded-xl bg-blue-950  flex-column border-black border-2'
                style={{
                    width: '300px',
                    height: '300px'
                }}
            >
                <p className='p-3 font-roboto text-white'>{content}</p>
            </div>
            <div className='absolute rounded-xl border-black border-2 flex flex-col justify-center items-center hover:opacity-0'
                style={{
                    background: 'white',
                    zIndex: 2,
                    translate: '0% -100%',
                    width: '300px',
                    height: '300px'
                }}
            >
                <div>
                    <img src={img} alt="loading image..." style={{
                        filter: 'grayscale(100%)',
                        height: '168px',
                        // width: '165px'
                    }} />
                </div>
                <p className='font-bold text-wrap px-5 text-center'>
                    {text}
                </p>
            </div >
        </div>
    )
}

export default CompanyTile