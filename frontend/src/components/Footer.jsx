// import React from 'react'
// import facebook from '../assets/square-facebook-brands-solid.svg'
// import instagram from '../assets/square-instagram-brands-solid.svg'
// import Xcom from '../assets/square-x-twitter-brands-solid (1).svg'
// import youtube from '../assets/square-youtube-brands-solid (1).svg'
// import logo from '../assets/logo.png'
// function Footer() {
//     return (
//         <>
//             <div className='bg-slate-800 p-10 text-white rounded-lg grid' style={{
//                 gridTemplateColumns: '20% auto auto',
//                 gap: '25px 100px'
//             }}>
//                 {/* <div> */}
//                 <div className='border-slate-500 border-b-2'>
//                     <img src={logo} alt="Company logo" className='w-20 rounded-lg' />
//                 </div>
//                 <div className='border-slate-500 border-b-2 pb-10'>
//                     <h1 className='font-semibold'>Our Vision</h1>
//                     <p className='font-cholla text-3xl'>At Company our passion is growing creative buisness through Creativity, Investment and Enterprise to accelerate yourbusiness and go global</p>
//                 </div>
//                 <div className='border-slate-500 border-b-2'>
//                     <h1>Social</h1>
//                     <div className='flex justify-start items-center gap-6 my-5'>
//                         <a href="" className=''>
//                             <img src={facebook} alt="facebook" className='w-8' />
//                         </a>
//                         <a href="">
//                             <img src={instagram} alt="instagram" className='w-8' />
//                         </a>
//                         <a href="">
//                             <img src={Xcom} alt="X.com" className='w-8' />
//                         </a>
//                         <a href="">
//                             <img src={youtube} alt="youtube" className='w-8' />
//                         </a>
//                     </div>
//                 </div>
//                 {/* </div> */}
//                 {/* <div className='flex gap-2 justify-between'> */}
//                 <div>
//                     <h1>For</h1>
//                     <div className='font-volaroid flex flex-col gap-3'>
//                         <p style={{ color: '#c7638d' }}>FASHION</p>
//                         <p style={{ color: '#3ca3a2' }}>FILM</p>
//                         <p style={{ color: '#3372c5' }}>DESIGN</p>
//                         <p style={{ color: '#d4b25d' }}>NEW MEDIA</p>
//                         <p>MUSIC</p>
//                     </div>
//                 </div>
//                 <div className='grid grid-cols-2'>
//                     <div>
//                         <h1>Services</h1>
//                         <div className='grid-cols-2'>
//                             <ul>
//                                 <li><a href="">Buisness Development</a></li>
//                                 <li><a href="">Monitoring</a></li>
//                                 <li><a href="">Stock Hire</a></li>
//                                 <li><a href="">Investing</a></li>
//                                 <li><a href="">Hi1</a></li>
//                             </ul>
//                         </div>
//                     </div>
//                     <div>
//                         <h1>ABOUT US</h1>
//                         <div>
//                             <ul>
//                                 <li><a href="">hi1</a></li>
//                                 <li><a href="">hi2</a></li>
//                                 <li><a href="">hi3</a></li>



//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//                 <div className='flex flex-col gap-4'>
//                     <div>
//                         <h1>CONTACT US</h1>
//                         <p className='font-cholla text-4xl'> +91 07 3337 7801</p>
//                         <p className='font-cholla text-4xl'>info@creativeenterprise.com</p>
//                     </div>

//                     <div>
//                         <h2>Creative Industries Enterprise Center</h2>
//                         <p>Floor 2 Rajma  Building</p>
//                         <p>Sitabuldi, Nagpur</p>
//                         <p>Maharastra, India</p>
//                     </div>
//                 </div>

//                 {/* </div> */}
//             </div>
//         </>
//     )
// }

// export default Footer

// function Footer() {
//     return (
//         <>
//             <div className='bg-slate-800 p-10 text-white rounded-lg flex flex-wrap' style={{
//                 gap: '25px 100px'
//             }}>
//                 {/* <div> */}
//                 <div className='border-slate-500 border-b-2 pb-10'>
//                     <img src={logo} alt="Company logo" className='w-20 rounded-lg' />
//                 </div>
//                 <div className='border-slate-500 border-b-2 pb-10' style={{
//                     width: '700px'
//                 }}>
//                     <h1 className='font-semibold'>Our Vision</h1>
//                     <p className='font-cholla text-3xl'>At Company our passion is growing creative buisness through Creativity, Investment and Enterprise to accelerate yourbusiness and go global</p>
//                 </div>
//                 <div className='border-slate-500 border-b-2'>
//                     <h1>Social</h1>
//                     <div className='flex justify-start items-center gap-6 my-5'>
//                         <a href="" className=''>
//                             <img src={facebook} alt="facebook" className='w-8' />
//                         </a>
//                         <a href="">
//                             <img src={instagram} alt="instagram" className='w-8' />
//                         </a>
//                         <a href="">
//                             <img src={Xcom} alt="X.com" className='w-8' />
//                         </a>
//                         <a href="">
//                             <img src={youtube} alt="youtube" className='w-8' />
//                         </a>
//                     </div>
//                 </div>
//                 {/* </div> */}
//                 {/* <div className='flex gap-2 justify-between'> */}
//                 <div>
//                     <h1>For</h1>
//                     <div className='font-volaroid flex flex-col gap-3'>
//                         <p style={{ color: '#c7638d' }}>FASHION</p>
//                         <p style={{ color: '#3ca3a2' }}>FILM</p>
//                         <p style={{ color: '#3372c5' }}>DESIGN</p>
//                         <p style={{ color: '#d4b25d' }}>NEW MEDIA</p>
//                         <p>MUSIC</p>
//                     </div>
//                 </div>
//                 <div className='grid grid-cols-2'>
//                     <div>
//                         <h1>Services</h1>
//                         <div className='grid-cols-2'>
//                             <ul>
//                                 <li><a href="">Buisness Development</a></li>
//                                 <li><a href="">Monitoring</a></li>
//                                 <li><a href="">Stock Hire</a></li>
//                                 <li><a href="">Investing</a></li>
//                                 <li><a href="">Hi1</a></li>
//                             </ul>
//                         </div>
//                     </div>
//                     <div>
//                         <h1>ABOUT US</h1>
//                         <div>
//                             <ul>
//                                 <li><a href="">hi1</a></li>
//                                 <li><a href="">hi2</a></li>
//                                 <li><a href="">hi3</a></li>



//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//                 <div className='flex flex-col gap-4'>
//                     <div>
//                         <h1>CONTACT US</h1>
//                         <p className='font-cholla text-4xl'> +91 07 3337 7801</p>
//                         <p className='font-cholla text-4xl'>info@creativeenterprise.com</p>
//                     </div>

//                     <div>
//                         <h2>Creative Industries Enterprise Center</h2>
//                         <p>Floor 2 Rajma  Building</p>
//                         <p>Sitabuldi, Nagpur</p>
//                         <p>Maharastra, India</p>
//                     </div>
//                 </div>

//                 {/* </div> */}
//             </div>
//         </>
//     )
// }

// export default Footer


import React from 'react'
import facebook from '../assets/square-facebook-brands-solid.svg'
import instagram from '../assets/square-instagram-brands-solid.svg'
import Xcom from '../assets/square-x-twitter-brands-solid (1).svg'
import youtube from '../assets/square-youtube-brands-solid (1).svg'
import logo from '../assets/logo.png'

function Footer() {
    return (
        <>
            <div className='bg-slate-800 p-10 text-white rounded-lg flex flex-wrap gap-6'>
                <div className='w-full sm:w-auto border-slate-500 border-b-2 pb-6'>
                    <img src={logo} alt="Company logo" className='w-20 rounded-lg' />
                </div>
                <div className='w-full sm:flex-1 border-slate-500 border-b-2 pb-6'>
                    <h1 className='font-semibold'>Our Vision</h1>
                    <p className='text-lg sm:text-2xl'>At Company, our passion is growing creative business through Creativity, Investment, and Enterprise to accelerate your business and go global.</p>
                </div>
                <div className='w-full sm:w-auto border-slate-500 border-b-2 pb-6'>
                    <h1>Social</h1>
                    <div className='flex justify-start items-center gap-4 mt-4'>
                        <a href="#">
                            <img src={facebook} alt="facebook" className='w-8' />
                        </a>
                        <a href="#">
                            <img src={instagram} alt="instagram" className='w-8' />
                        </a>
                        <a href="#">
                            <img src={Xcom} alt="X.com" className='w-8' />
                        </a>
                        <a href="#">
                            <img src={youtube} alt="youtube" className='w-8' />
                        </a>
                    </div>
                </div>

                <div className='w-full sm:w-auto'>
                    <h1>For</h1>
                    <div className='font-volaroid flex flex-col gap-3 mt-4'>
                        <p style={{ color: '#c7638d' }}>FASHION</p>
                        <p style={{ color: '#3ca3a2' }}>FILM</p>
                        <p style={{ color: '#3372c5' }}>DESIGN</p>
                        <p style={{ color: '#d4b25d' }}>NEW MEDIA</p>
                        <p>MUSIC</p>
                    </div>
                </div>
                <div className='w-full sm:w-auto grid grid-cols-2 gap-6'>
                    <div>
                        <h1>Services</h1>
                        <ul className='mt-4'>
                            <li><a href="#">Business Development</a></li>
                            <li><a href="#">Monitoring</a></li>
                            <li><a href="#">Stock Hire</a></li>
                            <li><a href="#">Investing</a></li>
                            <li><a href="#">Consulting</a></li>
                        </ul>
                    </div>
                    <div>
                        <h1>ABOUT US</h1>
                        <ul className='mt-4'>
                            <li><a href="#">Company Info</a></li>
                            <li><a href="#">Our Team</a></li>
                            <li><a href="#">Careers</a></li>
                        </ul>
                    </div>
                </div>
                <div className='w-full sm:w-auto flex flex-col gap-4'>
                    <div>
                        <h1>CONTACT US</h1>
                        <p className='text-xl'>+91 07 3337 7801</p>
                        <p className='text-xl'>info@creativeenterprise.com</p>
                    </div>
                    <div>
                        <h2>Creative Industries Enterprise Center</h2>
                        <p>Floor 2 Rajma Building</p>
                        <p>Sitabuldi, Nagpur</p>
                        <p>Maharashtra, India</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
