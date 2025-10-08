import { createBrowserRouter } from "react-router";
import { App } from "./App";
import { HomePage } from "./pages/home/page";
import { RestaurantPage } from "./pages/restaurant/page";
import { NotFoundPage } from "./not-found";
import { CartPage } from "./pages/cart/page";
import { LoginPage } from "./pages/login/page";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
        children: [
            {
                path: "/DeliveryFood",
                Component: HomePage
            },
            {
                path: "DeliveryFood/restaurant/:id",
                Component: RestaurantPage
            },
            {
                path: "*",
                Component: NotFoundPage
            },
            {
                path: "DeliveryFood/cart",
                Component: CartPage
            },
            {
                path: "DeliveryFood/login",
                Component: LoginPage
            }
        ],
    }
])