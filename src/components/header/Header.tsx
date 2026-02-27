
import { useState } from "react"
import logo from "../../assets/logo.svg"
import { log } from "console";
export default function Header() {
    const [flag, setFlag] = useState<boolean>(false)
    const mouseOver = () => {
        setFlag(!flag);
    }
    console.log("Mouse event", flag)
    return (
        <div className=" container px-40 fixed top-0 left-0 right-0 z-40 bg-whitecolor mx-auto">
            <div className=" flex justify-between py-7 pr-4 pl-4 font-headfont">
                <div className="flex items-center">
                    <img className="w-30 h-10" src="/asset/logo.png" alt="Img" />
                </div>
                <div className=" flex items-center pr-[70px] ">
                    <div className=" ">
                        <div className="" onMouseOver={mouseOver}>
                            <p className=" text-header text-[14px] flex py-[20px] pl-[20px] pr-[40px]">Use  Cases
                                <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" className="-mr-1 size-5 text-gray-400">
                                <path d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" fill-rule="evenodd" />
                                </svg>
                            </p>
                        </div>
                        {/* <div classNameName="text-sm z-30 invisible hover:visible">
                            <p>Revenue & Finance</p>
                            <p>Marketing</p>
                            <p>Product</p>
                            <p>Research & Insights</p>
                        </div> */}
                        
                    </div>
                    <div className="text-header text-[14px]">
                        <p className="text-sm flex py-[20px] pl-[20px] pr-[40px]">Product
                            <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" className="-mr-1 size-5 text-gray-400">
                                <path d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" fill-rule="evenodd" />
                            </svg>
                        </p>
                        
                        {/* <div classNameName="text-sm z-30 invisible hover:visible">
                            <p>Analyze DB</p>
                            <p>Pattern OS</p>
                            <p>Market OS</p>
                            <p>CDOS</p>
                        </div> */}
                    </div>
                    <div className=" text-header text-[14px]">
                        <p className="text-sm flex">Resources
                            <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" className="-mr-1 size-5 text-gray-400">
                                <path d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" fill-rule="evenodd" />
                            </svg>
                        </p>
                        {/* <div classNameName="text-sm z-30 invisible hover:visible">
                            <p>Blog</p>
                            <p>Release Notes</p>
                        </div> */}
                    </div>
                    <div className="">
                        <p className="text-[14px] py-[20px] pl-[20px] pr-[40px]">Requset a Demo</p>
                    </div>
                    <div>
                        <p className="text-[14px] py-[20px] pl-[20px] pr-[40px]">Login test</p>
                    </div>
                </div>
            </div>
        </div>
    )
}