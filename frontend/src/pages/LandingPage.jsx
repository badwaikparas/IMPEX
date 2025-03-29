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
import aboutUsImg from '../assets/aboutUsImage.png'
// import aboutUSBg from '../assets/AboutUsbgs/8.jpg'

import bg from '../assets/Wall.jpg'

function LandingPage() {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);
    const [count4, setCount4] = useState(0);
    const [scrollPosition, setScrollPosition] = useState(0);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [countryCode, setCountryCode] = useState("");
    const [phoneNo, setPhoneNo] = useState("");
    const [message, setMessage] = useState("");




    const [counterIsVisible, setCounterIsVisible] = useState(false);

    const reqDemoRef = useRef(null);
    const aboutUsRef = useRef(null);
    const counterRef = useRef(null);
    const footerRef = useRef(null);
    const bodyRef = useRef(null);

    const threshold1 = 50;
    const threshold2 = 1000;
    const threshold3 = 5;
    const threshold4 = 4;

    useEffect(() => {
        const handleScroll = () => {
            if (bodyRef.current) {
                // Log and update the scroll position of the `div` with bodyRef
                setScrollPosition(bodyRef.current.scrollTop);
                // console.log("ScrollTop:", bodyRef.current.scrollTop);
                // console.log("ScrollTop:",);
            }
        };

        const currentRef = bodyRef.current;
        if (currentRef) {
            currentRef.addEventListener("scroll", handleScroll);
        }

        return () => {
            if (currentRef) {
                currentRef.removeEventListener("scroll", handleScroll);
            }
        };
    }, []);



    return (
        <>
            <Bot />

            <div className='absolute w-full h-full -z-10'
                style={{
                    background: `url(${bg})`,
                    backgroundSize: 'cover'

                }}
            ></div>


            <div ref={bodyRef} className=' w-full h-screen overflow-scroll'
                style={{
                    scrollbarWidth: 'none'
                }}
            >
                <Navbar ref1={reqDemoRef} ref2={aboutUsRef} ref3={footerRef} scrolled={scrollPosition >= 668} />
                <ZoomImage />

                {/* <div ref={aboutUsRef} className='flex justify-center flex-col bg-repeat'
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
                        <ul className=' m-5 grid grid-cols-1 list-disc md:grid-cols-2 md: px-5'
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
                </div > */}

                <div ref={aboutUsRef} className='w-full bg-white aboutUs:p-[8/12]'
                    style={{
                        // padding: '100px 0',
                        padding: '10%'
                    }}
                >
                    {/* <div className='aboutUs flex flex-col justify-between gap-24 items-center aboutUs:flex-row '>
                        <div style={{
                            // width: '100%',
                        }}>
                            <div style={{
                                fontSize: '60px',
                            }} className='flex justify-center items-center aboutUs2:block'>
                                About Us
                            </div>
                            <div>
                                <div className='text-wrap'>
                                    Shiply empowers your business growth through streamlined and efficient management of daily operations. Our comprehensive import-export software simplifies tasks with:
                                </div>
                                <ul
                                    className="w-full m-5 flex flex-wrap gap-24 list-disc lg:grid-cols-2 gap-y-5 md:gap-x-[54px] px-5"
                                >
                                    <li style={{ width: '290px' }}>    One-click report generation</li>
                                    <li style={{ width: '290px' }}>    Automated processes</li>
                                    <li style={{ width: '290px' }}>    Simplifying daily tasks</li>
                                    <li style={{ width: '290px' }}>    Effortless management & much more</li>
                                    <li style={{ width: '290px' }}>    Intuitive dashboards with multi-analytics</li>

                                </ul>
                                <div className='text-wrap'>By minimizing unnecessary details and maximizing insights, Shiply frees up your time to focus on high-priority areas, optimizing your efforts and amplifying returns</div>
                            </div>
                        </div>
                        <img src={aboutUsImg} alt="" className='w-96' />
                    </div> */}


                    <div className="aboutUs flex flex-col items-center gap-12 aboutUs:flex-row justify-between">
                        <div className="aboutUs1:w-3/5">
                            <div>
                                <div className='flex justify-center items-center aboutUs2:block' style={{
                                    fontSize: '60px',
                                }}>About Us</div>
                            </div>
                            <div className="mt-6">
                                <p className=" lg:text-lg leading-relaxed text-left font-bold italic text-lg">
                                    “Shiply saves your time to focus on high-priority tasks, optimising your efforts and amplifying returns.”
                                </p>
                                <p className="mt-6 text-base lg:text-lg leading-relaxed text-left">
                                    With Shiply software, your business grows through streamlined and efficient management of daily operations. Our comprehensive export software simplifies tasks with:
                                </p>
                                <ul className="mt-4 grid grid-cols-1 aboutUs3:grid-cols-2 gap-y-4 gap-x-6 list-disc px-5">
                                    <li>One-click report generation</li>
                                    <li>Automated processes</li>
                                    <li>Effortless management & much more</li>
                                    <li>Intuitive dashboards with multi-analytics</li>
                                    <li>Simplifying daily tasks</li>
                                </ul>
                            </div>
                        </div>
                        <div className="w-72 sm:w-80 lg:w-96 flex-shrink-0">
                            <img src={aboutUsImg} alt="About Us" className="w-full object-cover" />
                        </div>
                    </div>

                </div>


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
                            display: 'flex',
                            // flexDirection: 'column',
                            flexGrow: '1',
                            flexWrap: 'wrap',
                            gridTemplateColumns: 'repeat(auto-fill, 350px)',
                            justifyContent: 'center',
                            gap: '45px 45px',
                            alignItems: 'center'
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
                            display: 'flex',
                            // flexDirection: 'column',
                            flexGrow: '1',
                            flexWrap: 'wrap',
                            gridTemplateColumns: 'repeat(auto-fill, 350px)',
                            justifyContent: 'center',
                            gap: '45px 45px',
                            alignItems: 'center'
                        }}
                    >

                        {FeatureTileContent.map((tile, index) => (
                            <CompanyTile text={tile.title} key={index} content={tile.content} img={tile.img} />
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
                    <h1 className='text-3xl font-extrabold'>Connect with us NOW !</h1>
                    <p className='text-sm'>Connect with us now to know more about how easily you can migrate to more efficient working within few clicks!</p>
                    <div className='m-10 w-full flex flex-wrap justify-center items-center gap-2'>
                        <div style={{
                            width: '80%'
                        }}>
                            <input
                                type="text"
                                placeholder='Name'
                                value={name}
                                className='p-5 border-slate-700 border-2'
                                style={{ width: '100%' }}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div style={{
                            width: '80%'
                        }}>
                            <input
                                type="email"
                                placeholder='Email'
                                value={email}
                                className='p-5 border-slate-700 border-2'
                                style={{ width: '100%' }}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="flex justify-between" style={{
                            width: '80%'
                        }}>
                            <select
                                type="text"
                                placeholder="Country Code"
                                defaultValue={"+91"}
                                value={countryCode}
                                className='p-5 border-slate-700 border-2'
                                style={{ width: '28.56%' }}
                                onChange={(e) => setCountryCode(e.target.value)}
                            >
                                <option value="44">UK (+44)</option>
                                <option value="1">USA (+1)</option>
                                <option value="213">Algeria (+213)</option>
                                <option value="376">Andorra (+376)</option>
                                <option value="244">Angola (+244)</option>
                                <option value="1264">Anguilla (+1264)</option>
                                <option value="1268">Antigua &amp; Barbuda (+1268)</option>
                                <option value="54">Argentina (+54)</option>
                                <option value="374">Armenia (+374)</option>
                                <option value="297">Aruba (+297)</option>
                                <option value="61">Australia (+61)</option>
                                <option value="43">Austria (+43)</option>
                                <option value="994">Azerbaijan (+994)</option>
                                <option value="1242">Bahamas (+1242)</option>
                                <option value="973">Bahrain (+973)</option>
                                <option value="880">Bangladesh (+880)</option>
                                <option value="1246">Barbados (+1246)</option>
                                <option value="375">Belarus (+375)</option>
                                <option value="32">Belgium (+32)</option>
                                <option value="501">Belize (+501)</option>
                                <option value="229">Benin (+229)</option>
                                <option value="1441">Bermuda (+1441)</option>
                                <option value="975">Bhutan (+975)</option>
                                <option value="591">Bolivia (+591)</option>
                                <option value="387">Bosnia Herzegovina (+387)</option>
                                <option value="267">Botswana (+267)</option>
                                <option value="55">Brazil (+55)</option>
                                <option value="673">Brunei (+673)</option>
                                <option value="359">Bulgaria (+359)</option>
                                <option value="226">Burkina Faso (+226)</option>
                                <option value="257">Burundi (+257)</option>
                                <option value="855">Cambodia (+855)</option>
                                <option value="237">Cameroon (+237)</option>
                                <option value="1">Canada (+1)</option>
                                <option value="238">Cape Verde Islands (+238)</option>
                                <option value="1345">Cayman Islands (+1345)</option>
                                <option value="236">Central African Republic (+236)</option>
                                <option value="56">Chile (+56)</option>
                                <option value="86">China (+86)</option>
                                <option value="57">Colombia (+57)</option>
                                <option value="269">Comoros (+269)</option>
                                <option value="242">Congo (+242)</option>
                                <option value="682">Cook Islands (+682)</option>
                                <option value="506">Costa Rica (+506)</option>
                                <option value="385">Croatia (+385)</option>
                                <option value="53">Cuba (+53)</option>
                                <option value="90392">Cyprus North (+90392)</option>
                                <option value="357">Cyprus South (+357)</option>
                                <option value="42">Czech Republic (+42)</option>
                                <option value="45">Denmark (+45)</option>
                                <option value="253">Djibouti (+253)</option>
                                <option value="1809">Dominica (+1809)</option>
                                <option value="1809">Dominican Republic (+1809)</option>
                                <option value="593">Ecuador (+593)</option>
                                <option value="20">Egypt (+20)</option>
                                <option value="503">El Salvador (+503)</option>
                                <option value="240">Equatorial Guinea (+240)</option>
                                <option value="291">Eritrea (+291)</option>
                                <option value="372">Estonia (+372)</option>
                                <option value="251">Ethiopia (+251)</option>
                                <option value="500">Falkland Islands (+500)</option>
                                <option value="298">Faroe Islands (+298)</option>
                                <option value="679">Fiji (+679)</option>
                                <option value="358">Finland (+358)</option>
                                <option value="33">France (+33)</option>
                                <option value="594">French Guiana (+594)</option>
                                <option value="689">French Polynesia (+689)</option>
                                <option value="241">Gabon (+241)</option>
                                <option value="220">Gambia (+220)</option>
                                <option value="7880">Georgia (+7880)</option>
                                <option value="49">Germany (+49)</option>
                                <option value="233">Ghana (+233)</option>
                                <option value="350">Gibraltar (+350)</option>
                                <option value="30">Greece (+30)</option>
                                <option value="299">Greenland (+299)</option>
                                <option value="1473">Grenada (+1473)</option>
                                <option value="590">Guadeloupe (+590)</option>
                                <option value="671">Guam (+671)</option>
                                <option value="502">Guatemala (+502)</option>
                                <option value="224">Guinea (+224)</option>
                                <option value="245">Guinea - Bissau (+245)</option>
                                <option value="592">Guyana (+592)</option>
                                <option value="509">Haiti (+509)</option>
                                <option value="504">Honduras (+504)</option>
                                <option value="852">Hong Kong (+852)</option>
                                <option value="36">Hungary (+36)</option>
                                <option value="354">Iceland (+354)</option>
                                <option value="91" selected>India (+91)</option>
                                <option value="62">Indonesia (+62)</option>
                                <option value="98">Iran (+98)</option>
                                <option value="964">Iraq (+964)</option>
                                <option value="353">Ireland (+353)</option>
                                <option value="972">Israel (+972)</option>
                                <option value="39">Italy (+39)</option>
                                <option value="1876">Jamaica (+1876)</option>
                                <option value="81">Japan (+81)</option>
                                <option value="962">Jordan (+962)</option>
                                <option value="7">Kazakhstan (+7)</option>
                                <option value="254">Kenya (+254)</option>
                                <option value="686">Kiribati (+686)</option>
                                <option value="850">Korea North (+850)</option>
                                <option value="82">Korea South (+82)</option>
                                <option value="965">Kuwait (+965)</option>
                                <option value="996">Kyrgyzstan (+996)</option>
                                <option value="856">Laos (+856)</option>
                                <option value="371">Latvia (+371)</option>
                                <option value="961">Lebanon (+961)</option>
                                <option value="266">Lesotho (+266)</option>
                                <option value="231">Liberia (+231)</option>
                                <option value="218">Libya (+218)</option>
                                <option value="417">Liechtenstein (+417)</option>
                                <option value="370">Lithuania (+370)</option>
                                <option value="352">Luxembourg (+352)</option>
                                <option value="853">Macao (+853)</option>
                                <option value="389">Macedonia (+389)</option>
                                <option value="261">Madagascar (+261)</option>
                                <option value="265">Malawi (+265)</option>
                                <option value="60">Malaysia (+60)</option>
                                <option value="960">Maldives (+960)</option>
                                <option value="223">Mali (+223)</option>
                                <option value="356">Malta (+356)</option>
                                <option value="692">Marshall Islands (+692)</option>
                                <option value="596">Martinique (+596)</option>
                                <option value="222">Mauritania (+222)</option>
                                <option value="269">Mayotte (+269)</option>
                                <option value="52">Mexico (+52)</option>
                                <option value="691">Micronesia (+691)</option>
                                <option value="373">Moldova (+373)</option>
                                <option value="377">Monaco (+377)</option>
                                <option value="976">Mongolia (+976)</option>
                                <option value="1664">Montserrat (+1664)</option>
                                <option value="212">Morocco (+212)</option>
                                <option value="258">Mozambique (+258)</option>
                                <option value="95">Myanmar (+95)</option>
                                <option value="264">Namibia (+264)</option>
                                <option value="674">Nauru (+674)</option>
                                <option value="977">Nepal (+977)</option>
                                <option value="31">Netherlands (+31)</option>
                                <option value="687">New Caledonia (+687)</option>
                                <option value="64">New Zealand (+64)</option>
                                <option value="505">Nicaragua (+505)</option>
                                <option value="227">Niger (+227)</option>
                                <option value="234">Nigeria (+234)</option>
                                <option value="683">Niue (+683)</option>
                                <option value="672">Norfolk Islands (+672)</option>
                                <option value="670">Northern Marianas (+670)</option>
                                <option value="47">Norway (+47)</option>
                                <option value="968">Oman (+968)</option>
                                <option value="680">Palau (+680)</option>
                                <option value="507">Panama (+507)</option>
                                <option value="675">Papua New Guinea (+675)</option>
                                <option value="595">Paraguay (+595)</option>
                                <option value="51">Peru (+51)</option>
                                <option value="63">Philippines (+63)</option>
                                <option value="48">Poland (+48)</option>
                                <option value="351">Portugal (+351)</option>
                                <option value="1787">Puerto Rico (+1787)</option>
                                <option value="974">Qatar (+974)</option>
                                <option value="262">Reunion (+262)</option>
                                <option value="40">Romania (+40)</option>
                                <option value="7">Russia (+7)</option>
                                <option value="250">Rwanda (+250)</option>
                                <option value="378">San Marino (+378)</option>
                                <option value="239">Sao Tome &amp; Principe (+239)</option>
                                <option value="966">Saudi Arabia (+966)</option>
                                <option value="221">Senegal (+221)</option>
                                <option value="381">Serbia (+381)</option>
                                <option value="248">Seychelles (+248)</option>
                                <option value="232">Sierra Leone (+232)</option>
                                <option value="65">Singapore (+65)</option>
                                <option value="421">Slovak Republic (+421)</option>
                                <option value="386">Slovenia (+386)</option>
                                <option value="677">Solomon Islands (+677)</option>
                                <option value="252">Somalia (+252)</option>
                                <option value="27">South Africa (+27)</option>
                                <option value="34">Spain (+34)</option>
                                <option value="94">Sri Lanka (+94)</option>
                                <option value="290">St. Helena (+290)</option>
                                <option value="1869">St. Kitts (+1869)</option>
                                <option value="1758">St. Lucia (+1758)</option>
                                <option value="249">Sudan (+249)</option>
                                <option value="597">Suriname (+597)</option>
                                <option value="268">Swaziland (+268)</option>
                                <option value="46">Sweden (+46)</option>
                                <option value="41">Switzerland (+41)</option>
                                <option value="963">Syria (+963)</option>
                                <option value="886">Taiwan (+886)</option>
                                <option value="7">Tajikstan (+7)</option>
                                <option value="66">Thailand (+66)</option>
                                <option value="228">Togo (+228)</option>
                                <option value="676">Tonga (+676)</option>
                                <option value="1868">Trinidad &amp; Tobago (+1868)</option>
                                <option value="216">Tunisia (+216)</option>
                                <option value="90">Turkey (+90)</option>
                                <option value="7">Turkmenistan (+7)</option>
                                <option value="993">Turkmenistan (+993)</option>
                                <option value="1649">Turks &amp; Caicos Islands (+1649)</option>
                                <option value="688">Tuvalu (+688)</option>
                                <option value="256">Uganda (+256)</option>
                                <option value="44">UK (+44)</option>
                                <option value="380">Ukraine (+380)</option>
                                <option value="971">United Arab Emirates (+971)</option>
                                <option value="598">Uruguay (+598)</option>
                                <option value="1">USA (+1)</option>
                                <option value="7">Uzbekistan (+7)</option>
                                <option value="678">Vanuatu (+678)</option>
                                <option value="379">Vatican City (+379)</option>
                                <option value="58">Venezuela (+58)</option>
                                <option value="84">Vietnam (+84)</option>
                                <option value="84">Virgin Islands - British (+1284)</option>
                                <option value="84">Virgin Islands - US (+1340)</option>
                                <option value="681">Wallis &amp; Futuna (+681)</option>
                                <option value="969">Yemen (North)(+969)</option>
                                <option value="967">Yemen (South)(+967)</option>
                                <option value="260">Zambia (+260)</option>
                                <option value="263">Zimbabwe (+263)</option>
                            </select>
                            <input
                                type="number"
                                placeholder='Phone No'
                                value={phoneNo}
                                className='p-5 border-slate-700 border-2'
                                style={{
                                    width: '70%',
                                    MozAppearance: 'textfield'
                                }}
                                onChange={(e) => {
                                    setPhoneNo(e.target.value);
                                    console.log(phoneNo.toString());

                                }}
                            />
                        </div>
                        <input
                            type="text"
                            placeholder='Message'
                            value={message}
                            className='p-5 border-slate-700 border-2'
                            style={{ width: '80%' }}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </div>
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
                                body: JSON.stringify({ name: name, email: email, phoneNo: countryCode + " " + phoneNo.toString(), message: message })
                            })
                        }}
                    >
                        Request Demo
                    </button>
                </div>
                {/* //_                                   Footer */}
                <Footer ref1={footerRef} />
            </div>



        </>
    );
}

export default LandingPage;
