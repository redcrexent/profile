import React, { useState } from 'react'
import { SocialIcon } from 'react-social-icons'

type Props = {
    URL?: string
    Network?: string
}

export default function HeaderIcon({ URL, Network }: Props) {

    const [hover, sethover] = useState("gray");
    return (
        <>
            {URL != null && <SocialIcon url={URL} fgColor={hover} bgColor='transparent' onMouseOver={() => sethover("white")} onMouseLeave={() => sethover("gray")} />}
            {Network != null && <SocialIcon network={Network} fgColor={hover} bgColor='transparent' onMouseOver={() => sethover("white")} onMouseLeave={() => sethover("gray")} />}
  
        </>
    )
}