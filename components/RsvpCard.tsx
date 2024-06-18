import { Hammersmith_One } from 'next/font/google';
import Image from 'next/image';
import React from 'react'
import Divider from './Divider';
const hammersmithOne = Hammersmith_One({ subsets: ["latin"], weight: '400' });

const RsvpCard = () => {
  return (
    <div className="relative w-full">
        <Image src="/invitation.webp" alt="invitation" height={600} width={700} className="absolute w-full h-full object-cover z-[-1]" />
        <div className="flex flex-col justify-center items-center gap-10 text-2xl scale-75 p-20 relative text-white bg-gray-500 bg-opacity-50">
            <div className={``}>TOGETHER WITH THEIR FAMILIES</div>
            <div className={`text-8xl ${hammersmithOne.className}`}>JOSH MONTGOMERY</div>
            <div className={`flex gap-8`}><Divider width={100} height={10} rounded={true} color={'white'} /> AND <Divider width={100} height={10} rounded={true} color={'white'}/></div>
            <div className={`text-8xl ${hammersmithOne.className}`}>BEKAH MAE CURRAN</div>
            <div>INVITE YOU TO JOIN THEM IN CELEBRATING THEIR UNION</div>
            <div className="py-3"><Divider width={100} height={10} rounded={true} color={'white'}/></div>
            <div className="text-center">
                <div className={`${hammersmithOne.className} text-3xl`}>April 19, 2025</div>
                <div>SATURDAY | SIX O&apos;CLOCK</div>
            </div>
            <div className="text-center">
                <div className={`${hammersmithOne.className} text-3xl`}>TO BE DETERMINED</div>
                <div>AUSTIN, TEXAS</div>
            </div>
        </div>
    </div>
  )
}

export default RsvpCard