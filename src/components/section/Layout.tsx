import BadRevenue from "./badRevenue/BadRevenue";
import BeneathAI from "./dataBeneathAI/BeneathAI";
import First from "./first/First";
import Infrastructure from "./Infrastructure/Infrastructure";
import RecomendationCarosuel from "./recomendation/RecomendationCarosuel";
import RevenueDecision from "./revenueDecision/RevenueDecision";
import Second from "./second/Second";

export default function Layout() {
    return (
        <>
            <First />
            <Second />
            <BeneathAI/>
            <BadRevenue/>
            <RevenueDecision/>
            <RecomendationCarosuel/>
            <Infrastructure/>
        </>
    )
}