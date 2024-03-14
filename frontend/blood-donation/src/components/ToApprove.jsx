import { useState, useEffect } from "react";
export default function ToApprove() {
    const [data, setData] = useState([]);
    const [show, setShow] = useState(false);
    const [appoint, setAppoint] = useState('');

    useEffect(() => {
        fetch("http://localhost:3000/admin/appoints/toapprove")
            .then(res => res.json())
            .then(data => {
                setData(data)
                console.log(data)
            })
    }, [])

    function declineAppointment(id) {
        fetch(`http://localhost:3000/admin/appoinments/delete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                // Handle the response data if needed
                console.log(data);
                alert(data.message)
            })
            .catch(error => {
                // Handle any errors that occur during the request
                console.error(error);
            });
    }

    const handleShow = () => {
        setShow(!show)
    }

    function approve(id) {
        console.log('pressed')
        fetch(`http://localhost:3000/admin/appoints/update/${id}`,
            {
                method: "PATCH",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    approved: true,
                    appoinment_date : appoint,
                })
            }
        ).then(res => res.json())
            .then(data => {
                console.log(data);
                alert("approved successfully")
            })
            .catch(error => {
                console.error(error);
            });
    }

    function handleDate(e) {
        setAppoint(e.target.value)
    }


    return (
        <div className="text-primary bg-tertiary p-5 m-2">
            <h1 className="text-xl p-5 font-semibold">Appoinments to Approve</h1>
            <table className="table-auto w-full">
                <thead>

                    <tr>
                        <th>Appoinment</th>
                        <th>Patient</th>
                        <th>Disease</th>
                        <th>Approve</th>
                        <th>Decline</th>

                    </tr>
                </thead>
                <tbody>



                    {data.length > 0 ? data.map((item, index) => (

                        

                        <tr className="text-center shadow-lg text-black">
                            
                            <td className="p-4">{item.title}</td>
                            <td className="p-4">{item.user.firstname}</td> {/* Assuming user object has a name property */}
                            <td className="p-4">{item.disease}</td>
                            <td><button className="p-2 bg-green-500 rounded-sm m-3" onClick={handleShow} >Approve</button></td>
                            <td><button className="p-2 bg-red-500 rounded-sm m-3" onClick={() => { declineAppointment(item._id) }}>Decline</button></td>
                            <td>
                           
                                <div className={show ? "bg-secondary w-full h-auto p-2 rounded-md" : "hidden"}>

                                    <input type="date" className="w-4/12" onChange={handleDate} value={appoint} />
                                    <button className="p-2 bg-green-500 rounded-sm m-3" onClick={() => approve(item._id)}>approve</button>

                                </div>
                           
                            </td>

                        </tr>

                        






                    ))
                        :
                        (
                            <tr>
                                <td colSpan="4" className="text-center p-4">No data found</td>
                            </tr>
                        )
                    }

                </tbody>
            </table>


        </div>
    )
}