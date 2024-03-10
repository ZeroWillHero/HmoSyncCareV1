import { GiKidneys } from "react-icons/gi"
import { IoCallSharp } from "react-icons/io5";
import { FaSquareWhatsapp } from "react-icons/fa6";
import {Link} from 'react-router-dom';
export default function Footer() {
    return (
        <div className="bg-primary min-h-64 grid grid-cols-1 md:grid-cols-3">
            <div className="p-5 w-auto flex">
                <GiKidneys className="text-red-500 text-5xl me-5 p-2" />
                <div>
                    <h1 className="font-bold text-4xl text-tertiary">HemoSyncCare</h1>
                    <span className="text-white text-xs">we all care about you</span>
                </div>

            </div>

            <div>
                <h1 className="text-2xl text-white pt-14 font-semibold mb-5">Contact-Us</h1>
                <ul>
                    <li className="flex text-white items-center font-bold "><IoCallSharp className="text-3xl text-blue-500  me-2" /><span>0764251024</span></li>
                    <li className="flex text-white items-center font-bold "><FaSquareWhatsapp className="text-3xl text-green-500 mt-1 me-2" /><span>0764251024</span></li>
                    <li className="mt-10 text-white font-thin"><span>Visit Us: <a href="#">www.hemosynccare.lk</a> </span></li>

                </ul>
            </div>

            <div>
            <h1 className="text-2xl text-white pt-14 font-semibold">Services</h1>
                
            </div>
        </div>
    )
}