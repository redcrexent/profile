import React from 'react'
import { SocialIcon } from 'react-social-icons'
type Props = {}

function Header({ }: Props) {
    return (
        <header className='sticky top-0 flex justify-between max-w-7xl mx-auto p-5 z-20 xl:items-center'>
            <div className='flex flex-row items-center'>
                <SocialIcon url='https://www.linkedin.com/in/taha-akhtar-11371629' fgColor='gray' bgColor='transparent' />
                <SocialIcon url='https://github.com/redcrexent' fgColor='gray' bgColor='transparent' />
                {/* social Icons */}
            </div>
            <div className='flex flex-row items-center text-gray-300 cursor-pointer' >
                <SocialIcon
                    fgColor='gray' bgColor='transparent'
                    network='email'
                />
           
            <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>
                let's connect
            </p>
            </div>
        </header>
    )
}

export default Header