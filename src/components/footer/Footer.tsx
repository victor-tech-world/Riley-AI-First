export default function() {
    return (
        <div className=" pt-[160px] mb-64px  max-w-[1280px] mx-auto">
            <div className="flex justify-between ">
                <div className="pl-[30px]">
                    <div className="mb-[32px]">
                        <img width={100} src="/asset/logo.png" />
                    </div>
                    <div className="text-[16px]  font-headfont font-[500]">
                        <p className="leading-normal">
                            San Francisco, CA
                        </p>
                        <p className="min-h-[8px]"></p>
                    </div>
                    <div className="text-[16px] font-headfont leading-normal">support@askriley.io</div>
                    <div className="">
                        <p className="pt-[32px]">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.2234 0H1.77187C0.792187 0 0 0.773438 0 1.72969V22.2656C0 23.2219 0.792187 24 1.77187 24H22.2234C23.2031 24 24 23.2219 24 22.2703V1.72969C24 0.773438 23.2031 0 22.2234 0ZM7.12031 20.4516H3.55781V8.99531H7.12031V20.4516ZM5.33906 7.43438C4.19531 7.43438 3.27188 6.51094 3.27188 5.37187C3.27188 4.23281 4.19531 3.30937 5.33906 3.30937C6.47813 3.30937 7.40156 4.23281 7.40156 5.37187C7.40156 6.50625 6.47813 7.43438 5.33906 7.43438ZM20.4516 20.4516H16.8937V14.8828C16.8937 13.5562 16.8703 11.8453 15.0422 11.8453C13.1906 11.8453 12.9094 13.2937 12.9094 14.7891V20.4516H9.35625V8.99531H12.7687V10.5609H12.8156C13.2891 9.66094 14.4516 8.70938 16.1813 8.70938C19.7859 8.70938 20.4516 11.0813 20.4516 14.1656V20.4516Z" fill="#475467"></path>
  </svg>
                        </p>
                    </div>
                    {/* </div> */}
                </div>
                <div className="pr-[10px]">
                    {/* <div className="basis-1/6"> */}
                        <div className="text-badrevenue text-[16px] font-headfont py-[8px] ">
                            Careers
                        </div>
                        <div className="text-badrevenue text-[16px] font-headfont py-[8px]  ">Events</div>
                        <div className="text-badrevenue text-[16px] font-headfont py-[8px] ">FAQ</div>
                        <div className="text-badrevenue text-[16px] font-headfont py-[8px] ">Press</div>
                        <div className="text-badrevenue text-[16px] font-headfont py-[8px] ">Trust Center</div>
                        <div className="text-badrevenue text-[16px]  mt-[10px] font-headfont py-[8px]">Make the case for Riley</div>
                    {/* </div> */}
                </div>
            </div>
            <div className="container flex pt-[32px] pb-[64px] justify-between border-solid border-t mt-[32px] border-[#eaecf0]">
                <div className="flex text-footer text-[14px] font-footerfont leading-normal">© 2025 Riley AI. All rights reserved.</div>
                <div className="flex gap-x-4">
                    <p className="text-[14px] font-footerfont leading-normal text-footer hover:text-black hover:cursor-pointer">Terms</p>
                    <p className="text-[14px] font-footerfont leading-normal text-footer hover:text-black hover:cursor-pointer ">Privacy</p>
                    <p className="text-[14px] font-footerfont leading-normal text-footer hover:text-black hover:cursor-pointer">Support</p>
                </div>
            </div>
         </div>
    )
}