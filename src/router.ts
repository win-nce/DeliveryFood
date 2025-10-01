
import { createBrowserRouter } from "react-router";
import App from "./app/App";
import { Homepage } from "./pages/home/page";
import { RestaurantPage } from "./pages/restaraunt/page";
import { NotFoundPage } from "./not-found";
import { CartPage } from "./pages/cart/page";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
        children: [
            {
                path: "/",
                Component: Homepage
            },
            {
                path: "/restaurant/:id",
                Component: RestaurantPage
            },
            {
                path: "*", //"*" указывает все пути что не перечислены. в нашем случае 404 page.
                Component: NotFoundPage
            },
            {
                path: "/cart",
                Component: CartPage
            },
        ],
    }
])