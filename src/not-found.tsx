import { Container } from "./widgets/container"
import { ImCross } from "react-icons/im"

export const NotFoundPage = () => {
    return <section className="py-20">
        <Container>
            <div className="min-h-[80vh] flex flex-col gap-5 items-center justify-center">
                <ImCross  size={95} />

                <h1>404 - страница</h1>
            </div>
        </Container>
    </section>
}