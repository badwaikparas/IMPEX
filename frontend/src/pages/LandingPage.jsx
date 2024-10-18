import React, { useEffect, useRef, useState } from 'react'; // Removed duplicate `useEffect` import
import Wall from '../assets/Wall.jpg';
import Tile from '../components/CompanyTile';
import TileContent from '../data/FeatureTile';
import background from '../assets/CompanyCount.jpeg';
import Faq from '../components/Faq';
import Footer from '../components/Footer';
import ZoomImage from '../components/ZoomImage';
import { Count } from '../components/Count';
import FeatureTile from '../components/FeatureTile';
import CompanyTile from '../components/CompanyTile';
import FeatureTileContent from '../data/FeatureTile';
import CompanyTileContent from '../data/CompanyTile';
import Navbar from '../components/Navbar';
import countData from '../data/CountData';

function LandingPage() {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);
    const [count4, setCount4] = useState(0);

    const [email, setEmail] = useState("");

    const [counterIsVisible, setCounterIsVisible] = useState(false);

    const reqDemoRef = useRef(null);
    const aboutUsRef = useRef(null);
    const counterRef = useRef();



    const threshold1 = 50;
    const threshold2 = 1000;
    const threshold3 = 5;
    const threshold4 = 4;

    useEffect(() => {
        const observer = new IntersectionObserver((entries, observer) => {
            const entry = entries[0];
            console.log('entry', entry);
            console.log('entry.isIntersecting', entry.isIntersecting);
            setCounterIsVisible(entry.isIntersecting)
        });
        observer.observe(counterRef.current)
    }, [])

    useEffect(() => {
        let intervalId;
        if (count1 < threshold1 && counterIsVisible) {
            intervalId = setInterval(() => {
                setCount1((c) => Math.min(c + 1, threshold1));
            }, 1000 / threshold1);
        }
        return () => clearInterval(intervalId);
    }, [count1, threshold1, counterIsVisible]);

    useEffect(() => {
        let intervalId;
        if (count2 < threshold2 && counterIsVisible) {
            intervalId = setInterval(() => {
                setCount2((c) => Math.min(c + 1, threshold2));
            }, 1000 / threshold2);
        }
        return () => clearInterval(intervalId);
    }, [count2, threshold2, counterIsVisible]);

    useEffect(() => {
        let intervalId;
        if (count3 < threshold3 && counterIsVisible) {
            intervalId = setInterval(() => {
                setCount3((c) => Math.min(c + 1, threshold3));
            }, 1000 / threshold3);
        }
        return () => clearInterval(intervalId);
    }, [count3, threshold3, counterIsVisible]);

    useEffect(() => {
        let intervalId;
        if (count4 < threshold4 && counterIsVisible) {
            intervalId = setInterval(() => {
                setCount4((c) => Math.min(c + 1, threshold4));
            }, 1000 / threshold4);
        }
        return () => clearInterval(intervalId);
    }, [count4, threshold4, counterIsVisible]);

    return (
        <>
            <Navbar ref1={reqDemoRef} ref2={aboutUsRef} />
            <ZoomImage />

            <div className='flex justify-center'
                style={{
                    padding: '100px 20%'
                }}
            >
                <div>
                    Shiply empowers your business growth through streamlined and efficient management of daily operations. Our comprehensive import-export software simplifies tasks with:
                </div>
                <div>
                    <p>One-click report generation</p>
                    <p>Intuitive dashboards with multi-analytics</p>
                    <p>Automated processes</p>
                    <p>Effortless management</p>
                    <p>& much more</p>

                </div>
                <div>By minimizing unnecessary details and maximizing insights, Shiply frees up your time to focus on high-priority areas, optimizing your efforts and amplifying returns</div>
            </div>


            {/* //_                                   What Company Does */}
            <h1 style={{
                // fontSize: '80px',
                padding: '3% 5%',
            }}
                className='text-4xl navlim:text-xl'
            >Company services</h1>
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, 350px)',
                    justifyContent: 'center',
                    gap: '45px 45px'
                }}
            >
                {CompanyTileContent.map((tile, index) => (
                    <CompanyTile text={tile.title} key={index} content={tile.content} img={tile.img} />
                ))}
            </div>


            {/* //_                                   Video */}
            <div className='flex justify-center items-center mx-auto'
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
            </div>


            {/* //  _                                   Count */}
            <div
                className='rounded-3xl flex flex-wrap'
                style={{
                    backgroundImage: `url(${background})`,
                    height: "auto",
                    display: 'flex',
                    justifyContent: 'space-around'
                }}
                ref={counterRef}
            >
                {
                    countData.map((countData) => (
                        // console.log(countData.count);
                        <Count key={countData.id} count={countData.count} content={countData.content} />
                    ))

                }
            </div>


            {/* //_                                   Features */}
            <h1 style={{
                padding: '3% 5%',
            }}
                className='text-4xl navlim:text-xl'
            >Features</h1>
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, 350px)',
                    justifyContent: 'center',
                    gap: '45px 45px',
                    // padding: '10% 0'
                }}
            >
                {FeatureTileContent.map((tile, index) => (
                    <FeatureTile text={tile.title} key={index} img={tile.img} />
                ))}
            </div>


            {/* //_                                   FAQ */}
            <Faq />


            {/* //_                                   Request Demo */}
            <div className='flex flex-col justify-center items-center' style={{
                width: '80%',
                margin: '7% auto',
                boxShadow: '5px 5px 20px 2px #AAAAAA',
                padding: '5% 10%',
            }} ref={reqDemoRef}>
                <h1 className='text-3xl font-extrabold'>Interested in Learning More?</h1>
                <p className='text-sm'>Learn how we can meet the unique needs of your trading or recycling business with an online demonstration tailored to your specific areas of interest.</p>
                <div className='m-10 w-full flex justify-center items-center gap-2'>
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
                            width: '250px',
                        }}
                        onClick={async () => {
                            fetch('http://localhost:1605/email', {
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
            <Footer ref1={aboutUsRef} />
        </>
    );
}

export default LandingPage;
