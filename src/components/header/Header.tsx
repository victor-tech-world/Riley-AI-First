
import logo from "../../assets/logo.svg"
export default function Header() {
    return (
        <>
            <div className="flex justify-between pt-7 pr-4 pl-4">
                <div className="flex pl-4">
                    <img className="w-20 h-20" src="../../" alt="Img" />
                    {/* dfsfds */}
                </div>

                <div className=" flex">
                    <div className="pr-4 text-header">Use Cases</div>
                    <div className="pr-4 text-header">Product</div>
                    <div className="pr-4 text-header">Resources</div>
                    <div className="pr-4 text-header">Requset a Demo</div>
                    <div >Login test</div>
                </div>
            </div>
        </>
    )
}