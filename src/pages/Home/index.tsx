import { useEffect } from "react";
import { useApp } from "../../contexts/App";
import { useNavigate } from "react-router-dom";
import CreatePostSection from "./components/CreatePostSection";

const HomePage: React.FC = () => {
    const {user} = useApp()
    const navigate = useNavigate()

    return <main className="mx-[max(calc((100vw_-_700px)/2),_32px)] pt-16">
        <h1 className="text-3xl leading-normal text-gray-300 font-semibold">Hello {user?.username}</h1>
        <p className="text-base text-gray-500 font-normal max-w-[580px] mt-3 mb-10">
            How are you doing today? Would you like to share something with the community 🤗
        </p>
        <CreatePostSection/>
    </main>
}

export default HomePage;