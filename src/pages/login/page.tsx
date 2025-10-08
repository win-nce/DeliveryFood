import type { FormEvent } from "react";
import { useAuth } from "../../stores/auth.store"
import { Container } from "../../widgets/container"
import { useNavigate } from "react-router";
import { Routers } from "../../configs/routers.config";

export const LoginPage = () => {

    const login = useAuth(state => state.handleLogin);

    const navigate = useNavigate();

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        const email = formData.get("email") as string;
        const password = formData.get("password") as string;

        if (email.trim() === "" || password.trim() === "") {
            return alert("Введите корректные данные")
        }

        login({
            email,
            password
        })

        navigate(Routers.home);
    }

    return <Container>
        <form
            className="w-80 space-y-2.5 mx-auto"
            onSubmit={onSubmit}
        >

            <input
                type="email"
                name="email"
                placeholder="Email"
                className="inline-block w-full border border-gray-400 rounded-[4px] px-3 py-2"
            />

            <input
                type="password"
                name="password"
                placeholder="Password"
                className="inline-block w-full border border-gray-400 rounded-[4px] px-3 py-2"
            />

            <button
                type="submit"
                className="border border-gray-600 shadow bg-blue-500 text-white text-lg inline-block w-full"
            >
                Войти
            </button>

        </form>
    </Container>
}