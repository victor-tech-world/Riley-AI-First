
import logo from "../../assets/logo.svg"
export default function Header() {
    return (
        <div className="container mx-auto">
            <div className="flex justify-between pt-7 pr-4 pl-4">
                <div className="flex pl-4">
                    <img className="w-30 h-10" src="/asset/logo.png" alt="Img" />
                </div>

                <div className=" flex">
                    <div className="pr-4 text-header">
                        <div>Use Cases</div>
                    </div>
                    <div className="pr-4 text-header">
                        <div>Product</div>
                    </div>
                    <div className="pr-4 text-header">
                        <div>Resources</div>
                    </div>
                    <div className="pr-4 text-header">
                        <p>Requset a Demo</p>
                    </div>
                    <div>
                        <p>Login test</p>
                    </div>
                </div>
            </div>
        </div>
    )
}