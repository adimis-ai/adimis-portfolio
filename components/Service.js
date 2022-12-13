import React from 'react'
import front from "../public/front-end.png";
import back from "../public/backend.png";
import Image from "next/image";
import tech1 from "../public/html.png";
import tech2 from "../public/css.png";
import tech3 from "../public/science.png";
import tech4 from "../public/node-js.png";
import tech5 from "../public/database.png";
import tech6 from "../public/python.png";

function Service() {
  return (
    <section>
    <div>
      <h3 className="py-1 font-extrabold text-center text-transparent text-8xl bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">MY SERVICES</h3>
      <br />
      <br />
    </div>
    <br />
    <br />
    <div className="lg:flex gap-10">
      <div className="text-center shadow-2xl p-10 rounded-xl my-10 dark:bg-white flex-1 dark:bg-slate-800">
        <Image src={front} width={100} height={100} alt='skill'/>
        <h3 className="text-4xl font-medium pt-8 pb-2 dark:text-blue-300">
          Front-End Development
        </h3>
        <br />
        <p className="py-2 text-2xl dark:text-slate-200">
          Do you have an idea for your next great website? Let&apos;s make it a
          reality..
        </p>
        <br />
        <h4 className="py-4 text-blue-800 text-2xl dark:text-blue-200">MY SKILLS</h4>
        <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
          <Image src={tech1} width={100} height={100} alt='skill'/>
          <Image src={tech2} width={100} height={100} alt='skill'/>
          <Image src={tech3} width={100} height={100} alt='skill'/>
        </div>
      </div>

      <div className="text-center shadow-2xl p-10 rounded-xl my-10 dark:bg-white flex-1 dark:bg-slate-800">
        <Image src={back} width={100} height={100} />
        <h3 className="text-4xl font-medium pt-8 pb-2 dark:text-blue-300">Back-End Development</h3>
        <br />
        <p className="py-2 text-2xl dark:text-slate-100">
          Need secure and scalable backend for your website? Let&apos;s get it done right now..
        </p>
        <br />
        <h4 className="py-4 text-blue-800 text-2xl dark:text-blue-200">MY SKILLS</h4>
        <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
          <Image src={tech4} width={100} height={100} />
          <Image src={tech5} width={100} height={100} />
          <Image src={tech6} width={100} height={100} />
        </div>
      </div>
    </div>
    <br />
    <br />
    <br />
  </section> 
  )
}

export default Service