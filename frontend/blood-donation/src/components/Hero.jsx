import hero from './assets/doctors.png'
import { motion } from 'framer-motion'
import LoggedFalse from './conditional/loggedfalse'
import LoggedTrue from './conditional/loggedTrue'
import { useState} from 'react'

export default function Hero() {

    const [data, setData] = useState({});
    let logged = false;

    if (localStorage.getItem('token')) {
        logged = true;
    }else {
        logged = false;
    }
    
    return (
        <div className='flex flex-col justify-center m-10 pt-20 md:justify-between md:flex-row min-h-screen '>
            <motion.div
                animate={{
                    scale: [1, 1.05, 1],
                }}
                transition={{
                    duration: 2,
                    ease: "easeInOut",
                    repeat: Infinity,
                }}
                className='w-12/12 md:w-6/12 z-0'>
                <img className='w-11/12 mb-8' src={hero} alt="hero" />
            </motion.div>

            {logged ? <LoggedTrue /> : <LoggedFalse />}

            
        </div>
    )
}