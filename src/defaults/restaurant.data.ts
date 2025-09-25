import Pic1 from "./../assets/PizzaPlus.jpg"
import Pic2 from "./../assets/Tanuki.jpg"
import Pic3 from "./../assets/FoodBand.jpg"
import Pic4 from "./../assets/GreedyPizza.jpg"
import Pic5 from "./../assets/PointOfFood.jpg"
import Pic6 from "./../assets/PizzaBurger.jpg"

export const restaurantData:RestaurantType[] = [
    {
        id: 1,
        image: Pic1,
        title: "Пицца плюс",
        time: 50,
        rating: 4.5,
        price: 950,
        category: "Пицца"
    },
    {
        id: 2,
        image: Pic2,
        title: "Тануки",
        time: 60,
        rating: 4.8,
        price: 1300,
        category: "Пицца"
    },
    {
        id: 3,
        image: Pic3,
        title: "Food Band",
        time: 70,
        rating: 4.2,
        price: 900,
        category: "Пицца"
    },
    {
        id: 4,
        image: Pic4,
        title: "Жадина-пицца",
        time: 100,
        rating: 3.5,
        price: 800,
        category: "Пицца"
    },
    {
        id: 5,
        image: Pic5,
        title: "Точка еды",
        time: 40,
        rating: 3.9,
        price: 1000,
        category: "Пицца"
    },
    {
        id: 6,
        image: Pic6,
        title: "PizzaBurger",
        time: 50,
        rating: 5,
        price: 1200,
        category: "Пицца"
    }
] as const;

export interface RestaurantType {
    id: number;
    image: string;
    title: string;
    time: number;
    rating: number;
    price: number;
    category: string;
}