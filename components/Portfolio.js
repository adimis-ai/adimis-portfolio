import React from 'react'
import Image from "next/image";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";


function Portfolio() {
  return (
    <section className="py-10">
    <div>
      <h3 className="py-1 text-center font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">PORTFOLIO</h3>
      <br />
      <br />
    </div>
    <br />
    <br />
    <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
      <div className="basis-1/3 flex-1 shadow-2xl rounded-xl cursor-pointer">
        <a href="https://github.com/adimis-ai/Web3_Crowdfunding_DApp" target="_blank" rel="noreferrer">
          <Image
            className="rounded-lg object-cover"
            layout="responsive"
            src={web1}
            alt='project'
          />
        </a>
      </div>
      <div className="basis-1/3 flex-1 shadow-2xl rounded-xl cursor-pointer">
      <a href="https://github.com/adimis-ai/SecureGmail" target="_blank" rel="noreferrer">
        <Image
          className="rounded-lg object-cover"
          layout="responsive"
          src={web2}
          alt='project'
        />
      </a>
      </div>
    </div>
  </section>
  )
}

export default Portfolio