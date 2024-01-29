export default function Admin() {
    return (
        <div className="min-h-screen bg-zinc-900 pb-5">
            <div className="h-auto">
                <div className="p-5 w-56 text-white flex">
                    <img className="h-auto" src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
                    <div className="ms-5 me-5">
                        <h1 className="text-3xl font-bold">Admin</h1>
                        <h1 className="text-2xl font-semibold">Admin</h1>
                    </div>
                </div>


            </div>

            <div className="text-white bg-zinc-800 h-auto pb-4">
                <h1 className="text-3xl font-bold p-4" >pending Approves</h1>
                <div className="m-2">
                    <table cellPadding={10} className="w-full bg-zinc-700 table-auto">
                        <tr className="text-center p-3 text-bold text-xl">
                            <th>Name</th>
                            <th>Appoinment title</th>
                            <th>Delete</th>
                           

                        </tr>

                        <tr className="text-center text-md ">
                            <td>chameera</td>
                            <td>appoinment 01</td>
                            <td><button className="bg-red-500 p-2 rounded-md">Delete</button></td>

                        </tr>
                    </table>
                </div>
            </div>


            <div className="text-white bg-zinc-800 h-auto pb-4 mt-10">
                <h1 className="text-3xl font-bold p-4" >Approved appoinments</h1>
                <div className="m-2">
                    <table cellPadding={10} className="w-full bg-zinc-700 table-auto">
                        <tr className="text-center p-3 text-bold text-xl">
                            <th>Name</th>
                            <th>Appoinment title</th>
                            <th>approve</th>
                            <th>reject</th>

                        </tr>

                        <tr className="text-center text-md ">
                            <td>chameera</td>
                            <td>appoinment 01</td>
                            <td><button className="bg-green-500 p-2 rounded-md">approve</button></td>
                            <td><button className="bg-red-500 p-2 rounded-md">Reject</button></td>

                        </tr>
                    </table>
                </div>
            </div>

            <div className="text-white bg-zinc-800 h-auto pb-4 mt-10">
                <h1 className="text-3xl font-bold p-4" >Rejected appoinments</h1>
                <div className="m-2">
                    <table cellPadding={10} className="w-full bg-zinc-700 table-auto">
                        <tr className="text-center p-3 text-bold text-xl">
                            <th>Name</th>
                            <th>Appoinment title</th>
                            <th>Delete</th>
                   

                        </tr>

                        <tr className="text-center text-md ">
                            <td>chameera</td>
                            <td>appoinment 01</td>
                            <td><button className="bg-red-500 p-2 rounded-md">Delete</button></td>

                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}