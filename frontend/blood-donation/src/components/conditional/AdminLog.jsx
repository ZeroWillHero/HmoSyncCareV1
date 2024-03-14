import { useState } from "react"




export default function AdminLog () {
    const [data,setData] = useState({});
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [error,setError] = useState();


    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const submitData = async () => {
        
        const res = await fetch("http://localhost:3000/admin/login/",
        {
            method : "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body : JSON.stringify ({
                email,
                password
            })
        });
        console.log(res)
        const data = await res.json();
        if (!res.ok){
            setError(data.message)
            console.log(data.message)
            alert ("failed ...!")
        }else {
            localStorage.setItem("token", data.token);
            alert("Login Successful");
        }
    }

    const handleSubmit = (e) => {
        submitData();
        e.preventDefault();
       
        

    }



    return (
        <div>
            <div className="flex justify-center container mx-auto mb-20">
                <form className="w-11/12 bg-secondary flex flex-col items-center mt-20 pt-10 pb-5 rounded-xl shadow-2xl" onSubmit={handleSubmit} >
                    <h1 className="text-tertiary text-2xl mb-4 font-bold">Hemo Sync Care</h1>
                    <h1 className="text-white text-xl mb-4 font-bold">Admin</h1>

                    
                    <input className="p-2 w-8/12 h-10 mb-5  focus:outline-red-500 focus:outline-2 border-hidden rounded-sm" required value={email} onChange={handleEmail} type="text" placeholder="email" /> <br />
                    <input className="p-2 w-8/12 h-10 mb-5  focus:outline-red-500 focus:outline-2 border-hidden rounded-sm" required value={password} onChange={handlePassword} type="password" placeholder="password" /> <br />
                    {/* <p className="text-white">{email}</p> */}
                    {error && <p className="text-red-500">{error}</p>}
                    <button className="bg-tertiary text-zinc-900 font-bold hover:bg-btn hover:text-zinc-100 p-2 w-20 rounded-md" >Log in</button>
                </form>
            </div>
        </div>
    )
}