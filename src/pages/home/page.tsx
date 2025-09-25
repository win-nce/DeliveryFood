import { Banner } from "./banner"
import { Lists } from "./lists"

export const Homepage = () => {
    return <div className="bg-gradient-to-b from-white to-[#F5F5F5] pb-[90px]">
        <Banner />
        <Lists />
    </div>
}