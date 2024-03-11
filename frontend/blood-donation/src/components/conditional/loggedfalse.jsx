import { Link } from "react-router-dom";
import { motion } from "framer-motion";
export default function LoggedFalse() {
    return (
        <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 5 }}
            className='w-12/12 md:w-6/12 text-white z-1 pt-20 mt-24'>
            <h1 className='text-5xl font-semibold'>We make Quality Health Care! </h1>
            <p className="mt-4 mb-7 max-w-96">
                Your Time, Our Priority: Revolutionizing Hemodialysis Management!
                HemoSync Care streamlines hemodialysis management. Our platform simplifies scheduling, ensuring precision in patient care.</p>
            <Link className="p-2 bg-tertiary text-zinc-900 font-bold rounded-md hover:bg-btn hover:text-zinc-100  w-20 h-10" to="/login">Signin</Link>
        </motion.div>
    )
}