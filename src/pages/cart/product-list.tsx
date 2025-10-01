import { useCart } from "react-use-cart"
import { Container } from "../../widgets/container"
import { Product } from "./product"

export const ProductList = () => {
    
    const { isEmpty, totalUniqueItems, items } = useCart()

    if( isEmpty ) {
        return <section className="py-16 min-h-[70vh] flex items-center justify-center">
            Корзина пустая
        </section>
    }

    return <section className="py-16">
        <Container>
            <h2 className="text-2xl font-bold">
                Корзинка ({totalUniqueItems})
            </h2>

            <ul className="pt-10">
                {
                    items.map(item => <Product key={item.id} description={item?.description ?? ""} id={Number(item.id)} image={item?.image ?? ""} name={item?.name ?? ""} price={item.price} quantity={item.quantity ?? 0}/>)
                }
            </ul>

        </Container>
    </section>
}