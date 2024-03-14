import { useEffect, useState } from "react";
import AdminLog from './../components/conditional/AdminLog';
import AdminLogged from './../components/conditional/AdminLogged';
import { jwtDecode } from 'jwt-decode';




export default function Admin() {

    let logged = false
    const token = localStorage.getItem('token')

    const [isAdmin, setIsAdmin] = useState(false);
    const [data, setData] = useState({});

    useEffect(() => {
        if (token) {
            const decodedToken = jwtDecode(token);
            setIsAdmin(decodedToken.id);
            console.log("decoded: " + decodedToken.id);
            
            async function fetchData() {
                const res = await fetch(`http://localhost:3000/profile/${decodedToken.id}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": localStorage.getItem("token")
                    },
                });
                const data = await res.json();
                setData(data);
                
    
    
            }
    
            fetchData();
            
            
        }
    }, [token]);

    if (localStorage.getItem('token')) {
        logged = true;
    } else {
        logged = false;
    }






    return (
        <div>
            {logged ? <AdminLogged /> : <AdminLog />}
        </div>
    )
}