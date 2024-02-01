import { useState } from "react";
import { BiAlignJustify } from "react-icons/bi";
import { Link } from "react-router-dom"; // Add this line


export default function Navbar() {
    const [show,setshow] = useState(false);
    const token = localStorage.getItem("token");
    
    

    const HandleShow = () => {
        setshow(!show);
    }

    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.reload();
    }
    return (
        <nav className="flex flex-col justify-between p-5 shadow-lg w-full sticky md:flex-row pb-5 bg-zinc-800 text-tertiary">
            <div className="flex justify-between items-center">
                <h1 className="font-bold text-2xl text-tertiary">HemoSyncCare</h1>
                <BiAlignJustify className="md:hidden block text-2xl" onClick={HandleShow}/>
            </div>

            <div className={show ? "block mt-3" : "hidden md:block mt-3"}>
                <ul className="flex flex-col justify-between font-bold md:flex-row">
                    <li className="mb-2"><Link to="/" className="p-2">Home</Link></li>
                    <li className="mb-2"><Link className="p-2" to='/about'>About-Us</Link></li>
                    <li className={token ? "block mb-4" : "hidden"}><Link className="p-2" to="/profile">Profile</Link></li>
                    <li className={token ? "hidden" : "block mb-2"}><Link className="p-2 w-20 bg-tertiary text-white font-bold rounded-md hover:bg-secondary" to="/login">Sign-in</Link></li>
                    <li className={token ? "block mb-2" : "hidden mb-2"}><Link className="p-2 w-20 bg-tertiary text-white font-bold rounded-md hover:bg-secondary" onClick={handleLogout}>Log-out</Link></li>

                </ul>
            </div>
        </nav>
    )
}

