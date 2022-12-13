import Head from "next/head";
import { useState } from "react";
import Hero from "../components/Hero";
import Service from "../components/Service";
import Portfolio from "../components/Portfolio";
import { BsFillMoonStarsFill } from "react-icons/bs";


export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>ADIMIS PORTFOLIO</title>
        <meta name="description" content="My Full-stack Development Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-slate-200 px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">adimis</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-blue-400 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="https://linkedin.com/in/adimis-ai/"
                >
                  Connect
                </a>
              </li>
            </ul>
        </nav>
        <Hero />
        <Service />
        <Portfolio />
       </main>
    </div>
  );
}
