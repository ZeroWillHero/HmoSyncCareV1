import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Signup() {
    const [firstname,setFirstname] = useState("");
    const [lastname,setLastname] = useState("");
    const [email,setEmail] = useState("");  
    const [password,setPassword] = useState("");
    const [confirmpassword,setConfirmpassword] = useState("");
    const [dob,setDob] = useState("");
    const [error, setError] = useState(null);

    const navigate = useNavigate();
    

    const handleFirstname = (e) => {
        setFirstname(e.target.value);
    }

    const handleLastname = (e) => {
        setLastname(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleConfirmpassword = (e) => {
        setConfirmpassword(e.target.value);
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleSubmit = (e) => {

        e.preventDefault();
        submitData();
        
    }

    const handleDob = (e) => {
        setDob(e.target.value);
    }

    async function submitData() {
        if (password !== confirmpassword) {
            setError("Password not match");
            return;
        }

        const res = await fetch("http://localhost:3000/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                firstname,
                lastname,
                email,
                password,
                dob
            }),
        });

        if (!res.ok){
            const data = await res.json();
            setError(data.message);
            return;
        }
        navigate("/login");
    }


    return (
        <div className="bg-zinc-900 min-h-screen pb-5">
            <Navbar />

            <div className="flex justify-center container mx-auto">
                <form className="w-11/12 bg-zinc-800 flex flex-col items-center mt-20 pt-10 pb-5" onSubmit={handleSubmit}>
                    <h1 className="text-white text-2xl mb-4 font-bold">Hemo Sync Care</h1>
                    <input className="p-2 w-8/12 h-10 mb-5  focus:outline-red-500 focus:outline-2 border-hidden rounded-sm" required value={firstname} onChange={handleFirstname} type="text" placeholder="firstname" /> <br />
                    <input className="p-2 w-8/12 h-10 mb-5  focus:outline-red-500 focus:outline-2 border-hidden rounded-sm" required value={lastname} onChange={handleLastname} type="text" placeholder="lastname" /> <br />
                    <input className="p-2 w-8/12 h-10 mb-5  focus:outline-red-500 focus:outline-2 border-hidden rounded-sm" required value={email} onChange={handleEmail} type="text" placeholder="email" /> <br />
                    <input className="p-2 w-8/12 h-10 mb-5  focus:outline-red-500 focus:outline-2 border-hidden rounded-sm" required value={password} onChange={handlePassword} type="password" placeholder="password" /> <br />
                    <input className="p-2 w-8/12 h-10 mb-5  focus:outline-red-500 focus:outline-2 border-hidden rounded-sm" required type="password" value={confirmpassword} onChange={handleConfirmpassword} placeholder="confirm-password" /> <br />
                    <input className="p-2 w-8/12 h-10 mb-5  focus:outline-red-500 focus:outline-2 border-hidden rounded-sm" required type="date" value={dob} onChange={handleDob} placeholder="Date of Birth" /> <br />
                    {error && <p className="text-red-500">{error}</p>}
                    <p className="text-white mb-4">Didn't have an Account?<span><Link className="underline text-violet-500" to="/login" >login</Link></span></p>
                    <button className="bg-red-500 p-2 w-20 rounded-md" >Sign Up</button>
                </form>
            </div>

        </div>
    )
}