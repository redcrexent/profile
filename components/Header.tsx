import React, { useState } from 'react'
import HeaderIcon from '../components/HeaderIcon'
import { motion } from "framer-motion"

type Props = {}

function Header({ }: Props) {

    const [hover, sethover] = useState("gray");


    return (
        <header className='sticky top-0 flex justify-between max-w-7xl mx-auto p-5 z-20 xl:items-center'>
            <motion.div
                initial={{
                    x: -500,
                    scale: 0,
                    opacity: 0
                }}
                animate={{
                    x: 0,
                    scale: 1,
                    opacity: 1
                }}
                transition={{
                    duration: 1.5
                }}
                className='flex flex-row items-center'>

                <HeaderIcon URL='https://www.linkedin.com/in/taha-akhtar-11371629' />
                <HeaderIcon URL='https://github.com/redcrexent' />
            </motion.div>
            <motion.div

                initial={{
                    x: 500,
                    scale: 0,
                    opacity: 0
                }}
                animate={{
                    x: 0,
                    scale: 1,
                    opacity: 1
                }}
                transition={{
                    duration: 1.5
                }}
                className='flex flex-row items-center text-gray-300 cursor-pointer' >

                <HeaderIcon Network='email' />

                <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>
                    let&apos;s connect
                </p>
            </motion.div>
        </header>
    )
}

export default Header