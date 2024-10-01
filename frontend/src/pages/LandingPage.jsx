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

function LandingPage() {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);
    const [count4, setCount4] = useState(0);

    const reqDemo = useRef(null);
    const aboutUs = useRef(null);

    const threshold1 = 100;
    const threshold2 = 1001;
    const threshold3 = 200;
    const threshold4 = 350;

    useEffect(() => {
        let intervalId;
        if (count1 < threshold1) {
            intervalId = setInterval(() => {
                setCount1((c) => Math.min(c + 1, threshold1));
            }, 2000 / threshold1);
        }
        return () => clearInterval(intervalId);
    }, [count1, threshold1]);

    useEffect(() => {
        let intervalId;
        if (count2 < threshold2) {
            intervalId = setInterval(() => {
                setCount2((c) => Math.min(c + 1, threshold2));
            }, 2000 / threshold2);
        }
        return () => clearInterval(intervalId);
    }, [count2, threshold2]);

    useEffect(() => {
        let intervalId;
        if (count3 < threshold3) {
            intervalId = setInterval(() => {
                setCount3((c) => Math.min(c + 1, threshold3));
            }, 2000 / threshold3);
        }
        return () => clearInterval(intervalId);
    }, [count3, threshold3]);

    useEffect(() => {
        let intervalId;
        if (count4 < threshold4) {
            intervalId = setInterval(() => {
                setCount4((c) => Math.min(c + 1, threshold4));
            }, 2000 / threshold4);
        }
        return () => clearInterval(intervalId);
    }, [count4, threshold4]);

    return (
        <>
            <Navbar ref={reqDemo} />
            <ZoomImage />

            <div className='flex justify-center'
                style={{
                    padding: '100px 20%'
                }}
            >
                Company Info
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


            {/* //! _                                   Count */}
            {/* <div
                className='rounded-3xl flex flex-wrap'
                style={{
                    backgroundImage: `url(${background})`,
                    height: "auto",
                    display: 'flex',
                    justifyContent: 'space-around'
                }}>
                <Count count={count1} />
                <Count count={count2} />
                <Count count={count3} />
                <Count count={count4} />
            </div> */}


            {/* //_                                   Features */}
            <h1 style={{
                // fontSize: '80px',
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
            }} ref={reqDemo}>
                <h1 className='text-3xl font-extrabold'>Interested in Learning More?</h1>
                <p className='text-sm'>Learn how we can meet the unique needs of your trading or recycling business with an online demonstration tailored to your specific areas of interest.</p>
                <div className='m-10 w-full flex justify-center items-center gap-2'>
                    <input type="email" placeholder='Email' className='p-5 border-slate-700 border-2' style={{
                        width: '80%',
                    }} />
                    <button className='p-5' style={{
                        background: '#053049',
                        color: 'white',
                        fontWeight: 'bolder',
                        fontSize: 'large',
                        width: '250px'
                    }}>Request Demo</button>
                </div>
            </div>

            {/* //_                                   Footer */}
            <Footer />
        </>
    );
}

export default LandingPage;
