import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { jwtDecode } from "jwt-decode";

export default function Profile() {

    const token = localStorage.getItem("token");
    const decoded = jwtDecode(token);
    const user = decoded.id
    const [data, setData] = useState({});

    useEffect(() => {
        async function fetchData() {
            const res = await fetch(`http://localhost:3000/profile/${user}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": localStorage.getItem("token")
                },
            });
            const data = await res.json();
            setData(data);
            console.log(data.appointments[0]);


        }

        fetchData();

    }, [])
    return (


        <div className="min-h-screen bg-zinc-800 text-white h-auto pb-5">
            <Navbar />
            <h1 className=" mt-5 text-3xl text-center">Your profile</h1>

            <div className="flex justify-center items-center" >
                <div className="m-5">
                    <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" className="rounded-full w-40 h-40" />
                </div>
                <table border="1" className="mb-20 mt-10">
                    
                        <tr>
                        <td className="p-2 font-semibold">name</td>
                        <td className="p-2 font-semibold">{data.user && `${data.user.firstname} ${data.user.lastname}`}</td>
                    </tr>

                    <tr>
                        <td className="p-2 font-semibold">Age</td>
                        <td className="p-2 font-semibold">22</td>
                    </tr>

                    <tr>
                        <td className="p-2 font-semibold">Adress</td>
                        <td className="p-2 font-semibold">Panduwasnuwara,Hettipola</td>
                    </tr>
                   

                </table>
            </div>
            <h1 className='text-center text-3xl font-bold pt-2 mb-10'>Your progress</h1>
            <div className='grid grid-cols-1 items-center justify-center w-full gap-4 md:grid-cols-3'>
                <div className="min-h-48 h-auto bg-zinc-700 rounded-md hover:bg-zinc-600 hover:-translate-y-5 transition-all">
                    <h1 className='font-bold text-3xl text-center p-10 text-red-500'>Participate times</h1>
                    <h1 className='font-semibold text-5xl text-center'>{}</h1>
                </div>

                <div className="min-h-48 h-auto bg-zinc-700 rounded-md hover:bg-zinc-600 hover:-translate-y-5 transition-all">
                    <h1 className='font-bold text-3xl text-center p-10 text-red-500'>Appointment Day</h1>
                    <h1 className='font-semibold text-5xl text-center'>2022.12.09</h1>
                </div>

                <div className="min-h-48 h-auto bg-zinc-700 rounded-md hover:bg-zinc-600 hover:-translate-y-5 transition-all ">
                    <h1 className='font-bold text-3xl text-center p-10 text-red-500'>Remaining Day(s)</h1>
                    <h1 className='font-semibold text-5xl text-center'>5</h1>
                </div>
            </div>

            <div className="mt-20">
                <h1 className="text-3xl text-center">Appointment History</h1>
                <div>
                    <table cellPadding={20} className="table-auto w-full bg-zinc-700 mt-10">
                        <tr className="text-center text-xl bg-zinc-600">
                            <th>Appoinment Title</th>
                            <th>Disease</th>
                            <th>Status</th>
                        </tr>

                        <tr className="text-center bg-zinc-500">
                            
                            <td>{data.appoinment && data.appoinment.title}</td>
                            <td>Headache</td>
                            <td>Completed</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>




    )
}