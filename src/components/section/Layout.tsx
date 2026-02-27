import BadRevenue from "./badRevenue/BadRevenue";
import BeneathAI from "./dataBeneathAI/BeneathAI";
import Discover from "./discover/Discover";
import AboutRiley from "./first/AboutRiley";
import First from "./first/First";
import Infrastructure from "./Infrastructure/Infrastructure";
import RecomendationCarosuel from "./recomendation/RecomendationCarosuel";
import RevenueDecision from "./revenueDecision/RevenueDecision";
import Second from "./second/Second";

export default function Layout() {
    return (
        <>
            <AboutRiley />
            <Second />
            <BeneathAI/>
            <BadRevenue/>
            <RevenueDecision/>
            <RecomendationCarosuel/>
            <Infrastructure/>
            <Discover />
        </>
    )
}