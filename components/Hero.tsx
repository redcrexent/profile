import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BigCircle from './BigCircle';
import Image from 'next/image';

type Props = {}

export default  function  Hero({ }: Props) {

    const [text, count] = useTypewriter(
        {
            words: ["Hey, This is Taha Akhtar", "Loves to build solution that scale", "Writes a lot of code"],
            loop: true,
            delaySpeed: 2000
        }
    );

    return (

        <div className='h-screen flex flex-col items-center justify-center text-center
        overflow-hidden'>
            <BigCircle />
            <Image src="/assets/profile.jpg" className='relative rounded-full object-cover'  width={100} height={100} alt='Taha' />
            
            <h1>
                <span>{text}</span>
                <Cursor cursorColor='gray' />
            </h1>
        </div>
    )
}