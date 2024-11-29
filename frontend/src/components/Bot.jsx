// import React, { useState, useRef } from 'react'
// import botImage from '../assets/Bot.png'
// import cross from '../assets/xmark-solid.svg'
// import send from '../assets/send.png'
// import user from '../assets/Bot.png'
// import bot from '../assets/Bot.png'

// function Bot() {
//     const [toggle, setToggle] = useState(true);
//     const refMessagebox = useRef(null);
//     const [userMessage, setUserMesseges] = useState('')
//     return (
//         <div className='absolute bottom-2 right-2 z-30'>
//             {toggle ?
//                 <div className='bg-white p-1 rounded-full shadow-lg' onClick={() => setToggle(c => !c)}>
//                     <img className='w-12' src={botImage} alt="bot image" />
//                 </div>
//                 :
//                 <div className='flex flex-col'
//                     style={{
//                         width: '300px',
//                         height: '450px'
//                     }}
//                 >
//                     <div className='bg-black w-full h-8 flex justify-between items-center rounded-t-lg px-2 font-roboto ' onClick={() => setToggle(c => !c)}>
//                         <span className='font-extrabold text-white'>CHAT BOT</span>
//                         <img src={cross} alt="close" className='w-4' onClick={() => { setToggle(c => !c) }} style={{ filter: 'invert(1)' }} />
//                     </div>
//                     <div className='flex flex-col bg-white w-full rounded-b-lg' style={{
//                         flex: '1 1 auto',
//                         overflow: 'scroll',
//                         scrollbarWidth: 'none'
//                     }}>
//                         <div ref={refMessagebox} className='rounded-b-lg' style={{
//                             flex: '1 1 auto',
//                         }}>
//                             <BotMessage msg={"asssssssssssssdssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss"} />
//                             <UserMessage msg={"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"} />

//                         </div>
//                         <div className=' bg-transparent absolute bottom-0 w-full p-3 flex justify-between items-center'>
//                             <input value={userMessage} onChange={(e) => { setUserMesseges(e.target.value) }} rows={2} className='mr-2 rounded-full py-2 px-5 bg-white border-black border-2' type="text" placeholder='Ask a question?' style={{
//                                 flex: '1 1 auto'
//                             }} />
//                             <div className='bg-black rounded-full p-3' onClick={(e) => {
//                                 refMessagebox.current.appendChild(<div>hi</div>);
//                                 setUserMesseges('')

//                             }}>
//                                 <img src={send} alt="send msg" className='w-5' style={{
//                                     transform: 'translate(2px)',
//                                     filter: 'invert(1)'
//                                 }} />
//                             </div>
//                         </div>

//                     </div>
//                 </div>
//             }
//         </div>
//     )
// }
// export default Bot


// function BotMessage({ msg }) {
//     return <>
//         <div className='flex justify-start items-end my-4 border-blue-300 border-2'>
//             <img className='w-8 h-8' src={user} alt="imagecon" />
//             <div className='w-9/12 overflow-auto rounded-lg rounded-bl-none py-1 px-2 bg-blue-600 text-wrap'
//                 style={{
//                     wordWrap: 'break-word'
//                 }}
//             >{msg}</div>
//         </div>
//     </>
// }
// function UserMessage({ msg }) {
//     return <>
//         <div className='flex justify-end items-end my-4 border-blue-300 border-2'>
//             <div className='w-9/12 overflow-auto rounded-lg rounded-br-none bg-blue-600 text-wrap'
//                 style={{
//                     wordWrap: 'break-word'
//                 }}
//             >{msg}</div>
//             <img className='w-8 h-8' src={user} alt="imagecon" />
//         </div>
//     </>
// }




import React, { useState, useRef } from 'react';
import botImage from '../assets/Bot.png';
import cross from '../assets/xmark-solid.svg';
import send from '../assets/send.png';
import user from '../assets/Bot.png';

function Bot() {
    const [toggle, setToggle] = useState(true);
    const [messages, setMessages] = useState([
        { type: 'bot', text: 'Welcome! How can I assist you today?' },
    ]);
    const [userMessage, setUserMessages] = useState('');
    const refMessagebox = useRef(null);

    const handleSendMessage = () => {
        if (!userMessage.trim()) return;

        setMessages((prevMessages) => [
            ...prevMessages,
            { type: 'user', text: userMessage },
        ]);

        setUserMessages('');

        // setTimeout(() => {
        setMessages((prevMessages) => [
            ...prevMessages,
            { type: 'bot', text: 'This is a bot response.' },
        ]);

        // Scroll to bottom after bot's response
        refMessagebox.current.scrollTop = refMessagebox.current.scrollHeight;
        // }, 1000);


        // Scroll to bottom immediately after sending message
        setTimeout(() => {
            refMessagebox.current.scrollTop = refMessagebox.current.scrollHeight;
        }, 0);
    };

    return (
        <div className="absolute bottom-2 right-2 z-30">
            {toggle ? (
                <div
                    className="bg-white p-1 rounded-full shadow-lg cursor-pointer"
                    onClick={() => setToggle((c) => !c)}
                >
                    <img className="w-12" src={botImage} alt="bot image" />
                </div>
            ) : (
                <div
                    className="flex flex-col bg-white rounded-lg shadow-lg"
                    style={{
                        width: '300px',
                        height: '450px',
                    }}
                >
                    <div
                        className="bg-black w-full h-8 flex justify-between items-center rounded-t-lg px-2 font-roboto"
                        onClick={() => setToggle((c) => !c)}
                    >
                        <span className="font-extrabold text-white">CHAT BOT</span>
                        <img
                            src={cross}
                            alt="close"
                            className="w-4 cursor-pointer"
                            style={{ filter: 'invert(1)' }}
                        />
                    </div>
                    <div
                        className="flex flex-col bg-white w-full rounded-b-lg overflow-y-auto"
                        style={{ flex: '1 1 auto', scrollbarWidth: 'none' }}
                        ref={refMessagebox}
                    >
                        {messages.map((message, index) =>
                            message.type === 'bot' ? (
                                <BotMessage key={index} msg={message.text} />
                            ) : (
                                <UserMessage key={index} msg={message.text} />
                            )
                        )}
                    </div>
                    <div className=" bottom-0 bg-transparent w-full p-3 flex justify-between items-center">
                        <input
                            value={userMessage}
                            onChange={(e) => setUserMessages(e.target.value)}
                            className="mr-2 rounded-full py-2 px-5 bg-transparent border-black border-2 w-full"
                            type="text"
                            placeholder="Ask a question?"
                            onKeyDown={e => {
                                if (e.key === 'Enter') {
                                    handleSendMessage()
                                }
                            }}

                        />
                        <div
                            className="bg-black rounded-full p-3 cursor-pointer"
                            onClick={handleSendMessage}
                        >
                            <img
                                src={send}
                                alt="send msg"
                                className="w-5"
                                style={{
                                    transform: 'translate(2px)',
                                    filter: 'invert(1)',
                                }}
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

function BotMessage({ msg }) {
    return (
        <div className="flex justify-start items-end my-4">
            <img className="w-8 h-8" src={botImage} alt="bot icon" />
            <div
                className="w-9/12 overflow-auto rounded-lg rounded-bl-none py-1 px-2 bg-blue-600 text-white"
                style={{ wordWrap: 'break-word' }}
            >
                {msg}
            </div>
        </div>
    );
}

function UserMessage({ msg }) {
    return (
        <div className="flex justify-end items-end my-4">
            <div
                className="w-9/12 overflow-auto rounded-lg rounded-br-none py-1 px-2 bg-gray-300 text-black"
                style={{ wordWrap: 'break-word' }}
            >
                {msg}
            </div>
            <img className="w-8 h-8" src={user} alt="user icon" />
        </div>
    );
}

export default Bot;
