import {useState,useEffect} from 'react';
import {jwtDecode} from 'jwt-decode';


export default function AppointForm () {
    const [data,setData] = useState({});
    const [title,setTitle] = useState("");
    const [disease,setDisease] = useState("");
    const [error,setError] = useState(null);


    const token = localStorage.getItem("token");
    console.log(token)
    const decodedToken = jwtDecode(token);
    console.log("Decoded : " + decodedToken.id)

    const handleTitle = (e) => {
        setTitle(e.target.value);
    }

    const handleDisease = (e) => {
        setDisease(e.target.value);
    }

    async function submitData (){
        const res = await fetch("http://localhost:3000/appoints/",
        {
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "Authorization":localStorage.getItem("token")
            },

            body:JSON.stringify({
                title,
                disease,
                user_id:decodedToken.id
            })
        })

        if (!res.ok){
            const data = await res.json();
            setError(data.message);
            return;
        }else {
            alert("Appoinment request send successfully");
        }
    }

    const handleSubmit = (e) => {
        submitData();
    }

    



    return (
        <div>
            <div className="w-full bg-zinc-800 h-auto p-5 mt-20 ">
                <h1 className="text-center text-2xl font-bold">Request an appoinment</h1>
                <form className="flex flex-col items-center mt-10" onSubmit={handleSubmit}>
                <input className="p-2 w-8/12 h-10 mb-5  focus:outline-red-500 focus:outline-2 border-hidden rounded-sm text-black" value={title} onChange={handleTitle} required  type="text" placeholder="title" /> <br />
                <input className="p-2 w-8/12 h-10 mb-5  focus:outline-red-500 focus:outline-2 border-hidden rounded-sm text-black" value={disease} onChange={handleDisease} required  type="text" placeholder="Disease" /> <br />
                {error && <p className="text-red-500">{error}</p>}
                <button  className="bg-red-500 p-2 w-20 rounded-md">submit</button>


                </form>
            </div>
        </div>
    )
}