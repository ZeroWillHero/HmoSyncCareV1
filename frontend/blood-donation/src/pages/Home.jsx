import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

export default function Home () {
    return (
        <div className="bg-zinc-900 min-h-screen pb-5">
            <Navbar />
            <Hero />   
        </div>
    )
}