import { useState, useEffect } from "react";

export default function Approved() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3000/admin/appoints/approved",
            {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },

            }
        )
            .then(res => res.json())
            .then(data => {
                setData(data)
                console.log(data)
            })
    }, [])

    return (
        <div className="text-primary bg-tertiary p-5 m-2">
            <h1 className="text-xl p-5 font-semibold">Approved appoinments</h1>
            <table className="table-auto w-full">
                <thead>

                    <tr>
                        <th>Appoinment</th>
                        <th>Patient</th>
                        <th>Disease</th>

                    </tr>
                </thead>
                <tbody>

                    {data.length > 0 ? data.map((item, index) => (


                        <tr className="text-center shadow-lg text-black">
                            <td className="p-4">{item.title}</td>
                            <td className="p-4">{item.user.firstname}</td> {/* Assuming user object has a name property */}
                            <td className="p-4">{item.disease}</td>
                        </tr>

                    ))
                        : (
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