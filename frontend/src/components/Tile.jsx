import React from 'react'

function Tile(props) {
    return (
        <div className='rounded-xl bg-blue-400  flex-column border-black border-2'
            style={{
                width: '350px',
                height: '350px'
            }}
        >
            <img src="" alt="" />
            <p>{props.text}</p>
        </div>
    )
}

export default Tile