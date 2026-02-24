import { title } from "process";
import { businessFirst, businessSecond } from "../../config";
import BusinessShow from "./businessIntro/reusable";
import Title from "./businessIntro/Title";
import { stringify } from "querystring";
import { log } from "console";
import BusinessRevenue from "./businessRevenue/BusinessRevenue";
import BusinessTest from "./businessTest/BusinessTest";
import BusinessInsight from "./businessInsight/BusinessInsight";

export default function Second() {
    return (
        <div className="container mx-auto">
        <Title/>
        {/* {
            businessSecond.map((item:any, key:number) => {
                console.log("item111111111111", item)
                return (
                    <BusinessShow key={key} item={item} />
                )
            })
        } */}
        <BusinessShow />
        <BusinessRevenue/>
        <BusinessTest/>
        <BusinessInsight/>
        </div>
    )
}