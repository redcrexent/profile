import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BigCircle from './BigCircle';

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

        <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center
        overflow-hidden'>
            <BigCircle />
            <h1>
                <span>{text}</span>
                <Cursor cursorColor='Green' />
            </h1>
        </div>
    )
}