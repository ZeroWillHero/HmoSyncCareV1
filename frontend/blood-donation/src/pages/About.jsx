import Navbar from "../components/Navbar";
import about from '../components/assets/about.jpg';
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function About() {
    return (
        <div className="min-h-screen bg-zinc-800">
            <Navbar />

            <div className="flex flex-col justify-start items-center pt-20">
                <img src={about} />
                <div>
                    <h1 className="text-white text-4xl font-bold text-center">About us</h1>
                    <p className="text-center p-5 text-white ">Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Veniam facilis tempore quo ad voluptatum hic temporibus incidunt
                        iure fugiat. Possimus, voluptatum explicabo? Facere beatae iure officiis alias at modi
                        sint?
                    </p>

                    <ul className="flex justify-center gap-4">
                        <li><a href="#"><FaFacebook className="text-5xl text-red-500 hover:text-white hover:-translate-y-2 transition-all" /></a></li>
                        <li><a href="#"><FaInstagramSquare className="text-5xl text-red-500 hover:text-white hover:-translate-y-2 transition-all" /></a></li>
                        <li><a href="#"><FaLinkedin className="text-5xl text-red-500 hover:text-white hover:-translate-y-2 transition-all" /></a></li>

                    </ul>
                </div>
            </div>
        </div>
    )
}