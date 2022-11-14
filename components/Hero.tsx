import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BigCircle from './BigCircle';
import Image from 'next/image';

type Props = {}

export default  function  Hero({ }: Props) {

    const [text, count] = useTypewriter(
        {
            words: ["Hey, This is Taha Akhtar", "Loves to build solution that scales", "Writes a lot of code"],
            loop: true,
            delaySpeed: 2000
        }
    );

    return (

        <div className='h-screen flex flex-col items-center justify-center text-center
        overflow-hidden'>
            <BigCircle />
            <Image src="/assets/profile.jpg" className='relative rounded-full object-cover'  width={100} height={100} alt='Taha' />
            <h2 className="text-sm text-gray-500 pb-2 tracking-[7px] uppercase pt-2">
                Software Engineer
                </h2>
            <h1 className='text-3xl lg:text-4xl font-semibold px-10'>
                <span className='mr-3' >{text}</span>
                <Cursor cursorColor='gray' />
            </h1>
        </div>
    )
}