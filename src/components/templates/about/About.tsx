import { AboutPicture } from '@/components/atom/assets'
import { MainButton, MainHeading } from '@/components/moluecles'
import Image from 'next/image'
import React from 'react'

export default function About() {
    return (
        <div>
            <div className="image relative mx-auto">
                <Image src={AboutPicture} alt='' className='min-w-full min-h-[400px]' />
                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full'>
                    <p className=" font-medium text-[20px] md:text-[24px] text-white leading-[30px] mb-5">
                        Rent your car with
                    </p>
                    <h1 className="font-medium text-[28px] md:text-[40px] text-white leading-[58px] mb-5">
                        MOST TRUSTED IN DUBAI
                    </h1>
                </div>
            </div>
            <div className="about">
            <div className="about container mx-auto my-24 px-10">
                <MainHeading heading="About Us" />
                <div className="big-box  my-14 font-medium text-lg leading-6 text-center text-[#666666] ">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum maxime officia fugit. Obcaecati veritatis, perferendis repellat nulla in dolorem. Tenetur nihil dolore atque nemo laudantium reiciendis aperiam dolorem quisquam itaque nam hic dolores, ipsum aliquid necessitatibus magni cupiditate reprehenderit quae ratione ab minima adipisci vel facere iste. Optio architecto quibusdam ullam inventore earum aspernatur porro adipisci ducimus doloremque repudiandae aperiam eius assumenda itaque, ab tenetur quidem exercitationem libero voluptate aut rerum voluptatibus molestiae? Aliquid corporis delectus saepe sunt. Veniam aliquam aut dolor alias autem voluptate, nulla eum eveniet, labore asperiores eos numquam ullam? Veniam voluptas nemo odit minus error eaque quas deserunt libero fugit porro qui, est non nam a natus expedita. Nostrum iusto voluptatum saepe repellendus delectus quisquam inventore obcaecati perferendis soluta at assumenda deleniti rem corporis accusamus dolor, vel ad voluptatem? Totam accusantium porro non eveniet voluptates dignissimos! Aperiam illo inventore quis corrupti vero totam iusto modi! Optio voluptates molestiae exercitationem fugiat voluptatem error minus doloremque delectus illum repellendus atque, fugit itaque sed voluptatum numquam excepturi, quam dolore est. Incidunt voluptate, in est ducimus numquam obcaecati iure quasi quisquam labore sequi hic sint itaque blanditiis saepe earum vitae nam impedit molestias officia fugit quae doloremque aperiam amet odio?
                </div>
                <MainButton link='/' title='SEE MORE'  />
            </div>
            </div>
        </div>
    )
}
