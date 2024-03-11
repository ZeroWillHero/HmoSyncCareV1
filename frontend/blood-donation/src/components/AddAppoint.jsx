import { useState, useEffect } from "react";

export default function AddAppoint() {
    const [title, setTitle] = useState("");
    const [disease, setDisease] = useState("");
    const [appoinmentDate, setAppoinmentDate] = useState("");
    const [done, setDone] = useState(false);
    const [approved, setApproved] = useState(false);

    const [user, setUser] = useState("");
    const [users, setUsers] = useState([]);

    let user_id = "";

    async function submitData() {
        const res = await fetch("http://localhost:3000/admin/create_appoinment", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title,
                disease,
                appoinmentDate,
                done,
                approved,
                user_id : user
            })
        });
        if (res.ok) {
            alert("appoinment added");
        } else {
            alert("failed...!");
        }
    }

    useEffect(() => {
        const getUsers = async () => {
            try {
                const response = await fetch("http://localhost:3000/users");
                const data = await response.json();
                setUsers(data);
                console.log(data)
            } catch (error) {
                console.error('Failed to fetch users:', error);
            }
        };

        getUsers();
    },[]);

    const handleTitle = (e) => {
        setTitle(e.target.value);
    }

    const handleDisease = (e) => {
        setDisease(e.target.value);
    }

    const handleDate = (e) => {
        setAppoinmentDate(e.target.value);
        console.log(appoinmentDate)
    }

    const handleDone = (e) => {
        setDone(e.target.checked);
    }

    const handleApprove = (e) => {
        setApproved(e.target.checked);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await submitData();
    }

    const handleUserChange = (e) => {
        setUser(e.target.value);
        console.log(user);
        user_id = user;
        
    }

    return (
        <div className="bg-primary m-2">
            <h2 className="text-black text-xl font-bold p-3">Add an Appoinment</h2>
            <form className="p-5" onSubmit={handleSubmit}>
                <input className="p-2 w-8/12 h-10 mb-5  focus:outline-red-500 focus:outline-2 border-hidden rounded-sm text-black" onChange={handleTitle} value={title} required type="text" placeholder="title" /> <br />
                <input className="p-2 w-8/12 h-10 mb-5  focus:outline-red-500 focus:outline-2 border-hidden rounded-sm text-black" onChange={handleDisease} value={disease} required type="text" placeholder="Disease" /> <br />
                <input className="p-2 w-8/12 h-10 mb-5  focus:outline-red-500 focus:outline-2 border-hidden rounded-sm text-black" onChange={handleDate} value={appoinmentDate} required type="date" placeholder="appoinment date" /> <br />
                <select className="bg-secondary pb-2 mb-2" value={user._id} onChange={handleUserChange}>
                    <option value="">Select user</option>
                    {users && users.map((user) => (
                        user._id && user.firstname ?<option key={user._id} value={user._id}>{`${user.firstname} ${user.lastname} `}</option> : null
                    ))}
                </select> <br />
                <input className="" type="checkbox" checked={done} onChange={handleDone} /><span className="ms-2">please check if appoinment done</span> <br />
                <input className="" type="checkbox" checked={approved} onChange={handleApprove} /><span className="ms-2">Do you Approve this? if please check </span> <br />
                <button className="bg-red-500 p-3 rounded-md m-3" type="submit">Add appoinment</button>
            </form>
        </div>
    );
}