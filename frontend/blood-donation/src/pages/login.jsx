import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"
import { useState } from "react"
import { useNavigate } from "react-router-dom"


export default function Signup() {
    
    const [email,setEmail] = useState("");  
    const [password,setPassword] = useState("");
    const navigate = useNavigate();
    const [error, setError] = useState(null);

    

   

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const submitData = async () => {
        const res = await fetch("http://localhost:3000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                
                email,
                password
            }),
        });
        console.log(res);
        const data = await res.json();
        if (!res.ok) {
            setError(data.message);
            console.log(data.message)
        } else {
            localStorage.setItem("token", data.token);
            alert("Login Successful");
            navigate("/");
        }

        
    }

    const handleSubmit = (e) => {
        
        e.preventDefault();
        submitData();
        

    }



    return (
        <div className="bg-zinc-900 min-h-screen pb-5">
            <Navbar />

            <div className="flex justify-center container mx-auto">
                <form className="w-11/12 bg-zinc-800 flex flex-col items-center mt-20 pt-10 pb-5" onSubmit={handleSubmit}>
                    <h1 className="text-white text-2xl mb-4 font-bold">Hemo Sync Care</h1>
                    
                    <input className="p-2 w-8/12 h-10 mb-5  focus:outline-red-500 focus:outline-2 border-hidden rounded-sm" required value={email} onChange={handleEmail} type="text" placeholder="email" /> <br />
                    <input className="p-2 w-8/12 h-10 mb-5  focus:outline-red-500 focus:outline-2 border-hidden rounded-sm" required value={password} onChange={handlePassword} type="password" placeholder="password" /> <br />
                    {error && <p className="text-red-500">{error}</p>}
                    <p className="text-white mb-4">Didn't have an Account? <span><Link className="underline text-violet-500" to="/signup" >signup</Link></span></p>
                    <button className="bg-red-500 p-2 w-20 rounded-md" >Log in</button>
                </form>
            </div>

        </div>
    )
}