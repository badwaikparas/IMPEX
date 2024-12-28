import React, { useEffect, useRef, useState } from 'react'

export const Count = ({ count, content }) => {
    const counterRef = useRef(null);
    const [counter, setCounter] = useState(0);
    const [isVisible, setIsVisible] = useState(0);
    useEffect(() => {
        const observer = new IntersectionObserver((entries, observer) => {
            const entry = entries[0];
            // console.log('entry', entry);
            // console.log('entry.isIntersecting', entry.isIntersecting);
            setIsVisible(entry.isIntersecting)
        });
        observer.observe(counterRef.current)
    }, [])

    useEffect(() => {
        if (!isVisible) {
            setCounter(0);
        } else {
            const val = setTimeout(() => {
                if (counter < count) {
                    setCounter(c => c + 1)
                }
                else {
                    clearInterval(val)
                }
            }, [Math.floor(3000 / count)])
            return () => clearInterval(val)
        }
    }, [isVisible, count, counter])
    return (
        <div ref={counterRef}
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}
            className='p-4'
        >
            <h1 className='text-6xl countlim:text-8xl'
                style={{
                    // fontSize: '7rem',
                    color: 'white',
                    // lineHeight: '7rem'
                }}
            >
                {counter}+
            </h1>
            <p className='text-lg countlim:text-xl'
                style={{
                    // fontSize: '2rem',
                    color: 'white'
                }}
            >{content}</p>
        </div>
    )
}
