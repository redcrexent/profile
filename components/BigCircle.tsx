import React from 'react'

type Props = {}

function BigCircle({ }: Props) {
    return (
        <>
        <div className='relative flex justify-center items-center'>
            <div className='absolute border mt-52 border-gray-500 rounded-full h-[200px] w-[200px] animate-ping'></div>
            <div className='absolute border-[#3333] mt-52 rounded-full h-[300px] w-[300px]'></div>
            <div className='absolute border-[#3333] mt-52  rounded-full h-[500px] w-[500px]'></div>
            <div className='absolute border-[#F7AB0A] mt-52  rounded-full h-[650px] w-[650px] animate-ping'></div>
            <div className='absolute border-[rgba(51,51,51,0.2)] mt-52 rounded-full h-[800px] w-[800px]'></div>
            </div>
        </>
    )
}

export default BigCircle