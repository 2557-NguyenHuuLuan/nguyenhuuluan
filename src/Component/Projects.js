
import React from 'react'
import lbparking from '../Images/pro/lbparking.png';
import app from '../Images/pro/app.png';
import re from '../Images/pro/re.png';
export default function Projects() {
    return (
        <div>
            <div className="flex flex-col items-center justify-center min-h-screen space-y-8">
                {/* Tiêu đề My Projects */}
                <h2 className="text-5xl font-bold text-gray-900 mb-3 mt-6">My Projects</h2>

                {/* Thẻ đầu tiên */}
                <div className="relative flex w-full max-w-[80rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                    <div className="relative m-0 w-2/5 shrink-0 overflow-hidden bg-white bg-clip-border text-gray-700">
                    <img src={lbparking} alt="lbparking" className="h-full w-full object-cover border-4 border-solid border-blue-500" />
                    </div>
                    <div className="p-6">
                        <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-blue-500 antialiased">
                            Website Java Spring Boot
                        </h6>
                        <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        LBParking - Online Parking Space Rental Platform
                        </h4>
                        <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                        LBParking is an online platform that seamlessly connects individuals looking for parking spaces with those offering them. It provides a fast, convenient, and secure way to rent parking spots, whether for short-term 
                        or long-term use. With a user-friendly interface and reliable service, LBParking makes parking hassle-free.
                        </p>
                        <a className="inline-block" href="LBParking.com">
                            <button className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
                                Learn More
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true" className="h-4 w-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                </svg>
                            </button>
                        </a>
                    </div>
                </div>

                {/* Thẻ thứ hai */}
                <div className="relative flex w-full max-w-[80rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                    <div className="p-6">
                        <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-blue-500 antialiased">
                            App Flutter
                        </h6>
                        <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                            Vocapbulary App
                        </h4>
                        <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                        Like many apps available today, Vocabulary App is an application designed for the learning category, 
                        aimed at helping users improve their vocabulary skills. However, there is significant potential for further development, 
                        such as adding personalized learning paths, gamified elements, and advanced progress tracking features, 
                        which could greatly enhance the overall learning experience and keep users more engaged.
                        </p>
                        <a className="inline-block" href="App">
                            <button className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
                                Learn More
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true" className="h-4 w-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                </svg>
                            </button>
                        </a>
                    </div>
                    <div className="relative m-0 w-2/5 shrink-0 overflow-hidden bg-white bg-clip-border text-gray-700">
                        <img src={app} alt="imagea" className="h-full w-full object-cover border-4 border-solid border-blue-500" />
                    </div>
                </div>

                {/* Thẻ thứ ba */}
                <div className="relative flex w-full max-w-[80rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md mb-10">
                    <div className="relative m-0 w-2/5 shrink-0 overflow-hidden bg-white bg-clip-border text-gray-700">
                        <img src={re} alt="imagea" className="h-full w-full object-cover border-4 border-solid border-blue-500" />
                    </div>
                    <div className="p-6">
                        <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-blue-500 antialiased">
                            ReactJS
                        </h6>
                        <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                            Apple Store
                        </h4>
                        <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                        The Apple website is a sleek, modern platform showcasing the company's innovative products and services. 
                        With a minimalist design, intuitive navigation, and high-quality visuals,
                         it highlights key features of devices like iPhones, Macs, and iPads, along with software and accessories. 
                        The site also offers support, a store for purchasing products, and updates on the latest news and events from Apple.
                        </p>
                        <a className="inline-block" href="apple">
                            <button className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
                                Learn More
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true" className="h-4 w-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                </svg>
                            </button>
                        </a>
                    </div>
                </div>
                <link rel="stylesheet" href="https://unpkg.com/@material-tailwind/html@latest/styles/material-tailwind.css" />
            </div>
        </div>
    )
}
