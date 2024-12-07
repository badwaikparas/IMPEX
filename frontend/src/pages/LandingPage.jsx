import React, { useEffect, useRef, useState } from 'react'; // Removed duplicate `useEffect` import
import Wall from '../assets/Wall.jpg';
import Tile from '../components/CompanyTile';
import TileContent from '../data/FeatureTile';
import background from '../assets/CompanyCount.jpeg';
import Faq from '../components/Faq';
import Footer from '../components/Footer';
import Bot from '../components/Bot';
import ZoomImage from '../components/ZoomImage';
import { Count } from '../components/Count';
import FeatureTile from '../components/FeatureTile';
import CompanyTile from '../components/CompanyTile';
import FeatureTileContent from '../data/FeatureTile';
import CompanyTileContent from '../data/CompanyTile';
import Navbar from '../components/Navbar';
import countData from '../data/CountData';

import aboutUSBg from '../assets/AboutUsbgs/1.avif'
// import aboutUSBg from '../assets/AboutUsbgs/8.jpg'

import bg from '../assets/Wall.jpg'


function LandingPage() {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);
    const [count4, setCount4] = useState(0);

    const [email, setEmail] = useState("");

    const [counterIsVisible, setCounterIsVisible] = useState(false);

    const reqDemoRef = useRef(null);
    const aboutUsRef = useRef(null);
    const counterRef = useRef(null);

    const threshold1 = 50;
    const threshold2 = 1000;
    const threshold3 = 5;
    const threshold4 = 4;

    return (
        <>
            <Bot />

            <div className='absolute w-full h-full -z-10'
                style={{
                    background: `url(${bg})`,
                    backgroundSize: 'cover'

                }}
            >

            </div>
            <div className=' w-full h-screen overflow-scroll'
                style={{
                    scrollbarWidth: 'none'
                }}
            >
                <Navbar ref1={reqDemoRef} ref2={aboutUsRef} />
                <ZoomImage />

                <div ref={aboutUsRef} className='flex justify-center flex-col bg-repeat'
                    style={{
                        position: 'relative',
                        overflow: 'hidden',
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        flexDirection: 'column',
                    }}
                >
                    <div className='overflow-hidden'>
                        <div className=' h-full absolute bg-repeat'
                            style={{
                                position: 'absolute',
                                top: '0',
                                left: '0',
                                height: '100%',
                                width: '300%',
                                background: `url(${aboutUSBg}) repeat-x`,
                                animation: 'slide 100s linear infinite',
                                zIndex: '-1',
                            }}
                        ></div>
                    </div>

                    <span className="m-[10%] backdrop-blur-sm p-5 border border-white border-opacity-40 rounded-xl md:px-16 md:py-5 md:m-[0%]">
                        <div className='font-extrabold text-3xl text-center underline mt-4 mb-7'>About Us</div>
                        <div>
                            Shiply empowers your business growth through streamlined and efficient management of daily operations. Our comprehensive import-export software simplifies tasks with:
                        </div>
                        <ul className=' m-5 grid grid-cols-1  list-disc md:grid-cols-2 md:px-5'
                            style={{
                                gap: '0 54px'
                            }}
                        >
                            <li style={{}}>    One-click report generation</li>
                            <li style={{}}>    Intuitive dashboards with multi-analytics</li>
                            <li style={{}}>    Automated processes</li>
                            <li style={{}}>    Effortless management & much more</li>
                            <li style={{}}>    Simplifying daily tasks</li>

                        </ul>
                        <div>By minimizing unnecessary details and maximizing insights, Shiply frees up your time to focus on high-priority areas, optimizing your efforts and amplifying returns</div>

                    </span>
                </div >


                {/* //_                                   What Company Does */}
                <div
                    className='backdrop-blur-sm p-0 bg-transparent'
                    style={{
                        width: '100%',
                        padding: '100px 0',
                        // margin: '0 0 -25px 0'
                    }}
                >

                    <div className='text-center text-white bg-transparent mb-10'
                        style={{
                            fontSize: '60px',
                        }}
                    >
                        Company Services
                    </div>
                    <div className='bg-transparent'
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fill, 350px)',
                            justifyContent: 'center',
                            gap: '45px 45px',
                        }}
                    >
                        {CompanyTileContent.map((tile, index) => (
                            <CompanyTile text={tile.title} key={index} content={tile.content} img={tile.img} />
                        ))}
                    </div>
                </div>


                {/* </div > */}

                {/* //_                                   Video */}
                {/* < div className='flex justify-center items-center mx-auto'
                    style={{
                        padding: '10% 0',
                        width: '56.25%',
                        height: '56.29%'
                    }}
                >
                    <iframe width="1080" height="608"
                        src="https://www.youtube.com/embed/QYFG0xP12yE?si=eUjMaIrk0-P0e-5R" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen
                        className='rounded-2xl'
                    >
                    </iframe>
                </div > */}


                {/* //  _                                   Count */}
                < div
                    className='rounded-3xl flex flex-wrap z-10'
                    style={{
                        backgroundImage: `url(${background})`,
                        height: "auto",
                        display: 'flex',
                        padding: '50px',
                        justifyContent: 'space-around'
                    }}
                    ref={counterRef}
                >
                    {
                        countData.map((countData) => (
                            <Count key={countData.id} count={countData.count} content={countData.content} />
                        ))

                    }
                </div >


                {/* //_                                   Features */}
                <div
                    className='backdrop-blur-sm p-0 '
                    style={{
                        width: '100vw',
                        padding: '100px 0',
                        margin: '-20px 0 0 0'
                    }}
                >

                    <div className='text-white text-center bg-transparent mb-10'
                        style={{
                            fontSize: '60px',
                        }}
                    >
                        Features
                    </div>
                    <div className='bg-transparent'
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fill, 350px)',
                            justifyContent: 'center',
                            gap: '45px 45px',
                        }}
                    >

                        {FeatureTileContent.map((tile, index) => (
                            <FeatureTile text={tile.title} key={index} img={tile.img} />
                        ))}
                    </div>
                </div>


                {/* //_                                   FAQ */}
                <Faq />


                {/* //_                                   Request Demo */}


                <div className='flex flex-col justify-center items-center bg-white mx-auto my-10 md:my-20 w-10/12' style={{
                    // width: '80%',
                    // margin: '7% auto',
                    boxShadow: '5px 5px 20px 2px #AAAAAA',
                    padding: '5% 10%',
                }} ref={reqDemoRef}>
                    <h1 className='text-3xl font-extrabold'>Interested in Learning More?</h1>
                    <p className='text-sm'>Learn how we can meet the unique needs of your trading or recycling business with an online demonstration tailored to your specific areas of interest.</p>
                    <div className='m-10 w-full flex flex-wrap justify-center items-center gap-2'>
                        <input
                            type="email"
                            placeholder='Email'
                            value={email}
                            className='p-5 border-slate-700 border-2'
                            style={{ width: '80%' }}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <button
                            className='p-5'
                            type='submit'
                            style={{
                                background: '#053049',
                                color: 'white',
                                fontWeight: 'bolder',
                                fontSize: 'large',
                                width: 'auto',
                            }}
                            onClick={async () => {
                                fetch(`${import.meta.env.VITE_BACKEND_URL}email`, {
                                    method: "POST",
                                    headers: {
                                        "Content-Type": "application/json",
                                    },
                                    body: JSON.stringify({ email: email })
                                })
                            }}
                        >
                            Request Demo
                        </button>
                    </div>
                </div>
                {/* //_                                   Footer */}
                <Footer />
            </div>



        </>
    );
}

export default LandingPage;
