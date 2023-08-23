import { useState } from "react";

const LoginPage: React.FC = () => {
    const [showPassword, setShowPassword] = useState(false);

    return <main className="grid place-content-center justify-items-center h-screen gap-12">
        <img className="h-10 aspect-square" src="/logo.svg" alt="logo"/>
        <form className="border-gradient min-w-[462px] min-h-[400px] rounded-lg bg-zinc-800 py-10 px-6">
            <p className="text-sm text-gray-500 font-medium text-center">
                WELCOME BACK
            </p>
            <h3 className="text-lg text-white font-semibold text-center mt-2">Log into your account</h3>
            <label>
                <div className="mt-11 text-gray-300">
                    <p>Email or Username</p>
                    <input className="mt-2.5 w-full" placeholder="Enter your email or username"/>
                </div>
            </label>
            <label>
                <div className="mt-4 text-gray-300">
                    <p>Password</p>
                    <input type="password" className="mt-2.5 w-full" placeholder="Enter your password"/>
                </div>
            </label>
        </form>
    </main>
}

export default LoginPage;