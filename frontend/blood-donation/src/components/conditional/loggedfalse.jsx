import { Link } from "react-router-dom";
import { motion } from "framer-motion";
export default function LoggedFalse() {
    return (
        <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 5 }}
            className='w-12/12 md:w-6/12 text-white z-1 pt-20 mt-24'>
            <h1 className='text-5xl font-semibold'>Donate yours save a life </h1>
            <p className="mt-4 mb-7">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt distinctio pariatur quasi delectus illo, quos magni facere ipsum aut officia, accusamus facilis natus soluta nemo velit est cumque recusandae debitis.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos, reprehenderit asperiores laboriosam harum deserunt voluptate necessitatibus illum odio laudantium aliquid amet voluptatem minima eaque autem. Libero nulla nobis maiores id!</p>
            <Link className="p-2 bg-tertiary text-white font-bold rounded-md hover:bg-secondary  w-20 h-10" to="/login">Signin</Link>
        </motion.div>
    )
}