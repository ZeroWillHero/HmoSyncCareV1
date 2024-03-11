import { GiKidneys } from "react-icons/gi"
import { IoCallSharp } from "react-icons/io5";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
export default function Footer() {
    return (
        <footer className="h-auto w-full bg-primary pb-3 flex flex-col justify-between md:flex-row">
            <div className="text-white p-5">
                <div className="flex">
                    <GiKidneys className="text-5xl text-red-500 me-2 mb-3" />
                    <h1 className="font-bold text-4xl text-tertiary">HemoSyncCare</h1>
                </div>
                <h2 className="text-2xl font-semibold">We make Quality Health Care!</h2>
                <p className="text-sm">Reach out for Lifesaving Connections;Your Bridge to Support and <br />Information Contact Us Today</p>
            </div>


            <div>

            </div>

            <div className="flex">
                <div className="text-white p-5 me-7">
                    <h1 className="text-2xl font-bold mb-8">Contact Us</h1>
                    <ul>
                        <li className="flex mb-1"><IoCallSharp className="text-xl text-cyan-500" /><span className="ms-4 font-bold text-xs">76 42 51 024</span></li>
                        <li className="flex mb-2"><FaSquareWhatsapp className="text-xl text-teal-500" /><span className="ms-4 font-bold text-xs">76 42 51 024</span></li>
                    </ul>

                    <p className="text-xs">
                        No. 176, Ambepussa - Trincomalee Hwy <br />

                        Kurunagala,Sri Lanka <br />
                        0372 222 261</p>
                </div>

                <div className="text-white p-5 me-10">
                    <h1 className="text-2xl font-bold mb-8">Services</h1>
                    <ul>
                        <li className=" text-xs font-semibold text-white"><Link>Medical Care</Link></li>
                        <li className=" text-xs font-semibold text-white"><Link>Medical advices</Link></li>
                        <li className=" text-xs font-semibold text-white"><Link>Contact Doctors</Link></li>
                        <li className=" text-xs font-semibold text-white"><Link>Report-Us</Link></li>
                        <li className=" text-xs font-semibold text-white"><Link>Dialising</Link></li>


                    </ul>

                    <ul className="flex justify-start gap-2 pt-5">
                        <li><a href="#"><FaFacebook className="text-md text-red-500 hover:text-white hover:-translate-y-2 transition-all" /></a></li>
                        <li><a href="#"><FaInstagramSquare className="text-md text-red-500 hover:text-white hover:-translate-y-2 transition-all" /></a></li>
                        <li><a href="#"><FaLinkedin className="text-md text-red-500 hover:text-white hover:-translate-y-2 transition-all" /></a></li>

                    </ul>
                </div>
            </div>
        </footer>
    )
}