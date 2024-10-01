import React from 'react';
import logo from '../assets/logo.png';

function Navbar() {
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
                <img src={"logo"} alt="Company Logo" className='w-20 rounded-2xl' />
            </div>
            <div className='text-white'>
                <ul
                    className='list-none flex text-2xl font-bold justify-evenly items-center'
                    style={{ width: "700px" }}
                >
                    <li className='p-2 rounded-lg hover:bg-black hover:bg-opacity-30 cursor-pointer'>
                        Pricing
                    </li>
                    <li className='p-2 rounded-lg hover:bg-black hover:bg-opacity-30 cursor-pointer'>
                        About Us
                    </li>
                    {/* <li className='p-2 rounded-lg hover:bg-black hover:bg-opacity-30 cursor-pointer'>
                        hi3
                    </li>
                    <li className='p-2 rounded-lg hover:bg-black hover:bg-opacity-30 cursor-pointer'>
                        hi4
                    </li> */}
                    <li className='cursor-pointer'>
                        <div className='px-3 py-2 bg-blue-400 rounded-2xl text-white hover:bg-blue-500 transition duration-200'>
                            Request Demo
                        </div>
                    </li>
                </ul>
            </div >
        </nav >
        // <>
        // </>
    );
}

export default Navbar;
