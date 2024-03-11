import { useState, useEffect } from "react";

export default function Appoinment() {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/admin/appoints/")
            .then(res => res.json())
            .then(data => {
                setData(data)
                console.log(data)
            })
    }, [])

    return (
        <div className="text-primary bg-tertiary p-5 m-2">
            <h1 className="text-xl p-5 font-semibold">All appoinments</h1>
            <table className="table-auto w-full">
                <thead>
                    <tr>
                        <th>Appoinment</th>
                        <th>Patient</th>
                        <th>Disease</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {data.length > 0 ? (
                        data.map((item, index) => (
                            <tr className="text-center shadow-lg text-black" key={index}>
                                <td className="p-4">{item.title}</td>
                                <td className="p-4">{item.user ? item.user.firstname : 'N/A'}</td> {/* Check if item.user is not null or undefined */}
                                <td className="p-4">{item.disease}</td>
                                <td className={item.approved ? "text-green-500 p-4" : "p-4 text-red-500"}>{item.approved ? 'Approved' : 'Not Approved'}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4" className="text-center p-4">No data found</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}