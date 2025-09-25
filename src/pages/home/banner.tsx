import { Container } from "../../widgets/container"
import BannerImg from "./../../assets/banner.png"
export const Banner = () => {
    return <section className="pt-[18px] pb-[56px]">
        <Container>
            <div className="bg-[#FFF1B8] rounded-[16px] px-[70px] py-[68px] relative">
                <div className="space-y-4 w-[528px]">
                    <h2 className="text-[39px] font-bold">
                        Онлайн-сервис доставки еды на дом
                    </h2>
                    <p className="text-2xl">
                        Блюда из любимого ресторана привезет курьер в перчатках, маске и с антисептиком
                    </p>
                </div>
                <div className="absolute right-0 top-0 bottom-0">
                    <img src={ BannerImg } alt="баннер" className="w-full h-full object-cover"/>
                </div>
            </div>
        </Container>
    </section>
}