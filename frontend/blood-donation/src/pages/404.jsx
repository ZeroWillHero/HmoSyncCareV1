import { ImSad } from "react-icons/im";

export default function Notfound () {
    return (
        <div className="bg-zinc-900 min-h-screen flex flex-col justify-center items-center">
            <ImSad className="text-red-500 text-9xl" />
            <h1 className="text-red-500 text-9xl tracking-wide">4 0 4</h1>
            <h1 className="text-7xl text-white">page not found ...!</h1>
        </div>
    )
}