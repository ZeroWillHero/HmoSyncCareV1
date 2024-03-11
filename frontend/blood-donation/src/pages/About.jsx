import Navbar from "../components/Navbar";
import about from '../components/assets/about.jpg';
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Footer from "../components/Footer";

export default function About() {
    return (
        <div className="min-h-screen bg-secondary">
            <Navbar />

            <div className="flex flex-col justify-start items-center pt-20">
                <img src={about} />
                <div>
                    <h1 className="text-tertiary text-4xl font-bold text-center">HemoSyncCare</h1>
                    <h1 className="text-white text-4xl font-bold text-center">We make Quality Health Care!</h1>

                    <p className="text-center p-5 text-white ">Our solution addresses hemodialysis time management challenges through a user-friendly web page
                        and database system. Patients can access real-time bed availability, reducing delays and resource wastage.
                        The system proactively notifies patients of bed reassignments, enhancing scheduling efficiency.
                        This patient-centric approach fosters informed decision-making, optimizing healthcare resource
                        utilization and improving the overall hemodialysis experience.
                    </p>

                    <ul className="flex justify-center gap-4 mb-3">
                        <li><a href="#"><FaFacebook className="text-5xl text-red-500 hover:text-white hover:-translate-y-2 transition-all" /></a></li>
                        <li><a href="#"><FaInstagramSquare className="text-5xl text-red-500 hover:text-white hover:-translate-y-2 transition-all" /></a></li>
                        <li><a href="#"><FaLinkedin className="text-5xl text-red-500 hover:text-white hover:-translate-y-2 transition-all" /></a></li>

                    </ul>
                </div>
            </div>

            <Footer />
        </div>
    )
}