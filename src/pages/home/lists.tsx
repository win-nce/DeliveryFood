import { HiOutlineSearch } from "react-icons/hi"
import { Container } from "../../widgets/container"

export const Lists = () => {
    return <section>
        <Container>
            <div className="space-y-10">
                {/* Top */}
                <div className="flex justify-between items-center">
                    <h2 className="text-[36px] font-bold">
                        Рестораны
                    </h2>

                    <form action="" className="w-[306px]">
                        <label className="inline-block relative w-full">
                            <input type="search" placeholder="Поис блюд и ресторанов" className="inline-block w-full py-[5px] pl-[32px] pr-[12px] bg-white border border-[#d9d9d9] rounded-[2px]" />
                            <HiOutlineSearch className="absolute top-1/2 -translate-y-1/2 left-2.5" />
                        </label>
                    </form>
                </div>
            </div>
        </Container>
    </section>
}