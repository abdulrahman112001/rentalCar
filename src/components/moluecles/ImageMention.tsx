import Image from 'next/image'
import React from 'react'

export default function ImageMention({link,image}:any) {
    return (
        <a href={link}>
            <Image src={image} alt=''/>
        </a>
    )
}
