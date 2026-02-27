
import { useState } from "react"
import logo from "../../assets/logo.svg"
import { log } from "console";
export default function Header() {
    return (
        <div className=" px-40 fixed top-0 left-0 right-0 z-40 bg-whitecolor mx-auto">
            <div className="">
            <div className="mx-auto flex justify-between max-w-[1238px] py-[10px] font-headfont ">
                <div className="flex items-center">
                    <img className="w-30 h-10" src="/asset/logo.png" alt="Img" />
                </div>
                <div className=" flex items-center pr-[15px] ">
                    <div className="group relative cursor-pointer">
                        <div className=" ">
                            <p className=" text-header menu-hover font-sans leading-[20px] text-[14px] flex py-[20px] pl-[20px] pr-[40px]">Use  Cases
                                <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" className="-mr-1 size-5 text-gray-400">
                                <path d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" fill-rule="evenodd" />
                                </svg>
                            </p>
                        </div>
                        <div
                            className="invisible absolute w-[160px] bg-white  flex  flex-col py-1 px-4 z-40 shadow-xl group-hover:visible text-left">

                            <a className="my-2 block  border-gray-100  text-[#222222] text-[14px]">
                                Revenue & Finance
                            </a>

                            <a className="my-2 block  border-gray-100  text-[#222222] text-[14px]">
                                Marketing
                            </a>

                            <a className="my-2 block  border-gray-100  text-[#222222] text-[14px]">
                                Product
                            </a>

                            <a className="my-2 block  border-gray-100  text-[#222222] text-[14px]">
                                Research & Insights
                            </a>
                        </div>
                    </div>
                    <div className="group relative cursor-pointer py-2 ">
                        <div className="text-header text-[14px]">
                            <p className="text-sm flex py-[20px] pl-[20px] pr-[40px]">Product
                                <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" className="-mr-1 size-5 text-gray-400">
                                    <path d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" fill-rule="evenodd" />
                                </svg>
                            </p>
                            <div
                                className="invisible absolute  flex  flex-col py-1 px-4 shadow-xl group-hover:visible text-left z-40 bg-white">

                                <a className="my-2 block  border-gray-100 bg-white  text-[#222222] text-[14px] ">
                                    Analyze DB
                                </a>

                                <a className="my-2 block  border-gray-100  text-[#222222] text-[14px]">
                                    Pattern OS
                                </a>

                                <a className="my-2 block  border-gray-100  text-[#222222] text-[14px]">
                                    Market OS
                                </a>

                                <a className="my-2 block  border-gray-100  text-[#222222] text-[14px]">
                                    CDOS
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="group relative cursor-pointer py-2 ">
                        <div className=" text-header text-[14px]">
                            <p className="text-sm flex">Resources
                                <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" className="-mr-1 size-5 text-gray-400">
                                    <path d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" fill-rule="evenodd" />
                                </svg>
                            </p>
                            <div
                                className="invisible absolute  flex  flex-col py-1 pr-4 shadow-xl group-hover:visible text-left z-40 bg-white">

                                <a className="my-2 block  border-gray-100  text-[#222222] text-[14px]">
                                    Blog
                                </a>

                                <a className="my-2 block  border-gray-100  text-[#222222] text-[14px]">
                                    Release Notes
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <p className="text-[14px] py-[20px] pl-[20px] pr-[40px]">Requset a Demo</p>
                    </div>
                    <div>
                        <p className="text-[14px] py-[20px] pl-[0px] pr-[40px]">Login</p>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}