import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import AppointForm from './appointForm';
import { useState, useEffect } from 'react';
import {jwtDecode} from 'jwt-decode';



export default function LoggedTrue() {
    const [data, setData] = useState({});
    const [userData, setUserData] = useState({});
    const token = localStorage.getItem("token");
    console.log(token)
    const decodedToken = jwtDecode(token);
    console.log("Decoded : " + decodedToken.id)




    useEffect(() => {
        async function fetchData() {
            const res = await fetch(`http://localhost:3000/current/${decodedToken.id}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": localStorage.getItem("token")
                },
            });
            const data = await res.json();
            setData(data);
            console.log(data[0]);

        }
        fetchData();
    }, []);

    const diffDays = () => {
        const date1 = new Date(data[0] && data[0].appointment_date);
        const date2 = new Date();
        const diffTime = Math.abs(date2 - date1);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        console.log(diffDays)
        return diffDays;
    }
    return (
        <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 5 }}
            className='w-full md:6/12 text-white z-1 min-h-56 h-auto bg-transparent pb-10'>
            <h1 className='text-center text-5xl font-bold pt-2 mb-10'>Your progress</h1>
            <div className={data[0] && data[0] ? "grid grid-cols-1 items-center justify-center w-full gap-4 md:grid-cols-3" : 'hidden'}>
                <div className="min-h-48 h-auto bg-zinc-700 rounded-md hover:bg-zinc-600 hover:-translate-y-5 transition-all">
                    <h1 className='font-bold text-2xl text-center p-10 text-red-500'>Participate times</h1>
                    <h1 className='font-semibold text-xl pb-20 text-center'>{data[0] && data[0].participate_times}</h1>
                </div>

                <div className="min-h-48 h-auto bg-zinc-700 rounded-md hover:bg-zinc-600 hover:-translate-y-5 transition-all">
                    <h1 className='font-bold text-2xl text-center p-10 text-red-500'>Appointment Day</h1>
                    <h1 className='font-semibold text-xl pb-20 text-center'>{data[0] && new Date(data[0].appointment_date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</h1>
                </div>

                <div className="min-h-48 h-auto bg-zinc-700 rounded-md hover:bg-zinc-600 hover:-translate-y-5 transition-all ">
                    <h1 className='font-bold text-2xl text-center p-10 text-red-500'>Remaining Day(s)</h1>
                    <h1 className='font-semibold text-xl pb-20 text-center'>{diffDays()}</h1>
                </div>
            </div>


            <div>
                <AppointForm />
            </div>


            <div className='pt-10'>
                <Link className='bg-red-500 p-3 w-28 font-semibold text-white mt-48 rounded-md hover:bg-red-700' to="/profile">Your Profile</Link>
            </div>

            
        </motion.div>
    )
}