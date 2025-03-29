import React from 'react'
import facebook from '../assets/square-facebook-brands-solid.svg'
import instagram from '../assets/square-instagram-brands-solid.svg'
import Xcom from '../assets/square-x-twitter-brands-solid (1).svg'
import youtube from '../assets/square-youtube-brands-solid (1).svg'
import linkedin from '../assets/linkedin-brands-solid.svg'
import logo from '../assets/Logo2.png'
import phone from '../assets/phone-solid.svg'
import email from '../assets/envelope-solid.svg'

function Footer({ ref1 }) {
    return (
        <div ref={ref1}>
            <div className='bg-slate-800 p-10 text-white rounded-lg flex flex-grow justify-start flex-wrap items-start' style={{
                gap: '25px 100px'
            }}>
                {/* <div> */}
                <div className=''>
                    <img src={logo} alt="Company logo" className='h-28 rounded-lg'
                        style={{
                            filter: 'invert(1)'
                        }}
                    />
                </div>
                <div className='w-fit'>
                    <h1 className='text-2xl'>Contact Us</h1>
                    <div className='flex justify-between my-4 gap-9 flex-wrap'>
                        <div className='font-thin'>
                            <p>Unit 2903 - X 3</p>
                            <p>Jumairah bay tower</p>
                            <p>Cluster X , Jlt</p>
                            <p>Dubai, UAE</p>
                        </div>
                        <div>
                            {/* <p className='text-2xl footerlim2:text-4xl'> */}
                            <div className='flex gap-3'>
                                <img className='w-5' src={phone} alt="" />
                                <p>+91 9923468000</p>
                            </div>
                            <div className='flex gap-3'>
                                <img className='w-5' src={email} alt="" />
                                <p>sales@starorigin.in</p>
                            </div>

                            {/* <p className='italic footerlim2:text-4xl'> */}

                        </div>
                    </div>

                </div>
                <div className=''>
                    <h1 className='text-2xl'>Social</h1>
                    <div className='flex justify-start items-center gap-6 my-5'>
                        <a href="https://www.facebook.com/starorigin.in" className=''>
                            <img src={facebook} alt="facebook" className='w-8' />
                        </a>
                        <a href="https://www.instagram.com/staroriginbs.in/">
                            <img src={instagram} alt="instagram" className='w-8' />
                        </a>
                        <a href="https://www.linkedin.com/company/starorigin-business-solutions/">
                            <img src={linkedin} alt="linkedin" className='w-8' />
                        </a>
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center bg-slate-800 text-white p-5'>
                Copyright 2025 | Starorigin LLC FZ
            </div>
        </div>
    )
}

export default Footer


