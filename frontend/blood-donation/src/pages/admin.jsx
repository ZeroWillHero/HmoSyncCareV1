import { useState } from "react";
import AdminLog from './../components/conditional/AdminLog';
import AdminLogged from './../components/conditional/AdminLogged'

export default function Admin () {

    let logged = false
    const token = localStorage.getItem('token')

    if (token){
        logged = true
    }
    else {
        logged = false
    }
    
    return (
       <div>
            {logged ? <AdminLogged /> : <AdminLog />}
       </div> 
    )
}