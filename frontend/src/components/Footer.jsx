import React from 'react'
import facebook from '../assets/square-facebook-brands-solid.svg'
import instagram from '../assets/square-instagram-brands-solid.svg'
import Xcom from '../assets/square-x-twitter-brands-solid (1).svg'
import youtube from '../assets/square-youtube-brands-solid (1).svg'
import linkedin from '../assets/linkedin-brands-solid.svg'
import logo from '../assets/LOGO2.png'
import phone from '../assets/phone-solid.svg'
import email from '../assets/envelope-solid.svg'

function Footer() {
    return (
        <>
            <div className='bg-slate-800 p-10 text-white rounded-lg flex justify-start flex-wrap items-start' style={{
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
                {/* <div className='hidden pb-10 footerlim:block' style={{
                    width: '60%',
                    flexGrow: 1
                }}>
                    <h1 className='font-semibold'>Our Vision</h1>
                    <p className=' text-3xl'>At Company our passion is growing creative buisness through Creativity, Investment and Enterprise to accelerate yourbusiness and go global</p>
                </div> */}
                {/* </div> */}
                {/* <div className='flex gap-2 justify-between'> */}
                {/* <div className='hidden footerlim:block'>
                    <h1>For</h1>
                    <div className='font-volaroid flex flex-col gap-3'>
                        <p style={{ color: '#c7638d' }}>FASHION</p>
                        <p style={{ color: '#3ca3a2' }}>FILM</p>
                        <p style={{ color: '#3372c5' }}>DESIGN</p>
                        <p style={{ color: '#d4b25d' }}>NEW MEDIA</p>
                        <p>MUSIC</p>
                    </div>
                </div> */}
                {/* <div> */}
                {/* <h1>Services</h1>
                    <div className='grid-cols-2'>
                        <ul>
                            <li><a href="">Buisness Development</a></li>
                            <li><a href="">Monitoring</a></li>
                            <li><a href="">Stock Hire</a></li>
                            <li><a href="">Investing</a></li>
                            <li><a href="">Hi1</a></li>
                        </ul>
                    </div> */}
                {/* </div> */}
                {/* <div>
                    <h1>ABOUT US</h1>
                    <div>
                        <ul>
                            <li><a href="">hi1</a></li>
                            <li><a href="">hi2</a></li>
                            <li><a href="">hi3</a></li>
                        </ul>
                    </div>
                </div> */}
                {/* <div className='flex flex-col gap-4'> */}
                <div className='w-fit'>
                    <h1 className='text-2xl'>Contact Us</h1>
                    <div className='flex justify-between my-4 gap-9 flex-wrap'>
                        <div className='font-thin'>
                            <p>104, Shree Ambey Complex,</p>
                            <p>Floor 2 Rajma  Building,</p>
                            <p>Wardhaman Nagar,</p>
                            <p>Maharashtra, India</p>
                        </div>
                        <div>
                            {/* <p className='text-2xl footerlim2:text-4xl'> */}
                            <div className='flex gap-3'>
                                <img className='w-5' src={phone} alt="" />
                                <p> +91 9890596000</p></div>
                            <div className='flex gap-3'>
                                <img className='w-5' src={email} alt="" />
                                <p>info@starorigin.in</p>
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

            {/* </div> */}
            {/* </div > */}
        </>
    )
}

export default Footer


