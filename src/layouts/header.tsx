import { Link } from "react-router"
import { Container } from "../widgets/container"
import Logo from "./../assets/logo.svg"
import { Button } from "../components/button"
import { GoPerson } from "react-icons/go";
import { BsCart3 } from "react-icons/bs";

export const Header = () => {
    return <header className="pt-[44px] pb-[25px]">
        <Container>
            <div className="flex items-center justify-between">
                <Link to={"/"} className="inline-block w-[100px]">
                    <img src={Logo} alt="Логотип" />
                </Link>
                <div className="space-x-2">
                    <Button color="blue">
                        <GoPerson />

                        <span>
                            Войти
                        </span>
                    </ Button>

                    <Link to={"/cart"}>
                        <Button color="white">
                            <BsCart3 />

                            <span>
                                Корзина
                            </span>
                        </ Button>
                    </Link>
                </div>

            </div>
        </ Container>

    </header>
}