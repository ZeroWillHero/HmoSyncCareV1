import { GiKidneys } from "react-icons/gi"
import Appoinment from "../Appoinments"
import AddAppoint from "../AddAppoint"
import Approved from "../Approved"
import ToApprove from "../ToApprove"
export default function AdminLogged() {
    return (
        <div className="bg-secondary min-h-screen text-white h-auto pb-10">
            <div>
                <div className="flex justify-start">
                    <GiKidneys className="text-red-500 text-5xl me-5 p-2" />
                    <h1 className="font-bold text-4xl text-tertiary">HemoSyncCare</h1>
                </div>

                <h1 className="text-3xl p-5 font-semibold">Admin panel</h1>

            </div>

            <div>
                <AddAppoint />
            </div>

            <div>
                <Appoinment />
            </div>

            <div>
                <Approved />
            </div>

            <div>
                <ToApprove />
            </div>
        </div>
    )
}