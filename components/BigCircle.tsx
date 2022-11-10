import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

function BigCircle({ }: Props) {
    return (
        <motion.div
        initial={{
            opacity:0,
        }}
        animate={{
            scale:[1,2,1.5,1],
            opacity:[0.2,0.6,0.8,1],

        }}
        
        transition={{
            duration:2.5
        }}
        >
            <div className='relative flex justify-center items-center'>
                <div className='absolute border mt-52 border-gray-500 rounded-full h-[100px] w-[100px] animate-ping'></div>
                <div className='absolute border mt-52 border-gray-500 rounded-full h-[300px] w-[300px] animate-pulse'></div>
            </div>

        </motion.div>
    )
}
export default BigCircle