import React, { useState } from 'react';

function Faq() {
    const [display, setDisplay] = useState({
        faq1: false,
        faq2: false,
        faq3: false,
        faq4: false
    });

    return (
        <section className="py-24 bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col justify-center items-center gap-x-16 gap-y-5 xl:gap-28 lg:flex-row lg:justify-between max-lg:max-w-2xl mx-auto max-w-full">
                    {/* Image Section */}
                    {/* <div className="w-full lg:w-1/2">
                        <img
                            src=""
                            alt="FAQ Image"
                            className="w-full rounded-xl object-cover"
                        />
                    </div> */}

                    {/* FAQ Content Section */}
                    <div className="w-full lg:w-1/2">
                        <div className="lg:max-w-xl">
                            <div className="mb-6 lg:mb-16 text-center lg:text-left">
                                <h2 className="text-4xl font-bold text-indigo-600 leading-[3.25rem]">
                                    FAQs
                                </h2>
                                <h6 className="text-lg font-medium  mb-5">Looking for answers?</h6>
                            </div>

                            {/* FAQ Accordion Group */}
                            <div>
                                {/* FAQ Item 1 */}
                                <div className="pb-8 border-b border-solid border-gray-200">
                                    <button
                                        className="flex justify-between items-center text-xl font-normal leading-8 text-gray-600 w-full transition hover:text-indigo-600"
                                        aria-controls="basic-collapse-one"
                                        onClick={() => setDisplay(() => ({
                                            faq1: !display.faq1,
                                            faq2: false,
                                            faq3: false,
                                            faq4: false
                                        }))}
                                    >
                                        <h5> What is the typical onboarding time ?</h5>
                                        <svg
                                            className={`text-gray-900 transition transform group-hover:text-indigo-600 ${display.faq1 ? 'rotate-180' : ''}`}
                                            width="22"
                                            height="22"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                                                stroke="currentColor"
                                                strokeWidth="1.6"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </button>
                                    <div
                                        className={`accordion-content w-full px-0 overflow-hidden transition-all duration-500 ease-in-out ${display.faq1 ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'}`}
                                    >
                                        <p className="text-base font-normal text-gray-600 py-2">
                                            Once the formalities are done it takes not more than 4 working days for your business to board & run!.
                                        </p>
                                    </div>
                                </div>

                                {/* FAQ Item 2 */}
                                <div className="accordion py-8 border-b border-solid border-gray-200">
                                    <button
                                        className="flex justify-between items-center text-xl font-normal leading-8 text-gray-600 w-full transition hover:text-indigo-600"
                                        onClick={() => setDisplay(() => ({
                                            faq1: false,
                                            faq2: !display.faq2,
                                            faq3: false,
                                            faq4: false
                                        }))}
                                    >
                                        <h5> What documents are required for importing/exporting goods?</h5>
                                        <svg
                                            className={`text-gray-900 transition transform group-hover:text-indigo-600 ${display.faq2 ? 'rotate-180' : ''}`}
                                            width="22"
                                            height="22"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                                                stroke="currentColor"
                                                strokeWidth="1.6"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </button>
                                    <div
                                        id="basic-collapse-two"
                                        className={`accordion-content w-full px-0 overflow-hidden transition-all duration-500 ease-in-out ${display.faq2 ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'}`}
                                    >
                                        <p className="text-base font-normal text-gray-600 py-2">
                                            For one time setup , you can either share us all your necessary documents or either we can train you for the same
                                        </p>
                                    </div>
                                </div>

                                {/* FAQ Item 3 */}
                                <div className="accordion py-8 border-b border-solid border-gray-200">
                                    <button
                                        className="flex justify-between items-center text-xl font-normal leading-8 text-gray-600 w-full transition hover:text-indigo-600"
                                        onClick={() => setDisplay(() => ({
                                            faq1: false,
                                            faq2: false,
                                            faq3: !display.faq3,
                                            faq4: false
                                        }))}
                                    >
                                        <h5> Do you offer customised solutions ?</h5>
                                        <svg
                                            className={`text-gray-900 transition transform group-hover:text-indigo-600 ${display.faq3 ? 'rotate-180' : ''}`}
                                            width="22"
                                            height="22"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                                                stroke="currentColor"
                                                strokeWidth="1.6"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </button>
                                    <div
                                        id="basic-collapse-three"
                                        className={`accordion-content w-full px-0 overflow-hidden transition-all duration-500 ease-in-out ${display.faq3 ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'}`}
                                    >
                                        <p className="text-base font-normal text-gray-600 py-2">
                                            Yes, we provide customised solutions too, just contact us to schedule a call!
                                        </p>
                                    </div>
                                </div>

                                {/* FAQ Item 4 */}
                                {/* <div className="accordion py-8">
                                    <button
                                        className="flex justify-between items-center text-xl font-normal leading-8 text-gray-600 w-full transition hover:text-indigo-600"
                                        onClick={() => setDisplay(() => ({
                                            faq1: false,
                                            faq2: false,
                                            faq3: false,
                                            faq4: !display.faq4
                                        }))}
                                    >
                                        <h5>Question 4</h5>
                                        <svg
                                            className={`text-gray-900 transition transform group-hover:text-indigo-600 ${display.faq4 ? 'rotate-180' : ''}`}
                                            width="22"
                                            height="22"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                                                stroke="currentColor"
                                                strokeWidth="1.6"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </button>
                                    <div
                                        id="basic-collapse-four"
                                        className={`accordion-content w-full px-0 overflow-hidden transition-all duration-500 ease-in-out ${display.faq4 ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'}`}
                                    >
                                        <p className="text-base font-normal text-gray-600 py-2">
                                            Answer 4
                                        </p>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Faq;
