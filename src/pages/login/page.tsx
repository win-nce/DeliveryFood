import type { FormEvent } from "react";
import { useAuth } from "../../stores/auth.store";
import { Container } from "../../widgets/container";
import { useNavigate } from "react-router";

export const LoginPage = () => {
    const login = useAuth(state => state.handleLogin); 
    
    const  navigate = useNavigate();

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;

        if (email.trim() === "" || password.trim() === "") {
            return alert("Введите корректные данные");
        }

        login({ email, password });
        navigate("/")
    };

    return (
        <Container>
            <form className="w-80 space-y-2.5 mx-auto" onSubmit={onSubmit}>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="inline-block px-3 py-2 rounded-[4px] border border-gray-400 w-full"
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="inline-block px-3 py-2 rounded-[4px] border border-gray-400 w-full"
                />
                <button
                    type="submit"
                    className="border border-gray-600 shadow bg-blue-500 text-white text-lg inline-block w-full"
                >
                    Войти
                </button>
            </form>
        </Container>
    );
};
