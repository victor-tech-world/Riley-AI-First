export default function() {
    return (
        <div className="container mx-auto pt-28">
            <div className="flex justify-between">
                <div className=" ">
                    <div>
                        <img width={100} src="/asset/logo.png" />
                    </div>
                    <div>San Francisco, CA</div>
                    <div>support@askriley.io</div>
                    <div>In</div>
                    {/* </div> */}
                </div>
                <div className=" ">
                    {/* <div className="basis-1/6"> */}
                        <div>Careers</div>
                        <div>Events</div>
                        <div>FAQ</div>
                        <div>Press</div>
                        <div>Trust Center</div>
                        <div>Make the case for Riley</div>
                    {/* </div> */}
                </div>
            </div>
            <div className="flex justify-between border-solid border-t m-3 border-">
                <div className="flex p-3 text-footer">© 2025 Riley AI. All rights reserved.</div>
                <div className="flex ">
                    <p className="p-3 text-footer hover:text-black hover:cursor-pointer">Terms</p>
                    <p className="p-3 text-footer hover:text-black hover:cursor-pointer ">Privacy</p>
                    <p className="p-3 text-footer hover:text-black hover:cursor-pointer">Support</p>
                </div>
            </div>
         </div>
    )
}