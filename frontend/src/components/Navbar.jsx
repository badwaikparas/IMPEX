import React, { useState } from 'react';
import logo from '../assets/logo.png';
import hamburger from '../assets/Icons/bars-solid.svg'

function Navbar({ ref1, ref2 }) {
    const [drop, setDrop] = useState(true);

    return (
        <nav
            className='absolute custom-container flex justify-between items-center w-full p-2 bg-transparent'
            style={{
                backdropFilter: 'blur(4px)',
                WebkitBackdropFilter: 'blur(4px)',
                boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.18)',
                borderRadius: '10px',
                border: '1px solid rgba(255, 255, 255, 0.18)',
                background: 'rgba(0, 0, 0, 0.15)'
            }}
        >
            <div>
                <img src={logo} alt="Company Logo" className='w-20 rounded-2xl' />
            </div>
            <div className='text-black'>
                <ul
                    className='list-none text-2xl font-bold justify-evenly items-center hidden navlim:flex'
                    style={{ width: "700px" }}
                >
                    <li className='p-2 rounded-lg hover:bg-black hover:bg-opacity-30 cursor-pointer'>
                        Pricing
                    </li>
                    <li className='p-2 rounded-lg hover:bg-black hover:bg-opacity-30 cursor-pointer' onClick={() => ref2.current ? ref2.current.scrollIntoView({ behavior: 'smooth' }) : null}>
                        About Us
                    </li>
                    <li className='cursor-pointer'>
                        <div className='px-3 py-2 bg-blue-400 rounded-2xl text-white hover:bg-blue-500 transition duration-200' onClick={() => ref1.current ? ref1.current.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' }) : null}>
                            Request Demo
                        </div>
                    </li>
                </ul>
                <div className='block navlim:hidden'>
                    <img
                        className='w-10 h-10'
                        src={hamburger}
                        alt="hamburger icon"
                        onClick={() => setDrop(c => !c)}
                        style={{ cursor: "pointer" }}
                    />
                    {drop && <div className=' rounded-lg absolute p-3 bg-white shadow-lg'
                        style={{
                            transform: 'translate(calc(-100% + 2.5rem), -0%)',
                            width: '150px',
                            height: 'auto'
                        }}>
                        <ul className='list-none'>
                            <li className='p-2 cursor-pointer border-b-2 border-slate-300'><a href="">Pricing</a></li>
                            <li className='p-2 cursor-pointer border-b-2 border-slate-300'><a href="">About Us</a></li>
                            <li className='p-2 cursor-pointer'><a href="">Request Demo</a></li>
                        </ul>
                    </div>}
                </div>

            </div >
        </nav >
        // <>
        // </>
    );
}

export default Navbar;
