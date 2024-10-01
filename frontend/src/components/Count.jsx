import React from 'react'

export const Count = ({ count }) => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}
            className='p-4'
        >
            <h1 className=''
                style={{
                    fontSize: '7rem',
                    color: 'white',
                    lineHeight: '7rem'
                }}
            >
                {count}+
            </h1>
            <p
                style={{
                    fontSize: '2rem',
                    color: 'white'
                }}
            >Trusted by</p>
        </div>
    )
}
