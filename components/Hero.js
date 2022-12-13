import React from 'react'
import {
    AiFillLinkedin,
    AiOutlineGithub
  } from "react-icons/ai";
import deved from "../public/dev-ed-wave.png";
import Image from "next/image";
import Link from 'next/link';

function Hero() {
  return (
    <section className="min-h-screen">
        <div className="text-center py-10 p-10">
        <h3 className="py-1 font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">ADITYA MISHRA</h3>
        <h3 className="py-1 font-extrabold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">FULL STACK DEVELOPER</h3>
          <p className="text-5xl py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
            Providing services for front-end & back-end
            needs. Join me down below and let&apos;s get cracking!
          </p>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
            <Link href="https://github.com/adimis-ai" target="_blank" rel="noreferrer"><AiOutlineGithub className=" cursor-pointer"/></Link>
            <Link href="https://linkedin.com/in/adimis-ai/" target="_blank" rel="noreferrer"><AiFillLinkedin className=" cursor-pointer"/></Link>
          </div>
          <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
            <Image src={deved} layout="fill" objectFit="cover" alt='avatar'/>
          </div>
        </div>
    </section>
  )
}

export default Hero 