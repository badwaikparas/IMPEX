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
        >
            <h1 className=''
                style={{
                    fontSize: '3rem',
                    color: 'white'
                }}
            >
                {count}+
            </h1>
            <p
                style={{
                    fontSize: '0.75rem',
                    color: 'white'
                }}
            >Trusted by</p>
        </div>
    )
}
